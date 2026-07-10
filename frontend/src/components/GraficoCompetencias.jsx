import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    Label
} from "recharts";

export const GraficoCompetencias = () => {

    const dados = [

        {
            nome: "Comunicação",
            valor: 90
        },

        {
            nome: "Trabalho em Equipe",
            valor: 70
        },

        {
            nome: "Liderança",
            valor: 80
        },

        {
            nome: "Proatividade",
            valor: 50
        },

        {
            nome: "Resolução de Problemas",
            valor: 88
        }

    ];

    const cores = [

        "#B8A4FF",
        "#93C5FD",
        "#86EFAC",
        "#FDE68A",
        "#FCA5A5"

    ];

    const media = Math.round(

        dados.reduce((total, item) => total + item.valor, 0) /
        dados.length

    );

    return (

        <div className="w-full h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                    <Pie
                        data={dados}
                        dataKey="valor"
                        nameKey="nome"
                        cx="50%"
                        cy="50%"
                        outerRadius={95}
                        innerRadius={62}
                        paddingAngle={3}
                    >

                        {dados.map((item, index) => (

                            <Cell
                                key={index}
                                fill={cores[index]}
                            />

                        ))}

                        <Label
                            content={({ viewBox }) => {

                                const { cx, cy } = viewBox;

                                return (

                                    <text
                                        x={cx}
                                        y={cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >

                                        <tspan
                                            x={cx}
                                            dy="-6"
                                            fill="#1F2937"
                                            style={{
                                                fontSize: "28px",
                                                fontWeight: 700
                                            }}
                                        >
                                            {media}%
                                        </tspan>

                                        <tspan
                                            x={cx}
                                            dy="18"
                                            fill="#6B7280"
                                            style={{
                                                fontSize: "12px"
                                            }}
                                        >
                                            Média
                                        </tspan>

                                    </text>

                                );

                            }}
                        />

                    </Pie>

                    <Tooltip />

                    <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="square"
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

};