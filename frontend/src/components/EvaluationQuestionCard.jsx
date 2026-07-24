import { Trash2 } from "lucide-react";

export const EvaluationQuestionCard = ({
    numero,
    pergunta,
    onChange,
    onChangeEscala,
    escalasDisponiveis,
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
                    Questão {numero}
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
                                focus:ring-[#0291F7]
                                focus:border-[#0291F7]
                            "

                        />

                        <div className="mt-4">

                <label
                    className="
                        font-medium
                        text-gray-700
                    "
                >
                    Escala utilizada
                </label>

                <select
                    value={pergunta.escala}
                    onChange={(e) =>
                        onChangeEscala(e.target.value)
                    }
                    className="
                        w-full
                        mt-2
                        bg-[#F8F8FB]
                        border
                        border-gray-200
                        rounded-lg
                        px-4
                        py-3
                        text-gray-500
                        outline-none
                        focus:ring-2
                        focus:ring-[#0291F7]
                        focus:border-[#0291F7]
                    "
                >

                    <option value="">
                        Selecione a escala
                    </option>

                    {
                        escalasDisponiveis.map((escala) => (

                            <option
                                key={escala}
                                value={escala}
                            >
                                {escala}
                            </option>

                        ))
                    }

                </select>

            </div>

        </div>

    );

};