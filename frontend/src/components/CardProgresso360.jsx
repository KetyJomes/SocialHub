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

            <div className="flex items-center gap-4">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">

                        Progresso da Avaliação

                    </h2>


                    <p className="text-gray-500 mt-1">

                        Continue respondendo para concluir sua avaliação.

                    </p>

                </div>


            </div>





            {/* CARDS */}

            <div className="flex gap-5 mt-8">





                {/* PROGRESSO */}

                <div className="bg-[#F1ECF8] rounded-2xl w-[180px] h-full p-6 flex items-center justify-center">


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
                                className="text-[#D9CCEA]"
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
                                className="text-[#5B3A9D] transition-all duration-700"
                            />


                        </svg>





                        <div className="text-center">


                            <p className="text-2xl font-bold text-[#5B3A9D]">

                                {porcentagem}%

                            </p>


                            <p className="text-xs text-gray-500">

                                Concluído

                            </p>


                        </div>



                    </div>


                </div>









                {/* RESPONDIDAS */}

                <div className="bg-[#E8F5EF] rounded-2xl p-6 flex-1 flex items-center gap-6">


                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center">


                        <CircleCheckBig

                            size={50}

                            className="text-[#008542]"

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

                <div className="bg-[#FBE8E8] rounded-2xl p-6 flex-1 flex items-center gap-6">


                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center">


                        <Clock3

                            size={50}

                            className="text-[#B51E35]"

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

                <div className="bg-[#E8EFF8] rounded-2xl p-6 flex-1 flex items-center gap-6">


                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center">


                        <Users

                            size={50}

                            className="text-[#17458F]"

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