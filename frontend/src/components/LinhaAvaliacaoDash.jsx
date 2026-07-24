import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


export const LinhaAvaliacaoDash = ({ avaliacao }) => {

    const navigate = useNavigate();


    function visualizarComparacao() {

        navigate("/comparacao");

    }


    return (

        <tr
            className="
                border-b
                border-gray-200
                hover:bg-gray-50
                transition
            "
        >


            {/* AVALIAÇÃO */}
            <td className="px-6 py-5">

                <div className="flex flex-col gap-1">

                    <h3
                        className="
                            font-semibold
                            text-[15px]
                            text-gray-800
                        "
                    >
                        {avaliacao.nome}
                    </h3>


                    <p
                        className="
                            text-sm
                            text-gray-500
                        "
                    >
                        {avaliacao.descricao}
                    </p>

                </div>

            </td>




            {/* TIPO */}
            <td className="text-center py-5 px-4">

                <span
                    className="
                        text-sm
                        text-gray-700
                    "
                >
                    {avaliacao.tipo}
                </span>

            </td>





            {/* DATA */}
            <td className="text-center py-5 px-4">

                <span
                    className="
                        text-sm
                        text-gray-700
                    "
                >
                    {
                        avaliacao.dataConclusao
                        ||
                        avaliacao.data
                        ||
                        "-"
                    }
                </span>

            </td>







            {/* STATUS */}
            <td className="text-center py-5 px-4">

                <span
                    className={`
                        inline-flex
                        justify-center
                        items-center
                        min-w-[90px]
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                            avaliacao.status === "Concluída" ||
                            avaliacao.status === "Respondida"

                            ?

                            "bg-green-100 text-green-700"


                            :

                            avaliacao.status === "Pendente"

                            ?

                            "bg-yellow-100 text-yellow-700"


                            :

                            avaliacao.status === "Em atraso"

                            ?

                            "bg-red-100 text-red-700"


                            :

                            "bg-gray-100 text-gray-700"

                        }
                    `}
                >

                    {avaliacao.status}

                </span>

            </td>







            {/* DESEMPENHO */}
            <td className="text-center py-5 px-4">

                <span
                    className="
                        text-sm
                        font-semibold
                        text-gray-800
                    "
                >

                    {
                        avaliacao.desempenho
                        ||
                        "-"
                    }

                </span>

            </td>







            {/* AÇÃO */}
            <td className="text-center py-5 px-4">

                <button
                    onClick={visualizarComparacao}

                    className="
                        w-9
                        h-9
                        rounded-full
                        bg-[#0291F7]
                        text-white
                        flex
                        items-center
                        justify-center
                        mx-auto
                        hover:bg-[#027bd1]
                        transition
                    "
                >

                    <ChevronRight size={18}/>

                </button>

            </td>


        </tr>

    );

};