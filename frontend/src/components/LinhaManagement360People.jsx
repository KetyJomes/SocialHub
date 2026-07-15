import {
    Eye,
    UserRound,
    CheckCircle2,
    Clock3
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export const LinhaManagement360People = ({
    colega,
    turma,
    aluno,
    tipoAba,
    avaliacaoId
}) => {

    const navigate = useNavigate();

    function visualizar() {

        if (tipoAba === "disponiveis") {

            navigate(
                `/management-answer-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/${avaliacaoId}`
            );

        } else {

            navigate(
                `/management-view-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/${avaliacaoId}`
            );

        }

    }

    return (

        <div className="grid grid-cols-12 items-center px-8 py-5 border-b border-gray-100 hover:bg-violet-50 transition">

            {/* Nome */}

            <div className="col-span-7 flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">

                    <UserRound
                        size={22}
                        className="text-violet-600"
                    />

                </div>

                <div>

                    <h3 className="font-semibold text-gray-800">

                        {colega.nome}

                    </h3>

                </div>

            </div>

            {/* Status */}

            <div className="col-span-2 flex justify-center">

                {
                    colega.status === "Respondida"

                        ?

                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">

                            <CheckCircle2 size={16} />

                            Respondida

                        </span>

                        :

                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">

                            <Clock3 size={16} />

                            {colega.status}

                        </span>

                }

            </div>

            {/* Botão */}

            <div className="col-span-3 flex justify-center">

                <button
                    onClick={visualizar}
                    className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2
                        rounded-xl
                        bg-[#B8A4FF]
                        text-white
                        hover:opacity-90
                        transition
                    "
                >

                    <Eye size={18} />

                    Visualizar

                </button>

            </div>

        </div>

    );

};