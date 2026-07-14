import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { ArrowUpRight, ArrowDownRight, Info } from "lucide-react";

ChartJS.register(
  ArcElement,
  Tooltip
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "72%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const cards = [
  {
    title: "Média de Compatibilidade",
    percentage: 72,
    variation: "+8 p.p.",
    positive: true,
    colors: ["#2563EB", "#8B5CF6", "#F59E0B", "#FACC15"],
    data: [55, 25, 15, 5],
  },
  {
    title: "Média Autoavaliação",
    percentage: 72,
    variation: "+6 p.p.",
    positive: true,
    colors: ["#2563EB", "#8B5CF6", "#F59E0B"],
    data: [72, 20, 8],
  },
  {
    title: "Média Avaliação Gestão",
    percentage: 68,
    variation: "-4 p.p.",
    positive: false,
    colors: ["#2563EB", "#8B5CF6", "#F59E0B"],
    data: [68, 22, 10],
  },
];

export const SummaryCards = () => {
  return (
    <div className="flex flex-col gap-5">

      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6"
        >
          <div className="flex justify-between items-center mb-6">

            <h3 className="font-semibold text-gray-800">
              {card.title}
            </h3>

            <Info
              size={16}
              className="text-gray-400"
            />

          </div>

          <div className="flex items-center gap-5">

            <div className="w-24 h-24">

              <Doughnut
                data={{
                  labels: [],
                  datasets: [
                    {
                      data: card.data,
                      backgroundColor: card.colors,
                      borderWidth: 0,
                    },
                  ],
                }}
                options={chartOptions}
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold text-[#2563EB]">
                {card.percentage}%
              </h2>

              <div
                className={`mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                  card.positive
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-500"
                }`}
              >
                {card.positive ? (
                  <ArrowUpRight size={15} />
                ) : (
                  <ArrowDownRight size={15} />
                )}

                {card.variation}
              </div>

              <p className="text-gray-400 text-xs mt-2">
                vs. período anterior
              </p>

            </div>

          </div>
        </div>
      ))}

    </div>
  );
};