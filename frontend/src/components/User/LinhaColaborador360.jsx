import { useNavigate } from "react-router-dom";

import {
    CheckCircle2,
    Clock3,
    Eye,
    ClipboardPen
} from "lucide-react";


export const LinhaColaborador360 = ({ colaborador }) => {

    const navigate = useNavigate();

    const avaliado = colaborador.status === "Avaliado";


    const abrirAvaliacao = () => {

        navigate(
            `/realizar-avaliacao?tipo=360&avaliado=${encodeURIComponent(colaborador.nome)}`
        );

    };


    return (

        <div
            className="
                grid
                grid-cols-12
                items-center
                px-8
                py-5
                border-b
                border-gray-100
                hover:bg-gray-50
                transition
            "
        >


            {/* Colaborador */}

            <div className="col-span-5 flex items-center gap-4">


                <div
                    className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#EAF4FF]
                        flex
                        items-center
                        justify-center
                    "
                >

                    <span
                        className="
                            text-sm
                            font-semibold
                            text-[#0291F7]
                        "
                    >

                        {
                            colaborador.nome
                                .split(" ")
                                .map(nome => nome[0])
                                .slice(0, 2)
                                .join("")
                        }

                    </span>


                </div>



                <div>

                    <p className="font-semibold text-gray-800">

                        {colaborador.nome}

                    </p>


                    <p className="text-sm text-gray-400">

                        {colaborador.email}

                    </p>


                </div>


            </div>





            {/* Cargo */}

            <div className="col-span-2">

                <p className="text-gray-600">

                    {colaborador.cargo}

                </p>

            </div>





            {/* Status */}

            <div className="col-span-2 flex justify-center">


                {

                    avaliado ?


                        <span
                            className="
                                flex
                                items-center
                                gap-2
                                px-3
                                py-2
                                rounded-full
                                bg-green-100
                                text-[#10B981]
                                text-sm
                                font-medium
                            "
                        >

                            <CheckCircle2
                                size={20}
                                strokeWidth={2}
                            />


                            Avaliado


                        </span>


                    :


                        <span
                            className="
                                flex
                                items-center
                                gap-2
                                px-3
                                py-2
                                rounded-full
                                bg-yellow-100
                                text-yellow-700
                                text-sm
                                font-medium
                            "
                        >

                            <Clock3
                                size={20}
                                strokeWidth={2}
                            />


                            Pendente


                        </span>


                }


            </div>





            {/* Ação */}

            <div className="col-span-3 flex justify-center">


                {

                    avaliado ?


                        <button

                            onClick={() => navigate('/realizar-avaliacao')}

                            className="
                                flex
                                items-center
                                gap-2
                                px-5
                                py-2.5
                                rounded-xl
                                border
                                border-gray-200
                                text-gray-600
                                hover:bg-gray-100
                                transition
                            "

                        >


                            <Eye
                                size={20}
                                strokeWidth={2}
                            />


                            Visualizar


                        </button>



                    :


                        <button

                            onClick={abrirAvaliacao}

                            className="
                                flex
                                items-center
                                gap-2
                                px-5
                                py-2.5
                                rounded-xl
                                bg-[#0291F7]
                                text-white
                                hover:opacity-90
                                transition
                            "

                        >


                            <ClipboardPen
                                size={20}
                                strokeWidth={2}
                            />


                            Avaliar


                        </button>


                }


            </div>



        </div>

    );

};