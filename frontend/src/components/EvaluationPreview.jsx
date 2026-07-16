export const EvaluationPreview = ({
    dados,
    secoes
}) => {

    return (

        <section
            className="
                mt-8
                bg-white
                border
                border-gray-200
                rounded-xl
                p-6
                hover:shadow-sm
                transition
            "
        >

            <h2 className="text-xl font-bold mb-6">
                Pré-visualização
            </h2>

            <div className="space-y-6">

                <div>

                    <h3 className="text-2xl font-bold text-gray-800">

                        {
                            dados.titulo || "Título da avaliação"
                        }

                    </h3>

                    <p className="text-gray-500 mt-2">

                        {
                            dados.tipo || "Tipo da avaliação"
                        }

                    </p>

                </div>

                {

                    secoes.map((secao, indiceSecao) => (

                        <div
                            key={secao.id}
                            className="
                                border
                                border-gray-200
                                rounded-xl
                                p-5
                                bg-gray-50
                            "
                        >

                            <h4 className="text-lg font-semibold mb-5">

                                {

                                    secao.titulo
                                        ? secao.titulo
                                        : `Tópico ${indiceSecao + 1}`

                                }

                            </h4>

                            <div className="space-y-5">

                                {

                                    secao.perguntas.map((pergunta, indicePergunta) => (

                                        <div key={pergunta.id}>

                                            <p className="font-medium text-gray-800">

                                                {indicePergunta + 1}. {

                                                    pergunta.texto
                                                        ? pergunta.texto
                                                        : "Pergunta..."

                                                }

                                            </p>

                                            <div className="flex gap-3 mt-3 flex-wrap">

                                                <span
                                                    className="
                                                        px-4
                                                        py-2
                                                        rounded-lg
                                                        border
                                                        border-gray-200
                                                        text-sm
                                                        bg-white
                                                    "
                                                >
                                                    Abaixo do esperado
                                                </span>

                                                <span
                                                    className="
                                                        px-4
                                                        py-2
                                                        rounded-lg
                                                        border
                                                        border-gray-200
                                                        text-sm
                                                        bg-white
                                                    "
                                                >
                                                    Dentro do esperado
                                                </span>

                                                <span
                                                    className="
                                                        px-4
                                                        py-2
                                                        rounded-lg
                                                        border
                                                        border-gray-200
                                                        text-sm
                                                        bg-white
                                                    "
                                                >
                                                    Acima do esperado
                                                </span>

                                                <span
                                                    className="
                                                        px-4
                                                        py-2
                                                        rounded-lg
                                                        border
                                                        border-gray-200
                                                        text-sm
                                                        bg-white
                                                    "
                                                >
                                                    Não se aplica
                                                </span>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

                <div className="flex justify-end gap-4 pt-4">

                    <button
                        className="
                            border
                            border-gray-300
                            px-6
                            py-3
                            rounded-lg
                            hover:bg-gray-50
                            transition
                        "
                    >
                        Salvar como modelo
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
                            font-medium
                        "
                    >
                        Criar avaliação
                    </button>

                </div>

            </div>

        </section>

    );

};