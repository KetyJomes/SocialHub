import React, { useState } from "react";
import { CalendarDays, Eye, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";


export const LinhaAvaliacao = ({
    avaliacao
}) => {

    const navigate = useNavigate();

    const statusClasses = {

        "Pendente":
            "bg-blue-100 text-blue-600",

        "Em andamento":
            "bg-yellow-100 text-yellow-700",

        "Em atraso":
            "bg-red-100 text-red-600",

        "Respondida":
            "bg-green-100 text-green-700",

        "Concluída":
            "bg-green-100 text-green-700"

    };

    function abrirAvaliacao() {

        if (avaliacao.nome.includes("360")) {
            navigate("/360");
        } else {
            navigate("/realizar-avaliacao");
        }

    }

    function selecionarAluno(aluno) {

        setMostrarAlunos(false);

        navigate(
            `/realizar-avaliacao?avaliado=${encodeURIComponent(aluno.nome)}`
        );

    }

    return (

        <React.Fragment>

            <tr
                className="
                    border-b
                    border-gray-200
                    hover:bg-gray-50
                    transition
                "
            >

                <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                        <div
                            className="
                                w-14
                                h-14
                                rounded-full
                                bg-blue-100
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <Users
                                size={24}
                                className="text-blue-600"
                            />

                        </div>

                        <div>

                            <h1 className="font-semibold text-gray-800">

                                {avaliacao.nome}

                            </h1>

                            <p className="text-sm text-gray-500">

                                {avaliacao.descricao}

                            </p>

                        </div>

                    </div>

                </td>

                <td className="text-center">

                    {avaliacao.tipo}

                </td>

                <td className="text-center">

                    <div className="flex items-center justify-center gap-2">

                        <CalendarDays size={15} />

                        <div className="flex flex-col">

                            <span>

                                {avaliacao.disponibilizada}

                            </span>

                            <span className="text-xs text-gray-500">

                                {avaliacao.infoDisponibilizada}

                            </span>

                        </div>

                    </div>

                </td>

                <td className="text-center">

                    <div className="flex flex-col">

                        <span>

                            {avaliacao.prazo}

                        </span>

                        <span className="text-xs text-gray-500">

                            {avaliacao.infoPrazo}

                        </span>

                    </div>

                </td>

                <td className="text-center">

                    <span
                        className={`
                            px-4
                            py-2
                            rounded-lg
                            text-sm
                            font-medium
                            ${
                                statusClasses[avaliacao.status] ||
                                "bg-gray-100 text-gray-600"
                            }
                        `}
                    >

                        ● {avaliacao.status}

                    </span>

                </td>

                <td className="text-center">

                    <button

                        onClick={abrirAvaliacao}

                        className="
                            flex
                            items-center
                            gap-2
                            mx-auto
                            border
                            border-[#6C63FF]
                            text-[#6C63FF]
                            rounded-lg
                            px-4
                            py-2
                            hover:bg-[#6C63FF]
                            hover:text-white
                            transition
                        "

                    >

                        <Eye size={16} />

                        {
                            avaliacao.nome.includes("360")
                                ? "Escolher"
                                : avaliacao.acao
                        }

                    </button>

                </td>

            </tr>            
            

        </React.Fragment>

    );

};