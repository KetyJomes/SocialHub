import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

export const GraficoTurmas = ({ dados }) => {

    return (

        <ResponsiveContainer width="100%" height={520}>

            <BarChart
                data={dados}
                layout="vertical"
                margin={{
                    top: 10,
                    right: 20,
                    left: 10,
                    bottom: 10
                }}
            >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                    type="number"
                    domain={[0, 100]}
                    tick={{ fontSize: 12 }}
                />

                <YAxis
                    type="category"
                    dataKey="nome"
                    width={70}
                    tick={{ fontSize: 13 }}
                />

                <Tooltip />

                <Bar
                    dataKey="nota"
                    fill="#B8A4FF"
                    radius={[0, 8, 8, 0]}
                />

            </BarChart>

        </ResponsiveContainer>

    );
};