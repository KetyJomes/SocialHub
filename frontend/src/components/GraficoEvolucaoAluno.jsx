import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

export const GraficoEvolucaoAluno = () => {

    const dados = [

        {
            trimestre: "1º Tri",
            media: 72
        },

        {
            trimestre: "2º Tri",
            media: 81
        },

        {
            trimestre: "3º Tri",
            media: 87
        },

        {
            trimestre: "4º Tri",
            media: 92
        }

    ];

    return (

        <div className="w-full h-[300px]">

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

                <LineChart
                    data={dados}
                    margin={{
                        top: 10,
                        right: 20,
                        left: -10,
                        bottom: 10
                    }}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="trimestre"
                    />

                    <YAxis
                        domain={[0, 100]}
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="media"
                        stroke="#B8A4FF"
                        strokeWidth={3}
                        dot={{
                            r: 6,
                            fill: "#B8A4FF"
                        }}
                        activeDot={{
                            r: 8
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

};