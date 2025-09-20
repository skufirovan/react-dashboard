import { CardList } from "@shared/ui/index";
import s from "./CitizenWork.module.scss";

export const CitizenWork = ({ experience }) => {
  return (
    <CardList
      items={experience}
      emptyMessage="Опыт работы не указан"
      renderItem={work => (
        <>
          <h4 className={s.position}>{work.position}</h4>
          <p className={s.company}>{work.company}</p>
          <p className={s.dates}>
            {work.startDate} - {work.endDate || "по настоящее время"}
          </p>
        </>
      )}
    />
  );
};
