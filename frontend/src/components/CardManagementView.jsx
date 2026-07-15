import { useNavigate, useParams } from "react-router-dom";
import {
    Calendar,
    Clock3,
    Eye,
    FileText
} from "lucide-react";

export const CardManagementView = ({
    avaliacao,
    tipoAba
}) => {

    const navigate = useNavigate();

    const { turma, aluno } = useParams();

    function visualizar() {

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

        <tr className="border-b hover:bg-gray-50 transition">

            <td className="px-6 py-5">

                <div className="flex items-center gap-3">

                    <div
                        className={`
                            w-10
                            h-10
                            rounded-full
                            flex
                            items-center
                            justify-center
                            ${avaliacao.bgIcon || "bg-[#F1EDFF]"}
                        `}
                    >

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

            <td className="text-center">

                <button

                    onClick={visualizar}

                    className="
                        flex
                        items-center
                        gap-2
                        mx-auto
                        px-4
                        py-2
                        rounded-lg
                        bg-[#B8A4FF]
                        text-white
                        hover:opacity-90
                        transition
                    "

                >

                    <Eye size={18} />

                    Visualizar

                </button>

            </td>

        </tr>

    );

};