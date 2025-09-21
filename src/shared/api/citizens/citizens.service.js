import { citizens } from "../../mocks/citizens";
import { ITEMS_PER_CITIZENS_PAGE } from "../../config/constants";
import { calculateAge, calculateExperienceYears } from "../../lib/utils";

export const citizensService = {
  filterByText: query => {
    if (!query.trim()) {
      return citizens;
    }

    const searchTerm = query.toLowerCase().trim();
    const filtered = citizens.filter(citizen =>
      citizensService.matchCitizen(citizen, searchTerm)
    );

    return filtered;
  },

  filterCitizens: (filters = {}, currentPage = 1) => {
    const offset = (currentPage - 1) * ITEMS_PER_CITIZENS_PAGE;

    let filtered = citizens;

    if (filters.query) {
      filtered = citizensService.filterByText(filters.query, currentPage);
    }

    if (filters.age) {
      filtered = filtered.filter(c => {
        const age = calculateAge(c.birthDate);
        return age >= filters.age.min && age <= filters.age.max;
      });
    }

    if (filters.experience) {
      filtered = filtered.filter(c => {
        const years = calculateExperienceYears(c.workExperience);
        return (
          years >= filters.experience.min && years <= filters.experience.max
        );
      });
    }

    if (filters.education) {
      console.log(filters.education);
      filtered = filtered.filter(c =>
        c.education?.some(e =>
          e.degree.toLowerCase().includes(filters.education)
        )
      );
    }

    if (filters.hasRelatives !== undefined) {
      filtered = filtered.filter(c =>
        filters.hasRelatives ? c.relatives.length > 0 : c.relatives.length === 0
      );
    }

    const result = {
      citizens: filtered.slice(offset, offset + ITEMS_PER_CITIZENS_PAGE),
      count: filtered.length,
    };

    return result;
  },

  matchCitizen: (citizen, searchTerm) => {
    const fullName =
      `${citizen.lastName} ${citizen.firstName} ${citizen.middleName}`.toLowerCase();
    if (fullName.includes(searchTerm)) return true;

    if (citizen.passport?.toLowerCase().includes(searchTerm)) return true;
    if (citizen.phone?.toLowerCase().includes(searchTerm)) return true;
    if (citizen.email?.toLowerCase().includes(searchTerm)) return true;

    return false;
  },

  getCitizenById: id => {
    return citizens.find(citizen => citizen.id === id);
  },

  getRelatives: citizenId => {
    const citizen = citizensService.getCitizenById(citizenId);
    if (!citizen) return [];

    return citizen.relatives
      .map(relative => {
        const relativeData = citizensService.getCitizenById(relative.id);
        return relativeData
          ? { ...relativeData, relation: relative.relation }
          : null;
      })
      .filter(Boolean);
  },

  updateCitizen: (id, updates) => {
    const index = citizens.findIndex(citizen => citizen.id === id);
    if (index === -1) return undefined;

    citizens[index] = { ...citizens[index], ...updates };
    return citizens[index];
  },

  getTotalCount: query => {
    if (!query) return citizens.length;

    const searchTerm = query.toLowerCase().trim();
    return citizens.filter(citizen =>
      citizensService.matchCitizen(citizen, searchTerm)
    ).length;
  },
};
