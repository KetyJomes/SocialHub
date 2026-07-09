import { useState } from "react";
import { GraduationCap } from "lucide-react";

export const CardTurmaRanking = ({ turma, nota }) => {

    const [clicado, setClicado] = useState(false);

    function corChapeu(nota) {

        if (nota >= 90) {
            return {
                fundo: "bg-[#EEF4FF]",
                icone: "text-[#93C5FD]"
            };
        }

        if (nota >= 75) {
            return {
                fundo: "bg-[#F0FDF4]",
                icone: "text-[#86EFAC]"
            };
        }

        if (nota >= 60) {
            return {
                fundo: "bg-[#FFFBEB]",
                icone: "text-[#FDE68A]"
            };
        }

        return {
            fundo: "bg-[#FEF2F2]",
            icone: "text-[#FCA5A5]"
        };
    }

    const cores = corChapeu(nota);

    return (
        <div
            className="
                flex
                items-center
                justify-between
                p-4
                bg-white
                rounded-xl
                border
                border-gray-200
                transition
                hover:shadow-sm
            "
        >

            <div className="flex items-center gap-3">

                <div
                    className={`
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        ${cores.fundo}
                    `}
                >

                    <GraduationCap
                        size={20}
                        className={cores.icone}
                        strokeWidth={2}
                    />

                </div>

                <div>

                    <h3 className="font-semibold text-gray-800">
                        {turma}
                    </h3>

                    <span className="text-sm text-gray-500">
                        Desempenho geral da turma
                    </span>

                </div>

            </div>

            <div className="flex items-center gap-5">

                <span
                    className="
                        text-sm
                        bg-gray-100
                        px-3
                        py-1
                        rounded-lg
                        text-gray-700
                        font-semibold
                    "
                >
                    {nota}%
                </span>

                <button
                    onClick={() => setClicado(!clicado)}
                    className={`
                        text-2xl
                        font-bold
                        text-[#B8A4FF]
                        transition
                        duration-200

                        ${
                            clicado
                            ? "scale-125"
                            : ""
                        }
                    `}
                >
                    ›
                </button>

            </div>

        </div>
    );
};