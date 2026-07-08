export const CardTurma = ({ turma, alunos, nota, selecionado, onClick }) => {

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
                    transition
                    duration-200
                    hover:shadow-md

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
                    className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#F1EDFF]
                        flex
                        items-center
                        justify-center
                        text-2xl
                    "
                >
                    🎓
                </div>

                <div>
                    <h2 className="font-bold text-lg">
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
                    onClick={(e)=>e.stopPropagation()}
                    className="
                        text-[#B8A4FF]
                        font-semibold
                        text-sm
                    "
                >
                    Ver resultados &gt;
                </a>


                <span className="font-bold">
                    {nota}%
                </span>
            </div>
        </div>

    )
}