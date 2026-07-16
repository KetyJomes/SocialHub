import { Plus } from "lucide-react";

import { EvaluationQuestionCard } from "./EvaluationQuestionCard";

export const EvaluationSectionEditor = ({
    secoes,
    setSecoes,
    adicionarSecao
}) => {

    function alterarTitulo(id, valor) {

        setSecoes(prev =>
            prev.map(secao =>
                secao.id === id
                    ? {
                        ...secao,
                        titulo: valor
                    }
                    : secao
            )
        );

    }

    function adicionarPergunta(secaoId) {

        setSecoes(prev =>
            prev.map(secao =>
                secao.id === secaoId
                    ? {
                        ...secao,
                        perguntas: [
                            ...secao.perguntas,
                            {
                                id: Date.now(),
                                texto: ""
                            }
                        ]
                    }
                    : secao
            )
        );

    }

    function alterarPergunta(secaoId, perguntaId, valor) {

        setSecoes(prev =>
            prev.map(secao =>
                secao.id === secaoId
                    ? {
                        ...secao,
                        perguntas: secao.perguntas.map(pergunta =>
                            pergunta.id === perguntaId
                                ? {
                                    ...pergunta,
                                    texto: valor
                                }
                                : pergunta
                        )
                    }
                    : secao
            )
        );

    }

    function removerPergunta(secaoId, perguntaId) {

        setSecoes(prev =>
            prev.map(secao =>
                secao.id === secaoId
                    ? {
                        ...secao,
                        perguntas: secao.perguntas.filter(
                            pergunta => pergunta.id !== perguntaId
                        )
                    }
                    : secao
            )
        );

    }

    function removerSecao(id) {

        setSecoes(prev =>
            prev.filter(secao => secao.id !== id)
        );

    }

    return (

        <section className="mt-8 space-y-6">

            {
                secoes.map((secao, index) => (

                    <div
                        key={secao.id}
                        className="
                            bg-white
                            border
                            border-gray-200
                            rounded-xl
                            p-6
                            hover:shadow-sm
                            transition
                        "
                    >
                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >
                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    text-gray-800
                                "
                            >
                                Tópico {index + 1}
                            </h2>

                            {
                                secoes.length > 1 && (
                                    <button
                                        onClick={() =>
                                            removerSecao(secao.id)
                                        }
                                        className="
                                            text-sm
                                            text-red-400
                                            hover:text-red-500
                                            transition
                                        "
                                    >
                                        Remover tópico
                                    </button>

                                )
                            }

                        </div>

                        <input
                            type="text"
                            placeholder="Ex: Competências Socioemocionais"
                            value={secao.titulo}
                            onChange={(e) =>
                                alterarTitulo(
                                    secao.id,
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                mt-5
                                bg-white
                                border
                                border-gray-200
                                rounded-lg
                                px-4
                                py-3
                                text-gray-800
                                placeholder:text-gray-400
                                outline-none
                                focus:ring-2
                                focus:ring-[#B8A4FF]
                                focus:border-[#B8A4FF]
                            "
                        />

                        <div
                            className="
                                mt-6
                                space-y-4
                            "
                        >

                            {
                                secao.perguntas.map((pergunta, index) => (
                                    
                                    <EvaluationQuestionCard
                                        key={pergunta.id}
                                        numero={index + 1}
                                        pergunta={pergunta}
                                        onChange={(valor) =>
                                            alterarPergunta(
                                                secao.id,
                                                pergunta.id,
                                                valor
                                            )
                                        }

                                        onRemove={() =>
                                            removerPergunta(
                                                secao.id,
                                                pergunta.id
                                            )
                                        }

                                        podeRemover={
                                            secao.perguntas.length > 1
                                        }

                                    />

                                ))
                            }

                        </div>

                        <button
                            onClick={() =>
                                adicionarPergunta(secao.id)
                            }

                            className="
                                mt-5
                                flex
                                items-center
                                gap-2
                                text-[#B8A4FF]
                                font-medium
                                hover:opacity-80
                                transition
                            "

                        >
                            <Plus size={18} />
                            Adicionar pergunta
                        </button>
                    </div>

                ))
            }

            <button
                onClick={adicionarSecao}
                className="
                    w-full
                    border-2
                    border-dashed
                    border-[#B8A4FF]
                    rounded-xl
                    py-4
                    text-[#B8A4FF]
                    font-semibold
                    hover:bg-[#F8F5FF]
                    transition
                "

            >
                + Adicionar novo tópico

            </button>
        </section>

    );

};