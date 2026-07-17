import {
    Users,
    CircleCheckBig,
    Clock3
} from "lucide-react";

export const CardProgresso360 = ({ colaboradores }) => {

    const total = colaboradores.length;

    const respondidos = colaboradores.filter(
        colaborador => colaborador.status === "Avaliado"
    ).length;

    const pendentes = total - respondidos;

    const porcentagem = total > 0
        ? Math.round((respondidos / total) * 100)
        : 0;


    return (

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">


            {/* CABEÇALHO */}

            <div className="flex items-center gap-4">


                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">

                    <CircleCheckBig
                        size={28}
                        className="text-violet-600"
                    />

                </div>


                <div>

                    <h2 className="text-2xl font-bold text-gray-800">

                        Progresso da Avaliação

                    </h2>


                    <p className="text-gray-500 mt-1">

                        Continue respondendo para concluir sua avaliação.

                    </p>

                </div>


            </div>


            {/* CARDS DE INFORMAÇÃO */}

            <div className="grid grid-cols-4 gap-5 mt-8">


                {/* PROGRESSO */}

                <div className="bg-violet-50 rounded-2xl p-6 flex flex-col items-center justify-center">


                    <div className="relative w-28 h-28 flex items-center justify-center">


                        {/* CÍRCULO EXTERNO */}

                        <svg

                            className="absolute w-full h-full -rotate-90"

                            viewBox="0 0 100 100"

                        >

                            <circle

                                cx="50"

                                cy="50"

                                r="42"

                                stroke="currentColor"

                                strokeWidth="8"

                                fill="transparent"

                                className="text-violet-200"

                            />


                            <circle

                                cx="50"

                                cy="50"

                                r="42"

                                stroke="currentColor"

                                strokeWidth="8"

                                fill="transparent"

                                strokeDasharray="264"

                                strokeDashoffset={264 - (264 * porcentagem) / 100}

                                strokeLinecap="round"

                                className="text-violet-600 transition-all duration-700"

                            />

                        </svg>


                        <div className="text-center">


                            <p className="text-2xl font-bold text-violet-600">

                                {porcentagem}%

                            </p>


                            <p className="text-xs text-gray-500">

                                Concluído

                            </p>


                        </div>


                    </div>


                </div>


                {/* RESPONDIDAS */}

                <div className="bg-green-50 rounded-2xl p-6">


                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center mb-5">


                        <CircleCheckBig

                            size={22}

                            className="text-green-600"

                        />


                    </div>


                    <p className="text-sm text-gray-500">

                        Respondidas

                    </p>


                    <h2 className="text-3xl font-bold text-gray-800 mt-1">

                        {respondidos}

                    </h2>


                </div>


                {/* PENDENTES */}

                <div className="bg-amber-50 rounded-2xl p-6">


                    <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center mb-5">


                        <Clock3

                            size={22}

                            className="text-amber-600"

                        />


                    </div>


                    <p className="text-sm text-gray-500">

                        Pendentes

                    </p>


                    <h2 className="text-3xl font-bold text-gray-800 mt-1">

                        {pendentes}

                    </h2>


                </div>


                {/* TOTAL */}

                <div className="bg-blue-50 rounded-2xl p-6">


                    <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-5">


                        <Users

                            size={22}

                            className="text-blue-600"

                        />


                    </div>


                    <p className="text-sm text-gray-500">

                        Total

                    </p>


                    <h2 className="text-3xl font-bold text-gray-800 mt-1">

                        {total}

                    </h2>


                </div>


            </div>


        </div>

    );

};