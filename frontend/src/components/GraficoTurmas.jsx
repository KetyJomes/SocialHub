import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
} from "recharts";

export const GraficoTurmas = ({ dados }) => {

    function corBarra(nota) {

    if (nota >= 90) {
        return "#93C5FD"; 
    }

    if (nota >= 75) {
        return "#86EFAC"; 
    }

    if (nota >= 60) {
        return "#FDE68A"; 
    }

    return "#FCA5A5"; 
    }

    return (

        <ResponsiveContainer width="100%" height={520}>

            <BarChart
                data={dados}
                layout="vertical"
                margin={{
                    top: 10,
                    right: 20,
                    left: 10,
                    bottom: 10,
                }}
            >

                <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#E5E7EB"
                />

                <XAxis
                    type="number"
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                    tick={{ fontSize: 12 }}
                />

                <YAxis
                    type="category"
                    dataKey="nome"
                    width={80}
                    tick={{ fontSize: 13 }}
                />

                <Tooltip
                    formatter={(value) => [`${value}%`, "Desempenho"]}
                />

                <Bar
                    dataKey="nota"
                    radius={[0, 8, 8, 0]}
                >

                    {

                        dados.map((turma, index) => (

                            <Cell
                                key={index}
                                fill={corBarra(turma.nota)}
                            />

                        ))

                    }

                </Bar>

            </BarChart>

        </ResponsiveContainer>

    );
};