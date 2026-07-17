import { useState } from "react";

export const EvaluationForm = () => {

    const [titulo, setTitulo] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [prazo, setPrazo] = useState("");
    const [recorrencia, setRecorrencia] = useState("uma");

    return (

        <div className="mt-10 space-y-10">

            {/* INFORMAÇÕES DA AVALIAÇÃO */}

            <div className="bg-white border border-gray-200 rounded-xl p-8">

                <h2 className="text-xl font-bold mb-6">
                    Informações da avaliação
                </h2>

                <div className="grid grid-cols-2 gap-6">

                    <div>

                        <label className="font-medium">
                            Título
                        </label>

                        <input
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder="Ex.: Avaliação 2º Trimestre"
                            className="
                                w-full
                                mt-2
                                rounded-lg
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-3
                                text-gray-800
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B8A4FF]
                                focus:border-[#B8A4FF]
                            "
                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Tipo
                        </label>

                        <select
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            className="
                                w-full
                                mt-2
                                rounded-lg
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-3
                                text-gray-800
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B8A4FF]
                                focus:border-[#B8A4FF]
                            "
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option>
                                Gestor → Aluno
                            </option>

                            <option>
                                Aluno → Gestor
                            </option>

                            <option>
                                Autoavaliação
                            </option>

                            <option>
                                Líder → Turma
                            </option>

                            <option>
                                Aluno → Líder
                            </option>

                            <option>
                                360°
                            </option>

                        </select>

                    </div>

                    <div className="col-span-2">

                        <label className="font-medium">
                            Descrição
                        </label>

                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            rows={4}
                            placeholder="Descreva o objetivo desta avaliação..."
                            className="
                                w-full
                                mt-2
                                rounded-lg
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-3
                                text-gray-800
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B8A4FF]
                                focus:border-[#B8A4FF]
                            "
                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Data de disponibilização
                        </label>

                        <input
                            type="date"
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                            className="
                                w-full
                                mt-2
                                rounded-lg
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-3
                                text-gray-800
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B8A4FF]
                                focus:border-[#B8A4FF]
                            "
                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Prazo final
                        </label>

                        <input
                            type="date"
                            value={prazo}
                            onChange={(e) => setPrazo(e.target.value)}
                            className="
                                w-full
                                mt-2
                                rounded-lg
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-3
                                text-gray-800
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B8A4FF]
                                focus:border-[#B8A4FF]
                            "
                        />

                    </div>

                    <div className="col-span-2">

                        <label className="font-medium">
                            Recorrência
                        </label>

                        <select
                            value={recorrencia}
                            onChange={(e) => setRecorrencia(e.target.value)}
                            className="
                                w-full
                                mt-2
                                rounded-lg
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-3
                                text-gray-800
                                placeholder:text-gray-400
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B8A4FF]
                                focus:border-[#B8A4FF]
                            "
                        >

                            <option value="uma">
                                Apenas uma vez
                            </option>

                            <option value="mensal">
                                Mensal
                            </option>

                            <option value="bimestral">
                                Bimestral
                            </option>

                            <option value="trimestral">
                                Trimestral
                            </option>

                            <option value="semestral">
                                Semestral
                            </option>

                            <option value="anual">
                                Anual
                            </option>

                        </select>

                    </div>

                </div>

            </div>

            {/* COMPETÊNCIAS */}

            <div
                className="
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-xl
                    p-8
                "
            >

                <h2 className="text-xl font-bold">
                    Competências
                </h2>

                <p className="text-gray-500 mt-2">
                    Aqui serão adicionados os tópicos e as perguntas da avaliação.
                </p>

                <div
                    className="
                        mt-8
                        border-2
                        border-dashed
                        border-gray-300
                        rounded-xl
                        p-10
                        text-center
                        text-gray-500
                        bg-white
                    "
                >
                    Área destinada à criação dos tópicos e perguntas.
                </div>

            </div>

            {/* BOTÕES */}

            <div className="flex justify-end gap-4">

                <button
                    className="
                        border
                        border-gray-300
                        px-6
                        py-3
                        rounded-lg
                        hover:bg-gray-100
                        transition
                    "
                >
                    Cancelar
                </button>

                <button
                    className="
                        bg-[#B8A4FF]
                        text-white
                        px-8
                        py-3
                        rounded-lg
                        hover:opacity-90
                        transition
                    "
                >
                    Salvar avaliação
                </button>

            </div>

        </div>

    );

};