import { useState } from "react";


export const CardAvaliacao = ({nome, turma}) => {
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

            <div>

                <h3 className="font-semibold text-gray-800">
                    {nome}
                </h3>

                <div className="flex items-center gap-2 mt-2">

                    <span
                        className="
                            w-2
                            h-2
                            bg-green-500
                            rounded-full
                        "
                    >
                    </span>

                    <span
                        className="
                            text-sm
                            text-gray-500
                        "
                    >
                        Avaliação enviada
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
                    "
                >
                    {turma}
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

    )
}