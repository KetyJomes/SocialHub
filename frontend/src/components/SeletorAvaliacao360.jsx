import { useState } from "react";
import {
    Users,
    ChevronRight,
    X,
    Search
} from "lucide-react";

export const SeletorAvaliacao360 = ({
    fechar,
    selecionarAluno
}) => {

    const alunos = [

        {
            id: 1,
            nome: "Ana Beatriz",
            cargo: "Analista de Produção"
        },

        {
            id: 2,
            nome: "Bruno Martins",
            cargo: "Engenharia"
        },

        {
            id: 3,
            nome: "Carlos Oliveira",
            cargo: "Técnico"
        },

        {
            id: 4,
            nome: "Daniel Souza",
            cargo: "Operador"
        },

        {
            id: 5,
            nome: "Eduarda Lima",
            cargo: "Qualidade"
        },

        {
            id: 6,
            nome: "Felipe Costa",
            cargo: "Engenharia"
        },

        {
            id: 7,
            nome: "Gabriel Silva",
            cargo: "Analista"
        },

        {
            id: 8,
            nome: "Henrique Rocha",
            cargo: "Logística"
        },

        {
            id: 9,
            nome: "Isabela Moraes",
            cargo: "RH"
        },

        {
            id: 10,
            nome: "João Silva",
            cargo: "Produção"
        },

        {
            id: 11,
            nome: "Juliana Ferreira",
            cargo: "Compras"
        },

        {
            id: 12,
            nome: "Lucas Pereira",
            cargo: "Supervisor"
        },

        {
            id: 13,
            nome: "Marcos Almeida",
            cargo: "Planejamento"
        },

        {
            id: 14,
            nome: "Maria Souza",
            cargo: "Engenharia"
        },

        {
            id: 15,
            nome: "Paulo Henrique",
            cargo: "Manutenção"
        },

        {
            id: 16,
            nome: "Renata Gomes",
            cargo: "Financeiro"
        }

    ];

    const [pesquisa, setPesquisa] = useState("");

    const alunosFiltrados = alunos
        .filter(aluno =>
            aluno.nome
                .toLowerCase()
                .includes(pesquisa.toLowerCase())
        )
        .sort((a, b) => a.nome.localeCompare(b.nome));

    return (

        <div
            className="
                fixed
                inset-0
                bg-black/40
                flex
                items-center
                justify-center
                z-50
            "
        >

            <div
                className="
                    bg-white
                    rounded-3xl
                    w-[750px]
                    p-8
                    shadow-xl
                "
            >

                {/* Cabeçalho */}

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h2 className="text-2xl font-bold text-gray-800">
                            Avaliação 360°
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Escolha o colaborador que deseja avaliar.
                        </p>

                    </div>

                    <button
                        onClick={fechar}
                        className="
                            text-gray-400
                            hover:text-gray-700
                            transition
                        "
                    >
                        <X />
                    </button>

                </div>

                {/* Pesquisa */}

                <div className="relative mb-6">

                    <Search
                        size={18}
                        className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "
                    />

                    <input
                        type="text"
                        placeholder="Pesquisar colaborador..."
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            py-3
                            pl-11
                            pr-4
                            outline-none
                            focus:border-[#21528A]
                        "
                    />

                </div>

                {/* Lista */}

                <div
                    className="
                        h-[450px]
                        overflow-y-auto
                        rounded-2xl
                        border
                        divide-y
                    "
                >

                    {
                        alunosFiltrados.map(aluno => (

                            <button

                                key={aluno.id}

                                onClick={() => selecionarAluno(aluno)}

                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    px-6
                                    py-4
                                    hover:bg-blue-50
                                    transition
                                "

                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            w-11
                                            h-11
                                            rounded-full
                                            bg-blue-100
                                            flex
                                            items-center
                                            justify-center
                                            flex-shrink-0
                                        "
                                    >

                                        <Users
                                            size={20}
                                            className="text-blue-600"
                                        />

                                    </div>

                                    <div className="text-left">

                                        <p className="font-semibold text-gray-800">
                                            {aluno.nome}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {aluno.cargo}
                                        </p>

                                    </div>

                                </div>

                                <ChevronRight
                                    size={20}
                                    className="text-gray-400 flex-shrink-0"
                                />

                            </button>

                        ))
                    }

                    {
                        alunosFiltrados.length === 0 && (

                            <div className="h-full flex items-center justify-center text-gray-500">

                                Nenhum colaborador encontrado.

                            </div>

                        )
                    }

                </div>

            </div>

        </div>

    );

};