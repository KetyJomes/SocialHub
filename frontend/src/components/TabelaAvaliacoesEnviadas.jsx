import { useMemo, useState } from "react";

import {
    ClipboardList,
    Search
} from "lucide-react";

import { LinhaAvaliacaoEnviada } from "./LinhaAvaliacaoEnviada";

export const TabelaAvaliacoesEnviadas = ({ avaliacoes }) => {

    const [pesquisa, setPesquisa] = useState("");
    const [tipo, setTipo] = useState("Todos");
    const [status, setStatus] = useState("Todos");

    const avaliacoesFiltradas = useMemo(() => {

        return avaliacoes.filter((avaliacao) => {

            const pesquisaValida =
                avaliacao.nome
                    .toLowerCase()
                    .includes(pesquisa.toLowerCase());

            const tipoValido =
                tipo === "Todos" ||
                avaliacao.tipo === tipo;

            const statusValido =
                status === "Todos" ||
                avaliacao.status === status;

            return (
                pesquisaValida &&
                tipoValido &&
                statusValido
            );

        });

    }, [avaliacoes, pesquisa, tipo, status]);

    return (

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 w-full">


            {/* FILTROS */}

            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input

                        type="text"

                        placeholder="Pesquisar avaliação..."

                        value={pesquisa}

                        onChange={(e) => setPesquisa(e.target.value)}

                        className="pl-11 pr-4 h-11 w-80 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"

                    />

                </div>

                <div className="flex gap-3">

                    <select

                        value={tipo}

                        onChange={(e) => setTipo(e.target.value)}

                        className="px-4 h-11 rounded-xl border border-gray-200"

                    >

                        <option>Todos</option>
                        <option>360°</option>
                        <option>Gestão</option>
                        <option>Liderança</option>
                        <option>Autoavaliação</option>
                        <option>Diagnóstica</option>
                        <option>Feedback</option>

                    </select>

                    <select

                        value={status}

                        onChange={(e) => setStatus(e.target.value)}

                        className="px-4 h-11 rounded-xl border border-gray-200"

                    >

                        <option>Todos</option>
                        <option>Publicada</option>
                        <option>Em andamento</option>
                        <option>Encerrada</option>

                    </select>

                </div>

            </div>


            {/* TABELA */}

            <div className="overflow-x-auto">

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
                                TURMA
                            </th>

                            <th className="pb-4 text-center">
                                POSTAGEM
                            </th>

                            <th className="pb-4 text-center">
                                PRAZO
                            </th>

                            <th className="pb-4 text-center">
                                STATUS
                            </th>

                            <th className="pb-4 text-center">
                                AÇÕES
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            avaliacoesFiltradas.map((avaliacao) => (

                                <LinhaAvaliacaoEnviada

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