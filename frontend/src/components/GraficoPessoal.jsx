// usado na main

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

export const GraficoPessoal = () => {

    const data = {
        labels: [
            "2025 T2",
            "2025 T3",
            "2025 T4",
            "2026 T1",
            "2026 T2"
        ],

        datasets: [
            {
                data: [70, 76, 82, 85, 90],

                borderColor: "#2563EB",
                backgroundColor: "#2563EB",

                borderWidth: 3,

                tension: 0.25,

                fill: false,

                pointRadius: 6,
                pointHoverRadius: 8,

                pointBackgroundColor: "#2563EB",
                pointBorderColor: "#2563EB",
                pointBorderWidth: 0,

                pointHitRadius: 15,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false,
            },

            tooltip: {
                enabled: true,
            },

            datalabels: {
                formatter: (value) => `${value}%`,
                align: "top",
                anchor: "end",
                offset: 8,

                color: "#555",

                font: {
                    size: 14,
                    weight: "bold",
                },
            },
        },

        scales: {
            y: {
                display: false,

                min: 60,
                max: 100,

                grid: {
                    display: false,
                },

                border: {
                    display: false,
                },
            },

            x: {
                grid: {
                    display: false,
                },

                border: {
                    color: "#E5E7EB",
                    width: 1,
                },

                ticks: {
                    color: "#6B7280",

                    font: {
                        size: 12,
                        weight: "500",
                    },
                },
            },
        },

        animation: {
            duration: 1200,
            easing: "easeOutQuart",
        },
    };

    return (
        <div
            className="
                w-[30vw]
                h-76
                rounded-2xl
                bg-white
                shadow-xl
                ring-1
                ring-gray-200
                p-4
            "
        >
            <Line
                data={data}
                options={options}
            />
        </div>
    );
};