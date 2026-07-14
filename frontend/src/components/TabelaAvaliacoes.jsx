// usado no UserResultados

import { ClipboardList, CalendarDays, ChevronRight } from "lucide-react";
import { LinhaAvaliacaoDash } from "./LinhaAvaliacaoDash";

export const TabelaAvaliacoes = ({ avaliacoes }) => {

    return (

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 w-full">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <ClipboardList className="text-blue-600" />
                    </div>

                    <div>

                        <h2 className="text-xl font-bold">
                            Minhas Avaliações
                        </h2>

                        <p className="text-gray-500">
                            Veja suas avaliações realizadas e acompanhe sua evolução.
                        </p>

                    </div>

                </div>

            </div>

            <div className="overflow-x-auto mt-8">

                <table className="w-full">

                    <thead>

                        <tr className="text-gray-500 text-sm border-b">

                            <th className="pb-4 text-left">
                                AVALIAÇÃO
                            </th>

                            <th className="pb-4 text-center">
                                TIPO
                            </th>

                            <th className="pb-4 text-center">
                                DATA DE CONCLUSÃO
                            </th>

                            <th className="pb-4 text-center">
                                SITUAÇÃO
                            </th>

                            <th className="pb-4 text-center">
                                DESEMPENHO
                            </th>

                            <th className="pb-4 text-center">
                                AÇÕES
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {avaliacoes.map((avaliacao) => (

                            <LinhaAvaliacaoDash
                                key={avaliacao.id}
                                avaliacao={avaliacao}
                            />

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

};