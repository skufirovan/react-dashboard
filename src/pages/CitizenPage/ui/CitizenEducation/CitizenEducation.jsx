import { CardList } from "@shared/ui/index";
import s from "./CitizenEducation.module.scss";

export const CitizenEducation = ({ education }) => {
  return (
    <CardList
      items={education}
      emptyMessage="Образование не указано"
      renderItem={edu => (
        <>
          <h4 className={s.degree}>{edu.degree}</h4>
          <p className={s.institution}>{edu.institution}</p>
          <p className={s.dates}>
            {edu.startDate} - {edu.endDate}
          </p>
        </>
      )}
    />
  );
};
