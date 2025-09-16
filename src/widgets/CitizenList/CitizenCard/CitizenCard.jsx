import { Link } from "react-router-dom";
import s from "./CitizenCard.module.scss";

export const CitizenCard = ({ citizen }) => {
  return (
    <Link to={`/citizens/${citizen.id}`} className={s.card}>
      <div className={s.identity}>
        <p>
          {citizen.lastName} {citizen.firstName} {citizen.middleName}
        </p>
        <p>{citizen.birthDate}</p>
      </div>
      <div className={s.contacts}>
        <span>{citizen.phone}</span>
        <span>{citizen.email}</span>
      </div>
    </Link>
  );
};
