import { Doughnut } from "react-chartjs-2";
import { groupByAge } from "@shared/stats/index";
import { citizens } from "@shared/mocks/index";
import s from "./AgeChart.module.scss";

export const AgeChart = () => {
  const ageGroups = groupByAge(citizens);

  const data = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        data: Object.values(ageGroups),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#9333ea",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: context => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.raw / total) * 100).toFixed(1);
            return `${context.raw} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className={s.ageChart}>
      <h2>Возрастное распределение</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};
