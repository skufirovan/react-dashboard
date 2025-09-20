import { Bar } from "react-chartjs-2";
import { groupByBirthPlace } from "@shared/stats/index";
import { citizens } from "@shared/mocks/index";
import s from "./BirthPlaceChart.module.scss";

export const BirthPlaceChart = () => {
  const birthPlaceGroups = groupByBirthPlace(citizens);

  const data = {
    labels: Object.keys(birthPlaceGroups),
    datasets: [
      {
        data: Object.values(birthPlaceGroups),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => `Людей: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className={s.birthPlaceChart}>
      <h2>Распределение по месту рождения</h2>
      <Bar data={data} options={options} />
    </div>
  );
};
