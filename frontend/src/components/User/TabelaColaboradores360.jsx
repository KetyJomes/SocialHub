import { useState } from "react";

import { LinhaColaborador360 } from "./LinhaColaborador360";

import { Search } from "lucide-react";

export const TabelaColaboradores360 = ({ colaboradores }) => {

    const [pesquisa, setPesquisa] = useState("");

    const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
        colaborador.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

            {/* Cabeçalho */}

            <div className="flex justify-between items-center p-8 border-b border-gray-100">

                <div>

                    <h2 className="text-2xl font-semibold text-gray-800">
                        Colaboradores
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Responda ou visualize as avaliações dos colaboradores.
                    </p>

                </div>

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        placeholder="Pesquisar colaborador..."
                        className="w-80 h-12 rounded-xl border border-gray-200 pl-11 pr-4 outline-none focus:ring-2 focus:ring-violet-200"
                    />

                </div>

            </div>

            {/* Cabeçalho da tabela */}

            <div className="grid grid-cols-12 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-gray-500 bg-gray-50">

                <div className="col-span-5">
                    Colaborador
                </div>

                <div className="col-span-2">
                    Cargo
                </div>

                <div className="col-span-2 text-center">
                    Status
                </div>

                <div className="col-span-3 text-center">
                    Ação
                </div>

            </div>

            {/* Linhas */}

            <div>

                {
                    colaboradoresFiltrados.length > 0 ?

                        colaboradoresFiltrados.map((colaborador) => (

                            <LinhaColaborador360
                                key={colaborador.id}
                                colaborador={colaborador}
                            />

                        ))

                        :

                        <div className="py-16 text-center text-gray-400">

                            Nenhum colaborador encontrado.

                        </div>

                }

            </div>

        </div>

    );

};