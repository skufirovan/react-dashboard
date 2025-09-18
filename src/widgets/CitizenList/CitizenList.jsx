import { CitizenCard } from "./CitizenCard/CitizenCard";
import { searchCitizens } from "./lib/utils";
import s from "./CitizenList.module.scss";

export const CitizenList = ({ query, currentPage }) => {
  const currentCitizens = searchCitizens(query, currentPage);

  return (
    <div className={s.list}>
      {currentCitizens.map(citizen => (
        <CitizenCard key={citizen.id} citizen={citizen} />
      ))}
    </div>
  );
};
