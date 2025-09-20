import { AgeChart, BirthPlaceChart, AgeExperienceChart } from "@widgets/index";
import s from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={s.homePage}>
      <AgeChart />
      <BirthPlaceChart />
      <AgeExperienceChart />
    </div>
  );
};
