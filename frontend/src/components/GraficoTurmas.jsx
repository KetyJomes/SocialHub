import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell
} from "recharts";


export const GraficoTurmas = ({ dados }) => {

    function corDesempenho(nota) {

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


    const dadosOrdenados = [...dados].sort(
        (a, b) => b.nota - a.nota
    );


    return (

        <div
            className="
                h-[520px]
                overflow-y-auto
                pr-2
            "
        >

            <div
                style={{
                    height: `${dadosOrdenados.length * 55}px`
                }}
            >

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        data={dadosOrdenados}
                        layout="vertical"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 10
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            type="number"
                            domain={[0,100]}
                            tickFormatter={(value)=>`${value}%`}
                        />

                        <YAxis
                            type="category"
                            dataKey="nome"
                            width={70}
                        />

                        <Tooltip
                            formatter={(value)=>[
                                `${value}%`,
                                "Desempenho"
                            ]}
                        />

                        <Bar
                            dataKey="nota"
                            radius={[
                                0,
                                8,
                                8,
                                0
                            ]}
                        >

                            {
                                dadosOrdenados.map((item,index)=>(

                                    <Cell
                                        key={index}
                                        fill={corDesempenho(item.nota)}
                                    />

                                ))
                            }

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};