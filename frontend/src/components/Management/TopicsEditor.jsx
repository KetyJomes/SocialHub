// Adicionar tópicos e alternativas na avaliação

import { Plus } from "lucide-react";

import { EvaluationQuestionCard } from "../EvaluationQuestionCard";

export const TopicsEditor = ({
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

    function alterarDescricao(id, valor) {

        setSecoes(prev =>
            prev.map(secao =>
                secao.id === id
                    ? {
                        ...secao,
                        descricao: valor
                    }
                    : secao
            )
        );

    }

    function adicionarPergunta(secaoId) {

        const escalas = [
            "Crítico",
            "Abaixo do esperado",
            "Dentro do esperado",
            "Acima do esperado"
        ];

        setSecoes(prev =>
            prev.map(secao => {

                if (secao.id !== secaoId) {
                    return secao;
                }

                if (secao.perguntas.length >= 4) {
                    return secao;
                }

                const escalasUtilizadas = secao.perguntas.map(
                    pergunta => pergunta.escala
                );

                const proximaEscala = escalas.find(
                    escala => !escalasUtilizadas.includes(escala)
                );

                return {
                    ...secao,
                    perguntas: [
                        ...secao.perguntas,
                        {
                            id: Date.now(),
                            texto: "",
                            escala: proximaEscala || ""
                        }
                    ]
                };

            })
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

    function alterarEscala(secaoId, perguntaId, escala) {

        setSecoes(prev =>
            prev.map(secao =>
                secao.id === secaoId
                    ? {
                        ...secao,
                        perguntas: secao.perguntas.map(pergunta =>
                            pergunta.id === perguntaId
                                ? {
                                    ...pergunta,
                                    escala
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
                secoes.map((secao) => (

                    <div
                        key={secao.id}
                        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition"
                    >

                        <h2 className="text-xl font-bold text-gray-800 mb-5">
                            Tópico
                        </h2>

                        <div className="flex justify-between items-center">

                            <input
                                type="text"
                                placeholder="Título da competência"
                                value={secao.titulo}
                                onChange={(e) => alterarTitulo(secao.id, e.target.value)}
                                className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#B8A4FF] focus:border-[#B8A4FF]"
                            />

                            {
                                secoes.length > 1 && (

                                    <button
                                        onClick={() => removerSecao(secao.id)}
                                        className="text-sm text-red-400 hover:text-red-500 transition ml-4 whitespace-nowrap"
                                    >
                                        Remover tópico
                                    </button>

                                )
                            }

                        </div>

                        <textarea
                            rows={3}
                            placeholder="Descrição da competência"
                            value={secao.descricao}
                            onChange={(e) => alterarDescricao(secao.id, e.target.value)}
                            className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#B8A4FF] focus:border-[#B8A4FF]"
                        />

                        <div className="mt-6 space-y-4">

                            {
                                secao.perguntas.map((pergunta, index) => (

                                    <EvaluationQuestionCard
                                        key={pergunta.id}
                                        numero={index + 1}
                                        pergunta={pergunta}
                                        onChange={(valor) => alterarPergunta(secao.id, pergunta.id, valor)}
                                        onChangeEscala={(escala) => alterarEscala(secao.id, pergunta.id, escala)}
                                        escalasDisponiveis={[
                                            "Crítico",
                                            "Abaixo do esperado",
                                            "Dentro do esperado",
                                            "Acima do esperado"
                                        ]}
                                        onRemove={() => removerPergunta(secao.id, pergunta.id)}
                                        podeRemover={secao.perguntas.length > 1}
                                    />

                                ))
                            }

                        </div>

                        {
                            secao.perguntas.length < 4 && (

                                <button
                                    onClick={() => adicionarPergunta(secao.id)}
                                    className="mt-5 flex items-center gap-2 text-[#B8A4FF] font-medium hover:opacity-80 transition"
                                >

                                    <Plus size={18} />

                                    Adicionar questão

                                </button>

                            )
                        }

                    </div>

                ))
            }

            <button
                onClick={adicionarSecao}
                className="w-full border-2 border-dashed border-[#B8A4FF] rounded-xl py-4 text-[#B8A4FF] font-semibold hover:bg-[#F8F5FF] transition"
            >
                + Adicionar novo tópico
            </button>

        </section>

    );

};