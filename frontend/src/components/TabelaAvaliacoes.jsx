// usado no UserResultados
import { ClipboardCheck } from "lucide-react";
import { LinhaAvaliacaoDash } from "./LinhaAvaliacaoDash";

export const TabelaAvaliacoes = ({ avaliacoes }) => {

    return (

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 w-full">

            <div className="flex items-center gap-4">

                <div>

                    <div className="flex items-center gap-3">

                        <div
                            className="
                                w-10
                                h-10
                                rounded-full
                                bg-[#EAF4FF]
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


                        <h2 className="font-bold text-2xl">
                            Minhas Avaliações
                        </h2>

                    </div>


                    <p className="text-gray-500">
                        Veja suas avaliações realizadas e acompanhe sua evolução.
                    </p>

                </div>

            </div>


            <div className="overflow-x-auto mt-8">

                <table className="w-full table-fixed">

                    <thead>

                        <tr className="border-b text-gray-500">

                            <th className="w-[35%] text-left px-6 py-4">
                                Avaliações
                            </th>

                            <th className="w-[15%]">
                                Tipo
                            </th>

                            <th className="w-[15%]">
                                Data de conclusão
                            </th>

                            <th className="w-[15%]">
                                Status
                            </th>

                            <th className="w-[10%]">
                                Desempenho
                            </th>

                            <th className="w-[10%]">
                                Ações
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {
                            avaliacoes.map((avaliacao) => (

                                <LinhaAvaliacaoDash
                                    key={avaliacao.id}
                                    avaliacao={avaliacao}
                                />

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};