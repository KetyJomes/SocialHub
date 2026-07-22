import { useNavigate, useParams } from "react-router-dom";

import {
    Calendar,
    Clock3,
    FileText
} from "lucide-react";


export const Student360TestsControlTable = ({
    avaliacoes,
    tipoAba
}) => {


    const navigate = useNavigate();


    const {
        turma,
        aluno
    } = useParams();





    function visualizar(avaliacao) {


        // ==================================
        // ABA FEITAS
        // Visualizar respostas da avaliação 360°
        // ==================================

        if (tipoAba === "feitas") {


            navigate(
                `/management-view-360-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/${avaliacao.id}/${encodeURIComponent(avaliacao.colega)}`
            );


            return;

        }





        // ==================================
        // ABA DISPONÍVEIS
        // Visualizar avaliação 360° pendente
        // ==================================

        navigate(
            `/management-answer-360-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/${avaliacao.id}/${encodeURIComponent(avaliacao.colega)}`
        );


    }









    return (

        <div className="w-full overflow-x-auto">


            <table className="w-full">



                <thead>


                    <tr
                        className="
                            border-b
                            border-gray-200
                            text-gray-500
                        "
                    >



                        <th
                            className="
                                text-left
                                py-4
                                px-6
                            "
                        >

                            Colega para avaliar

                        </th>



                        <th className="text-center">

                            Tipo

                        </th>



                        <th className="text-center">

                            Disponibilizada

                        </th>



                        <th className="text-center">

                            Prazo

                        </th>



                        <th className="text-center">

                            Status

                        </th>



                    </tr>


                </thead>







                <tbody>


                    {
                        avaliacoes.length > 0 ? (


                            avaliacoes.map((avaliacao) => (


                                <tr


                                    key={avaliacao.id}


                                    onClick={() => visualizar(avaliacao)}


                                    className="
                                        border-b
                                        border-gray-200
                                        hover:bg-[#0291F7]/5
                                        hover:shadow-sm
                                        cursor-pointer
                                        transition-all
                                    "


                                >





                                    <td className="px-6 py-5">



                                        <div className="flex items-center gap-3">





                                            <div
                                                className="
                                                    w-10
                                                    h-10
                                                    rounded-full
                                                    bg-[#0291F7]/15
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >


                                                <FileText
                                                    size={18}
                                                    className="text-[#0291F7]"
                                                />


                                            </div>







                                            <div>


                                                <h3 className="font-semibold">

                                                    {avaliacao.colega}

                                                </h3>




                                                <p className="text-sm text-gray-500">

                                                    Avaliação 360°

                                                </p>



                                            </div>





                                        </div>



                                    </td>









                                    <td className="text-center">

                                        360°

                                    </td>









                                    <td className="text-center">



                                        <div className="flex flex-col items-center">



                                            <div className="flex items-center gap-2">


                                                <Calendar size={16} />


                                                {avaliacao.disponibilizada}


                                            </div>





                                            <span className="text-xs text-gray-500">

                                                {avaliacao.infoDisponibilizada}

                                            </span>




                                        </div>



                                    </td>









                                    <td className="text-center">



                                        <div className="flex flex-col items-center">



                                            <div className="flex items-center gap-2">


                                                <Clock3 size={16} />


                                                {avaliacao.prazo}


                                            </div>





                                            <span className="text-xs text-gray-500">

                                                {avaliacao.infoPrazo}

                                            </span>




                                        </div>



                                    </td>









                                    <td className="text-center">



                                        <span
                                            className={`
                                                px-3
                                                py-1
                                                rounded-full
                                                text-sm
                                                font-medium

                                                ${
                                                    avaliacao.status === "Respondida"
                                                        ? "bg-green-100 text-green-700"

                                                        : avaliacao.status === "Em atraso"
                                                            ? "bg-red-100 text-red-700"

                                                            : "bg-yellow-100 text-yellow-700"
                                                }
                                            `}
                                        >


                                            {avaliacao.status}



                                        </span>



                                    </td>







                                </tr>



                            ))



                        ) : (



                            <tr>



                                <td
                                    colSpan="5"
                                    className="
                                        text-center
                                        py-10
                                        text-gray-500
                                    "
                                >

                                    Nenhuma avaliação 360° encontrada.


                                </td>



                            </tr>



                        )
                    }



                </tbody>



            </table>



        </div>


    );

};