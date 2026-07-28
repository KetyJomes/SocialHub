import { ClipboardCheck } from "lucide-react";


export const TabelaEvaluationsPending = ({ avaliacoes }) => {


    return (

        <div
            className="
                bg-white
                rounded-xl
                border
                border-gray-100
                shadow-sm
                p-6
            "
        >


            <div
                className="
                    flex
                    items-center
                    gap-3
                    mb-6
                "
            >

                <div
                    className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#F1EDFF]
                        flex
                        items-center
                        justify-center
                    "
                >

                    <ClipboardCheck
                        size={20}
                        className="text-[#0291F7]"
                        strokeWidth={2}
                    />

                </div>


                <h2 className="text-xl font-bold text-gray-800">

                    Avaliações para concluir

                </h2>


            </div>



            <div
                className="
                    overflow-x-auto
                "
            >


                <table className="w-full">


                    <thead>


                        <tr
                            className="
                                text-left
                                text-sm
                                text-gray-500
                                border-b
                                border-gray-100
                            "
                        >

                            <th className="pb-4">

                                Avaliação

                            </th>


                            <th className="pb-4">

                                Responsável

                            </th>


                            <th className="pb-4">

                                Prazo

                            </th>


                            <th className="pb-4">

                                Status

                            </th>


                            <th className="pb-4">

                                Ação

                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {

                            avaliacoes.map((avaliacao, index) => (


                                <tr
                                    key={index}
                                    className="
                                        border-b
                                        border-gray-100
                                        last:border-none
                                    "
                                >


                                    <td className="py-5 text-gray-800 font-medium">

                                        {avaliacao.nome}


                                    </td>



                                    <td className="py-5 text-gray-600">


                                        {avaliacao.responsavel}


                                    </td>



                                    <td className="py-5 text-gray-600">


                                        {avaliacao.prazo}


                                    </td>



                                    <td className="py-5">


                                        <span
                                            className="
                                                px-3
                                                py-1
                                                rounded-full
                                                text-xs
                                                font-medium
                                                bg-yellow-50
                                                text-yellow-600
                                            "
                                        >

                                            {avaliacao.status}


                                        </span>


                                    </td>



                                    <td className="py-5">


                                        <button
                                            className="
                                                text-sm
                                                text-[#9B87E8]
                                                font-medium
                                                hover:text-[#7F6BD1]
                                                transition
                                            "
                                        >

                                            Avaliar


                                        </button>


                                    </td>


                                </tr>


                            ))

                        }


                    </tbody>


                </table>


            </div>


        </div>

    );

};