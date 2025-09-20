import { citizensService } from "@shared/api/index";
import { CardList } from "@shared/ui/index";
import s from "./CitizenRelatives.module.scss";

export const CitizenRelatives = ({ citizenId }) => {
  const relatives = citizensService.getRelatives(citizenId);

  return (
    <>
      <CardList
        items={relatives}
        emptyMessage="Родственники не указаны"
        renderItem={relative => (
          <>
            <h4 className={s.relation}>{relative.relation}</h4>
            <p className={s.name}>
              {relative.lastName} {relative.firstName} {relative.middleName}
            </p>
            <p className={s.phone}>{relative.phone || "Телефон не указан"}</p>
          </>
        )}
      />
    </>
  );
};
