export const filtersConfig = {
  age: {
    type: "range",
    min: 0,
    max: 150,
    step: 1,
    label: "Возраст",
  },
  experience: {
    type: "range",
    min: 0,
    max: 100,
    step: 1,
    label: "Опыт работы (лет)",
  },
  hasRelatives: {
    type: "boolean",
    label: "Есть родственники",
  },
};
