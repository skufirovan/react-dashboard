export const parseFilters = searchParams => {
  const filters = {};

  if (searchParams.get("query")) {
    filters.query = searchParams.get("query");
  }

  if (searchParams.get("age")) {
    const [min, max] = searchParams.get("age").split("-").map(Number);
    filters.age = { min, max };
  }

  if (searchParams.get("experience")) {
    const [min, max] = searchParams.get("experience").split("-").map(Number);
    filters.experience = { min, max };
  }

  if (searchParams.get("education")) {
    filters.education = searchParams.get("education");
  }

  if (searchParams.get("hasRelatives")) {
    filters.hasRelatives = searchParams.get("hasRelatives") === "true";
  }

  return filters;
};
