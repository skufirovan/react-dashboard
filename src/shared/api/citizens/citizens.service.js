import { citizens } from "../../mocks/citizens";
import { ITEMS_PER_CITIZENS_PAGE } from "../../config/constants";

export const citizensService = {
  searchCitizens: (query, currentPage = 1) => {
    const offset = (currentPage - 1) * ITEMS_PER_CITIZENS_PAGE;

    if (!query.trim()) {
      return citizens.slice(offset, offset + ITEMS_PER_CITIZENS_PAGE);
    }

    const searchTerm = query.toLowerCase().trim();
    const filteredCitizens = citizens.filter(citizen =>
      citizensService.matchCitizen(citizen, searchTerm)
    );

    return filteredCitizens.slice(offset, offset + ITEMS_PER_CITIZENS_PAGE);
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
