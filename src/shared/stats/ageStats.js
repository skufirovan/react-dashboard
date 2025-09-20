import { calculateAge } from "../lib/utils";

export const groupByAge = citizens => {
  const groups = {
    "0-18": 0,
    "19-30": 0,
    "31-45": 0,
    "46-60": 0,
    "60+": 0,
  };

  citizens.forEach(citizen => {
    const age = calculateAge(citizen.birthDate);

    if (age <= 18) groups["0-18"]++;
    else if (age <= 30) groups["19-30"]++;
    else if (age <= 45) groups["31-45"]++;
    else if (age <= 60) groups["46-60"]++;
    else groups["60+"]++;
  });

  return groups;
};
