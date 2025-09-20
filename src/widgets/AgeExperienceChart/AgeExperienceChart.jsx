import { Bubble } from "react-chartjs-2";
import { getAgeExperienceData } from "@shared/stats/index";
import { citizens } from "@shared/mocks/index";
import s from "./AgeExperienceChart.module.scss";

export const AgeExperienceChart = () => {
  const ageExperineceGroup = getAgeExperienceData(citizens);

  const data = {
    datasets: [
      {
        data: ageExperineceGroup,
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context =>
            `Возраст: ${context.raw.x}, Опыт: ${context.raw.y.toFixed(
              1
            )} лет, Людей: ${context.raw.count}`,
        },
      },
    },
    scales: {
      x: { title: { display: true, text: "Возраст" }, beginAtZero: true },
      y: {
        title: { display: true, text: "Общий опыт (лет)" },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={s.ageExperienceChart}>
      <h2>Соотношение возраста и опыта</h2>
      <Bubble data={data} options={options} />
    </div>
  );
};
