import { calculateAge, calculateExperienceYears } from "../lib/utils";

export const getAgeExperienceData = citizens => {
  const dataMap = {};

  citizens.forEach(citizen => {
    const age = calculateAge(citizen.birthDate);
    const experience = calculateExperienceYears(citizen.workExperience);

    const key = `${age}-${experience}`;
    dataMap[key] = (dataMap[key] || 0) + 1;
  });

  return Object.entries(dataMap).map(([key, count]) => {
    const [age, experience] = key.split("-").map(Number);
    return {
      x: age,
      y: experience,
      r: 5 + count * 2,
      count,
    };
  });
};
