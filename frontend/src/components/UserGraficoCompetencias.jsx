// usado no UserResultados

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Label
} from "recharts";

export const UserGraficoCompetencias = () => {

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

        <div className="w-full h-[320px] flex items-center">

            {/* Gráfico */}

            <div className="w-[60%] h-full">

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

                                    if (!viewBox) return null;

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
                                                y={cy - 10}
                                                fill="#111827"
                                                style={{
                                                    fontSize: "28px",
                                                    fontWeight: 700
                                                }}
                                            >
                                                {media}%
                                            </tspan>

                                            <tspan
                                                x={cx}
                                                y={cy + 12}
                                                fill="#6B7280"
                                                style={{
                                                    fontSize: "13px"
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

                    </PieChart>

                </ResponsiveContainer>

            </div>

            {/* Legenda */}

            <div className="w-[40%] flex flex-col gap-4 pl-4">

                {dados.map((item, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-3"
                    >

                        <div
                            className="w-4 h-4 rounded-full"
                            style={{
                                backgroundColor: cores[index]
                            }}
                        />

                        <div className="flex-1">

                            <p className="text-sm font-medium text-gray-700">
                                {item.nome}
                            </p>

                        </div>

                        <span className="text-sm font-semibold text-gray-500">
                            {item.valor}%
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

};