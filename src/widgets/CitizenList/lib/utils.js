import { citizens } from "@shared/mocks/index";
import { ITEMS_PER_CITIZENS_PAGE } from "@shared/config/constants";

export function searchCitizens(query, currentPage) {
  const offset = (currentPage - 1) * ITEMS_PER_CITIZENS_PAGE;

  if (!query.trim()) {
    return citizens.slice(offset, offset + ITEMS_PER_CITIZENS_PAGE);
  }

  const searchTerm = query.toLowerCase().trim();

  const filteredCitizens = citizens.filter(citizen => {
    const fullName =
      `${citizen.lastName} ${citizen.firstName} ${citizen.middleName}`.toLowerCase();
    if (fullName.includes(searchTerm)) return true;

    if (citizen.passport?.toLowerCase().includes(searchTerm)) return true;
    if (citizen.phone?.toLowerCase().includes(searchTerm)) return true;
    if (citizen.email?.toLowerCase().includes(searchTerm)) return true;

    return false;
  });

  return filteredCitizens.slice(offset, offset + ITEMS_PER_CITIZENS_PAGE);
}
