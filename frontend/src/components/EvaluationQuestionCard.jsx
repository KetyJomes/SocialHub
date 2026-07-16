import { Trash2 } from "lucide-react";

export const EvaluationQuestionCard = ({
    numero,
    pergunta,
    onChange,
    onRemove,
    podeRemover
}) => {

    return (

        <div
            className="
                bg-gray-50
                border
                border-gray-200
                rounded-xl
                p-5
            "
        >

            <div
                className="
                    flex
                    justify-between
                    items-center
                    mb-4
                "
            >

                <h3
                    className="
                        font-semibold
                        text-gray-800
                    "
                >
                    Pergunta {numero}
                </h3>
                {
                    podeRemover && (
                        <button
                            onClick={onRemove}
                            className="
                                text-red-400
                                hover:text-red-500
                                transition
                            "
                        >
                            <Trash2 size={18} />

                        </button>
                    )
                }

            </div>

            <textarea
                rows={3}
                value={pergunta.texto}
                onChange={(e) =>
                    onChange(e.target.value)
                }

                placeholder="Ex: Demonstra responsabilidade nas atividades propostas."
                className="
                    w-full
                    bg-white
                    border
                    border-gray-200
                    rounded-lg
                    px-4
                    py-3
                    text-gray-800
                    placeholder:text-gray-400
                    resize-none
                    outline-none
                    focus:ring-2
                    focus:ring-[#B8A4FF]
                    focus:border-[#B8A4FF]
                "

            />

            <div className="mt-4">
                <p
                    className="
                        text-sm
                        text-gray-500
                        mb-3
                    "
                >
                    Escala utilizada
                </p>

                <div
                    className="
                        grid
                        grid-cols-4
                        gap-3
                    "
                >
                   
                    <div
                        className="
                            bg-white
                            border
                            border-gray-200
                            rounded-lg
                            p-3
                            text-center
                            text-sm
                            text-gray-500
                        "
                    >
                        Abaixo do esperado
                    </div>

                    <div
                        className="
                            bg-white
                            border
                            border-gray-200
                            rounded-lg
                            p-3
                            text-center
                            text-sm
                            text-gray-500
                        "
                    >
                        Dentro do esperado
                    </div>

                    <div
                        className="
                            bg-white
                            border
                            border-gray-200
                            rounded-lg
                            p-3
                            text-center
                            text-sm
                            text-gray-500
                        "
                    >
                        Acima do esperado
                    </div>

                    <div
                        className="
                            bg-white
                            border
                            border-gray-200
                            rounded-lg
                            p-3
                            text-center
                            text-sm
                            text-gray-500
                        "
                    >
                        Não se aplica
                    </div>

                </div>

            </div>

        </div>

    );

};