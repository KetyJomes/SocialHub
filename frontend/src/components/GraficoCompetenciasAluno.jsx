import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
    Label
} from "recharts";

export const GraficoCompetenciasAluno = () => {

    const competencias = [

        {
            nome: "Comunicação",
            gestor: 85,
            auto: 92
        },

        {
            nome: "Trabalho em Equipe",
            gestor: 80,
            auto: 88
        },

        {
            nome: "Liderança",
            gestor: 76,
            auto: 84
        },

        {
            nome: "Proatividade",
            gestor: 82,
            auto: 79
        },

        {
            nome: "Resolução de Problemas",
            gestor: 90,
            auto: 95
        }

    ];

    const dados = competencias.map((item) => ({

        nome: item.nome,

        valor: Math.round(

            (item.gestor + item.auto) / 2

        )

    }));


    const media = Math.round(

        dados.reduce(

            (total, item) => total + item.valor,

            0

        ) / dados.length

    );


    const cores = [

        "#B8A4FF",
        "#93C5FD",
        "#86EFAC",
        "#FDE68A",
        "#FCA5A5"

    ];


    return (

        <div className="w-full h-[320px]">

            <ResponsiveContainer
                width="100%"
                height="100%"
            >

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

                        {

                            dados.map((item, index) => (

                                <Cell
                                    key={index}
                                    fill={cores[index]}
                                />

                            ))

                        }

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
                                            y={cy - 8}
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
                                            y={cy + 16}
                                            fill="#6B7280"
                                            style={{
                                                fontSize: "12px"
                                            }}
                                        >

                                            Média Geral

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