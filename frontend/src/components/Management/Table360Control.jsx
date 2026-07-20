import { Search } from "lucide-react";
import { useState } from "react";

import { Row360Control } from "./Row360Control";

export const Table360Control = ({
    colegas,
    turma,
    aluno,
    avaliacaoId,
    tipoAba
}) => {

    const [pesquisa, setPesquisa] = useState("");

    const filtrados = colegas.filter(

        colega =>

            colega.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
            colega.cargo.toLowerCase().includes(pesquisa.toLowerCase())

    );

    return (

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

            <div className="flex justify-between items-center p-8 border-b">

                <div>

                    <h2 className="text-2xl font-semibold">
                        Colegas
                    </h2>

                    <p className="text-gray-500">
                        Clique para visualizar a avaliação.
                    </p>

                </div>

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input

                        value={pesquisa}

                        onChange={(e)=>setPesquisa(e.target.value)}

                        placeholder="Pesquisar..."

                        className="w-80 h-12 rounded-xl border pl-11"

                    />

                </div>

            </div>

            <div className="grid grid-cols-12 px-8 py-4 bg-gray-50 font-semibold">

                <div className="col-span-7">
                    Nome
                </div>

                <div className="col-span-2 text-center">
                    Status
                </div>

                <div className="col-span-3 text-center">
                    Ação
                </div>

            </div>

            {

                filtrados.map(colega=>(

                    <Row360Control
                        key={colega.id}
                        colega={colega}
                        turma={turma}
                        aluno={aluno}
                        tipoAba={tipoAba}
                        avaliacaoId={avaliacaoId}

                    />

                ))

            }

        </div>

    );

};