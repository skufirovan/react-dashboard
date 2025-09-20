import s from "./CitizenInfo.module.scss";

export const CitizenInfo = ({ citizen }) => {
  const rows = [
    {
      label: "ФИО",
      value: `${citizen.lastName} ${citizen.firstName} ${citizen.middleName}`,
    },
    { label: "Дата рождения", value: citizen.birthDate },
    { label: "Место рождения", value: citizen.birthPlace },
    { label: "Гражданство", value: citizen.citizenship },
    { label: "Адрес", value: citizen.address },
    { label: "Паспорт", value: citizen.passport },
    { label: "Телефон", value: citizen.phone },
    { label: "Email", value: citizen.email },
  ];

  return (
    <dl className={s.info}>
      {rows.map((row, i) => (
        <div key={i} className={s.row}>
          <dt className={s.label}>{row.label}</dt>
          <dd className={s.value}>{row.value || "Не указан"}</dd>
        </div>
      ))}
    </dl>
  );
};
