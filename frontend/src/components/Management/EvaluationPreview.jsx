// Visualização de dos tópicos adicionados

export const EvaluationPreview = ({
    dados,
    secoes,
    onSaveModel,
    onCreate
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

            <div>

                <h3 className="text-3xl font-bold text-gray-800">
                    {dados.titulo || "Título da avaliação"}
                </h3>

                <p className="text-gray-500 mt-2 mb-8">
                    {dados.tipo || "Tipo da avaliação"}
                </p>

            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-xl">

                <table className="w-full border-collapse">

                    <thead>

                        <tr className="border-b border-gray-200 bg-white">

                            <th className="w-20 px-4 py-5 text-center font-semibold">
                                Nº
                            </th>

                            <th className="w-80 px-6 py-5 text-left font-semibold">
                                Competência
                            </th>

                            <th className="px-6 py-5 text-center font-semibold">
                                Crítico
                            </th>

                            <th className="px-6 py-5 text-center font-semibold">
                                Abaixo
                            </th>

                            <th className="px-6 py-5 text-center font-semibold">
                                Dentro
                            </th>

                            <th className="px-6 py-5 text-center font-semibold">
                                Acima
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            secoes.map((secao, indice) => {

                                const critico = secao.perguntas.find(
                                    pergunta =>
                                        pergunta.escala === "Crítico"
                                );

                                const abaixo = secao.perguntas.find(
                                    pergunta =>
                                        pergunta.escala === "Abaixo do esperado"
                                );

                                const dentro = secao.perguntas.find(
                                    pergunta =>
                                        pergunta.escala === "Dentro do esperado"
                                );

                                const acima = secao.perguntas.find(
                                    pergunta =>
                                        pergunta.escala === "Acima do esperado"
                                );

                                return (

                                    <tr
                                        key={secao.id}
                                        className="border-b border-gray-200 align-top"
                                    >

                                        <td className="text-center py-6 font-medium">
                                            {(indice + 1)
                                                .toString()
                                                .padStart(2, "0")}
                                        </td>

                                        <td className="px-6 py-6">

                                            <h4 className="font-bold text-lg text-gray-800">
                                                {
                                                    secao.titulo ||
                                                    "Título da competência"
                                                }
                                            </h4>

                                            <p className="text-gray-500 mt-2">
                                                {
                                                    secao.descricao ||
                                                    "Descrição da competência"
                                                }
                                            </p>

                                        </td>

                                        <td className="px-6 py-6 text-center">

                                            {
                                                critico
                                                    ? critico.texto
                                                    : "-"
                                            }

                                        </td>

                                        <td className="px-6 py-6 text-center">

                                            {
                                                abaixo
                                                    ? abaixo.texto
                                                    : "-"
                                            }

                                        </td>

                                        <td className="px-6 py-6 text-center">

                                            {
                                                dentro
                                                    ? dentro.texto
                                                    : "-"
                                            }

                                        </td>

                                        <td className="px-6 py-6 text-center">

                                            {
                                                acima
                                                    ? acima.texto
                                                    : "-"
                                            }

                                        </td>

                                    </tr>

                                );

                            })

                        }

                    </tbody>

                </table>

            </div>

                <div className="flex justify-end gap-4 mt-8">

                    <button
                        onClick={onSaveModel}
                        className="
                            bg-[#0291F7]
                            text-white
                            px-8
                            py-3
                            rounded-lg
                            hover:opacity-90
                            transition
                            font-medium
                        "
                    >
                        Salvar como modelo
                    </button>

                    <button
                        onClick={onCreate}
                        className="
                            bg-[#0291F7]
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

        </section>

    );

};