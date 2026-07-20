// Visualização de avaliações do aluno

import { useNavigate, useParams } from "react-router-dom";

import {
    Calendar,
    Clock3,
    Eye,
    FileText
} from "lucide-react";


export const StudentTestsControlTable = ({
    avaliacoes,
    tipoAba
}) => {

    const navigate = useNavigate();

    const { turma, aluno } = useParams();


    function visualizar(avaliacao) {

        if (avaliacao.tipo === "360°") {

            navigate(
                `/management-360-evaluation-people/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/${avaliacao.id}/${tipoAba}`
            );

            return;

        }


        if (tipoAba === "disponiveis") {

            navigate(
                `/management-answer-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/${avaliacao.id}`
            );

        } else {

            navigate(
                `/management-view-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/${avaliacao.id}`
            );

        }

    }


    return (

        <div className="w-full overflow-x-auto">

            <table className="w-full">

                <thead>

                    <tr className="border-b text-gray-500">

                        <th className="text-left py-4 px-6">
                            Avaliação
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

                        {
                            avaliacoes[0]?.tipo !== "360°" && (

                                <th className="text-center">
                                    Status
                                </th>

                            )
                        }

                        <th className="text-center">
                            Ação
                        </th>

                    </tr>

                </thead>


                <tbody>

                    {
                        avaliacoes.map((avaliacao) => (

                            <tr
                                key={avaliacao.id}
                                className="border-b hover:bg-gray-50 transition"
                            >

                                <td className="px-6 py-5">

                                    <div className="flex items-center gap-3">

                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${avaliacao.bgIcon || "bg-[#F1EDFF]"}`}>

                                            <img
                                                src={avaliacao.icon}
                                                alt=""
                                                className="w-5 h-5"
                                            />

                                        </div>


                                        <div>

                                            <h3 className="font-semibold">
                                                {avaliacao.nome}
                                            </h3>


                                            <p className="text-sm text-gray-500">
                                                {avaliacao.descricao}
                                            </p>


                                        </div>


                                    </div>

                                </td>


                                <td className="text-center">

                                    <div className="flex items-center justify-center gap-2">

                                        <FileText size={16} />

                                        {avaliacao.tipo}

                                    </div>

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


                                {
                                    avaliacao.tipo !== "360°" && (

                                        <td className="text-center">


                                            {
                                                tipoAba === "disponiveis"

                                                    ? (

                                                        avaliacao.status === "Em atraso"

                                                            ?

                                                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                                                                Em atraso
                                                            </span>

                                                            :

                                                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700">
                                                                Pendente
                                                            </span>

                                                    )


                                                    :

                                                    (

                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                            avaliacao.status === "Respondida"
                                                                ? "bg-green-100 text-green-700"
                                                                : avaliacao.status === "Em atraso"
                                                                    ? "bg-red-100 text-red-700"
                                                                    : "bg-yellow-100 text-yellow-700"
                                                        }`}>

                                                            {avaliacao.status}

                                                        </span>

                                                    )
                                            }


                                        </td>

                                    )
                                }


                                <td className="text-center">

                                    <button
                                        onClick={() => visualizar(avaliacao)}
                                        className="flex items-center gap-2 mx-auto px-4 py-2 rounded-lg bg-[#B8A4FF] text-white hover:opacity-90 transition"
                                    >

                                        <Eye size={18} />

                                        Visualizar

                                    </button>

                                </td>


                            </tr>

                        ))
                    }


                </tbody>


            </table>


        </div>

    );

};