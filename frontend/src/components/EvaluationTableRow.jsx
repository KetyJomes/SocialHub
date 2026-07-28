const optionStyle = {

    Crítico: {
        bg: "bg-red-100",
        border: "border-red-500",
        ring: "ring-red-200",
        hover: "hover:bg-red-50",
    },

    Abaixo: {
        bg: "bg-amber-100",
        border: "border-amber-500",
        ring: "ring-amber-200",
        hover: "hover:bg-amber-50",
    },

    Dentro: {
        bg: "bg-green-100",
        border: "border-green-500",
        ring: "ring-green-200",
        hover: "hover:bg-green-50",
    },

    Acima: {
        bg: "bg-blue-100",
        border: "border-blue-500",
        ring: "ring-blue-200",
        hover: "hover:bg-blue-50",
    },

};


export const EvaluationTableRow = ({
    topic,
    answer,
    onSelect,
}) => {


    return (

        <tr className="border-b border-gray-100 hover:bg-slate-50 transition">


            {/* Número */}

            <td className="px-4 py-6 text-center align-top">

                <span
                    className="
                        w-10
                        h-10
                        rounded-lg
                        bg-[#0291F7]/15
                        text-[#0291F7]
                        font-semibold
                        flex
                        items-center
                        justify-center
                        mx-auto
                    "
                >
                    {String(topic.id).padStart(2,"0")}
                </span>

            </td>



            {/* Competência */}

            <td className="px-6 py-6 align-top">


                <h3 className="font-semibold text-gray-800 text-lg">
                    {topic.titulo}
                </h3>


                <p className="mt-2 text-sm text-gray-500 leading-6">
                    {topic.descricao}
                </p>


            </td>



            {/* Níveis */}

            {topic.niveis.map((nivel)=>{


                const selecionado =
                    answer?.nome === nivel.nome;


                return (

                    <td
                        key={nivel.nome}
                        className="px-4 py-5 align-top"
                    >


                        <label

                            onClick={() =>
                                onSelect(topic.id,nivel)
                            }

                            className={`
                                block
                                min-h-[170px]
                                cursor-pointer
                                rounded-xl
                                border-2
                                p-4
                                transition-all

                                ${
                                    selecionado

                                    ?

                                    `
                                    ${optionStyle[nivel.nome].bg}
                                    ${optionStyle[nivel.nome].border}
                                    ring-2
                                    ${optionStyle[nivel.nome].ring}
                                    shadow-md
                                    scale-[1.02]
                                    `

                                    :

                                    `
                                    border-gray-200
                                    bg-white
                                    ${optionStyle[nivel.nome].hover}
                                    hover:border-gray-300
                                    hover:shadow
                                    `
                                }

                            `}

                        >


                            <div className="flex gap-3">


                                <input

                                    type="radio"

                                    checked={selecionado}

                                    onChange={() =>
                                        onSelect(topic.id,nivel)
                                    }

                                    className="mt-1 accent-[#0291F7]"

                                />



                                <div>


                                    <h4 className="font-semibold text-gray-800">

                                        {nivel.nome}

                                    </h4>



                                    <p className="text-sm text-gray-600 mt-3 leading-6">

                                        {nivel.descricao}

                                    </p>



                                    <span
                                        className="
                                            inline-block
                                            mt-4
                                            text-xs
                                            font-semibold
                                            text-gray-500
                                        "
                                    >

                                        Valor: {nivel.valor}

                                    </span>


                                </div>


                            </div>


                        </label>


                    </td>

                )


            })}


        </tr>

    );

};