export const groupByBirthPlace = citizens => {
  const groups = {};

  citizens.forEach(citizen => {
    const place = citizen.birthPlace || "Неизвестно";
    groups[place] = (groups[place] || 0) + 1;
  });

  return groups;
};
