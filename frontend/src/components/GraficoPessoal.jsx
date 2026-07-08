import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const GraficoPessoal = () => {


    const data = {

        labels: [
            "2025 T2",
            "2025 T3",
            "2025 T4",
            "2025 T1",
            "2026 T2"
        ],

        datasets: [
            {
                label: "Avaliação",

                data: [
                    70,
                    76,
                    82,
                    85,
                    90
                ],

                borderWidth: 3,

                tension: 0.4, // deixa a linha mais suave

                pointRadius: 5,

                pointHoverRadius: 7
            }
        ]
    };


    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                enabled: true
            }

        },


        scales: {

            y: {

                min: 60,
                max: 100,

                ticks: {
                    callback: (value) => `${value}%`
                },

                grid: {
                    display: false
                }

            },


            x: {

                grid: {
                    display: false
                }

            }

        }

    };


    return (
        <div className="
            w-[25vw]
            h-[25vh]
            rounded-2xl
            bg-white
            shadow-2xl
            ring-1
            ring-gray-200
            p-4
        ">
            <Line
                data={data}
                options={options}
            />
        </div>
    );

};