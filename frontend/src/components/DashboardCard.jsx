import { ProgressCircle } from "./ProgressCircle";

export const DashboardCard = ({titulo,
    valor,
    descricao,
    cor,
    variacao,
    positiva,
    Icone
}) => {

    return (

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 w-[75%]">

            <div className="flex items-center gap-3">

                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                        backgroundColor: `${cor}15`
                    }}
                >

                    <Icone
                        size={20}
                        color={cor}
                    />

                </div>

                <h3 className="font-semibold">

                    {titulo}

                </h3>

            </div>

            <div className="flex justify-between items-center mt-7">

                <ProgressCircle
                    value={valor}
                    color={cor}
                />

                <div>

                    <h2
                        className="text-5xl font-bold"
                        style={{ color: cor }}
                    >

                        {valor}%

                    </h2>

                    <p
                        className="font-semibold mt-1"
                        style={{ color: cor }}
                    >

                        {descricao}

                    </p>

                    <div className="mt-4 text-sm flex items-center gap-2">

                        <span
                            className={`px-2 py-1 rounded-full ${
                                positiva
                                    ? "bg-green-100 text-green-600"
                                    : "bg-red-100 text-red-500"
                            }`}
                        >
                            {variacao}
                        </span>

                        <span className="text-gray-400">

                            vs. período anterior

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

};