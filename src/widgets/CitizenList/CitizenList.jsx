import { CitizenCard } from "./CitizenCard/CitizenCard";
import { citizensService } from "@shared/api/index";
import s from "./CitizenList.module.scss";

export const CitizenList = ({ query, currentPage }) => {
  const currentCitizens = citizensService.searchCitizens(query, currentPage);

  return (
    <div className={s.list}>
      {currentCitizens.map(citizen => (
        <CitizenCard key={citizen.id} citizen={citizen} />
      ))}
    </div>
  );
};
