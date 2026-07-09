import { useState } from "react";
import { GraduationCap } from "lucide-react";

export const CardTurmaRanking = ({ turma, nota }) => {
    const [clicado, setClicado] = useState(false);

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
                    className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#F1EDFF]
                        flex
                        items-center
                        justify-center
                    "
                >
                    <GraduationCap
                        size={20}
                        className="text-[#B8A4FF]"
                    />
                </div>

                <div>

                    <h3 className="font-semibold text-gray-800">
                        {turma}
                    </h3>

                    <span
                        className="
                            text-sm
                            text-gray-500
                        "
                    >
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
                        text-gray-600
                        font-medium
                    "
                >
                    {nota}%
                </span>

                <button

                    onClick={() => setClicado(!clicado)}

                    className={`
                        text-2xl
                        font-bold
                        transition
                        duration-200

                        ${
                            clicado
                                ? "text-[#B8A4FF] scale-125"
                                : "text-[#B8A4FF]"
                        }

                    `}
                >
                    ›
                </button>

            </div>

        </div>
    );
};