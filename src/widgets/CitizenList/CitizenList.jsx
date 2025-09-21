import { CitizenCard } from "./CitizenCard/CitizenCard";
import s from "./CitizenList.module.scss";

export const CitizenList = ({ citizens }) => {
  return (
    <div className={s.list}>
      {citizens.map(citizen => (
        <CitizenCard key={citizen.id} citizen={citizen} />
      ))}
    </div>
  );
};
