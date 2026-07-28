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

        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-8">


            {/* CABEÇALHO */}

            <div>

                <h2 className="text-2xl font-bold text-gray-800">

                    Progresso da Avaliação

                </h2>


                <p className="text-gray-500 mt-1">

                    Continue respondendo para concluir sua avaliação.

                </p>


            </div>





            {/* CARDS */}

            <div className="flex gap-5 mt-8">





                {/* PROGRESSO */}

                <div className="bg-[#EDE9FE] rounded-2xl w-[180px] p-6 flex items-center justify-center">


                    <div className="relative w-28 h-28 flex items-center justify-center">


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
                                className="text-[#DDD6FE]"
                            />



                            <circle
                                cx="50"
                                cy="50"
                                r="42"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray="264"
                                strokeDashoffset={
                                    264 - (264 * porcentagem) / 100
                                }
                                strokeLinecap="round"
                                className="text-[#7C3AED] transition-all duration-700"
                            />


                        </svg>





                        <div className="text-center">


                            <p className="text-2xl font-bold text-[#7C3AED]">

                                {porcentagem}%

                            </p>


                            <p className="text-xs text-gray-500">

                                Concluído

                            </p>


                        </div>



                    </div>


                </div>








                {/* RESPONDIDAS */}

                <div className="bg-[#ECFDF5] rounded-2xl p-6 flex-1 flex items-center gap-6">


                    <div
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-[#D1FAE5]
                            flex
                            items-center
                            justify-center
                        "
                    >


                        <CircleCheckBig
                            size={20}
                            className="text-[#10B981]"
                            strokeWidth={2}
                        />


                    </div>




                    <div>


                        <p className="text-base text-gray-500">

                            Respondidas

                        </p>



                        <h2 className="text-3xl font-bold text-gray-800">

                            {respondidos}

                        </h2>


                    </div>



                </div>








                {/* PENDENTES */}

                <div className="bg-yellow-50 rounded-2xl p-6 flex-1 flex items-center gap-6">


                    <div
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-yellow-100
                            flex
                            items-center
                            justify-center
                        "
                    >


                        <Clock3
                            size={20}
                            className="text-yellow-700"
                            strokeWidth={2}
                        />


                    </div>





                    <div>


                        <p className="text-base text-gray-500">

                            Pendentes

                        </p>




                        <h2 className="text-3xl font-bold text-gray-800">

                            {pendentes}

                        </h2>



                    </div>



                </div>








                {/* TOTAL */}

                <div className="bg-[#EAF4FF] rounded-2xl p-6 flex-1 flex items-center gap-6">


                    <div
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-[#DCEEFF]
                            flex
                            items-center
                            justify-center
                        "
                    >


                        <Users
                            size={20}
                            className="text-[#0291F7]"
                            strokeWidth={2}
                        />


                    </div>





                    <div>


                        <p className="text-base text-gray-500">

                            Total

                        </p>





                        <h2 className="text-3xl font-bold text-gray-800">

                            {total}

                        </h2>



                    </div>



                </div>





            </div>


        </div>

    );

};