import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell
} from "recharts";

export const GraficoAluno = ({ dados }) => {

    const ranking = [...dados].sort(
        (a, b) => b.nota - a.nota
    );

    function corBarra(nota) {

        if (nota >= 90) {
            return "#0291F7";
        }

        if (nota >= 75) {
            return "#10B981";
        }

        if (nota >= 60) {
            return "#FACC15";
        }

        return "#EF4444";

    }

    return (

        <div className="w-full h-[320px] overflow-y-auto">

            <ResponsiveContainer
                width="100%"
                height={ranking.length * 45}
            >

                <BarChart
                    data={ranking}
                    layout="vertical"
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5
                    }}
                >

                    <XAxis
                        type="number"
                        domain={[0, 100]}
                    />

                    <YAxis
                        type="category"
                        dataKey="nome"
                        width={110}
                    />

                    <Tooltip
                        formatter={(value) => `${value}%`}
                    />

                    <Bar
                        dataKey="nota"
                        radius={[0, 8, 8, 0]}
                    >

                        {

                            ranking.map((aluno, index) => (

                                <Cell
                                    key={index}
                                    fill={corBarra(aluno.nota)}
                                />

                            ))

                        }

                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}