import { GraduationCap } from "lucide-react";

export const CardTurma = ({
    turma,
    alunos,
    nota,
    selecionado,
    onClick
}) => {

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
            onClick={onClick}
            className={`
                min-w-[280px]
                h-[150px]
                rounded-xl
                bg-white
                shadow-sm
                p-5
                cursor-pointer
                transition-all
                duration-200
                hover:shadow-md
                hover:-translate-y-1
                border-2

                ${
                    selecionado
                        ? "border-[#B8A4FF]"
                        : "border-gray-100"
                }
            `}
        >

            <div className="flex items-start gap-4">

                <div
                    className={`
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                        ${cores.fundo}
                    `}
                >

                    <GraduationCap
                        size={22}
                        className={cores.icone}
                        strokeWidth={2}
                    />

                </div>

                <div>

                    <h2 className="font-bold text-lg text-gray-800">
                        {turma}
                    </h2>

                    <p className="text-gray-500 text-sm">
                        {alunos} alunos
                    </p>

                </div>

            </div>

            <div className="flex justify-between items-center mt-5">

                <a
                    href="#"
                    onClick={(e) => e.stopPropagation()}
                    className="
                        text-[#B8A4FF]
                        font-semibold
                        text-sm
                        hover:underline
                        transition
                    "
                >
                    Ver resultados &gt;
                </a>

                <span className="font-bold text-gray-700">
                    {nota}%
                </span>

            </div>

        </div>

    );
};