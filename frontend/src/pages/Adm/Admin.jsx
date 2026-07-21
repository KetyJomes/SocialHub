import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    School,
    Users,
    UserCog,
    Plus,
    Search,
    Eye,
    Pencil,
    Trash2,
    X
} from "lucide-react";

import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/SidebarAdmin";

export const Admin = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [pesquisa, setPesquisa] = useState("");

    const [modalTurma, setModalTurma] = useState(false);

    const [editando, setEditando] = useState(false);

    const [novaTurma, setNovaTurma] = useState({

        nome: "",

        professorId: "",

        professor: "",

        status: "Ativa"

    });

    const [usuarios, setUsuarios] = useState([

        {
            id: 1,
            nome: "João Silva",
            perfil: "Professor"
        },

        {
            id: 2,
            nome: "Maria Souza",
            perfil: "Professor"
        },

        {
            id: 3,
            nome: "Carlos Lima",
            perfil: "Professor"
        }

    ]);

    const [turmas, setTurmas] = useState([

        {

            id: 1,

            nome: "1º EM A",

            alunos: 32,

            professor: "João Silva",

            status: "Ativa"

        },

        {

            id: 2,

            nome: "1º EM B",

            alunos: 28,

            professor: "Maria Souza",

            status: "Ativa"

        },

        {

            id: 3,

            nome: "2º EM A",

            alunos: 30,

            professor: "Carlos Lima",

            status: "Inativa"

        },

        {

            id: 4,

            nome: "3º EM A",

            alunos: 26,

            professor: "Ana Costa",

            status: "Ativa"

        }

    ]);

    const turmasFiltradas = turmas.filter(

        turma =>

            turma.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||

            turma.professor.toLowerCase().includes(pesquisa.toLowerCase())

    );

    const abrirNovaTurma = () => {

        setEditando(false);

        setNovaTurma({

            nome: "",

            professor: "",

            status: "Ativa"

        });

        setModalTurma(true);

    };

    const editarTurma = (turma) => {

        setEditando(true);

        setNovaTurma(turma);

        setModalTurma(true);

    };

    const salvarTurma = () => {

        if (editando) {

            setTurmas(

                turmas.map(

                    turma =>

                        turma.id === novaTurma.id

                            ? novaTurma

                            : turma

                )

            );

        }

        else {

            setTurmas([

                ...turmas,

                {

                    ...novaTurma,

                    id: turmas.length + 1,

                    alunos: 0

                }

            ]);

        }

        setModalTurma(false);

    };

    const excluirTurma = (id) => {

        setTurmas(

            turmas.filter(

                turma => turma.id !== id

            )

        );

    };

    return (

        <div className="min-h-screen bg-[#F7F8FC]">

            <Header
                setIsOpen={setIsOpen}
                isOpen={isOpen}
            />


            <SidebarAdmin
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className=" pt-[12vh] px-10 pb-10">

                <div className="flex items-center justify-between">

                    <div>

                        <h1 className="text-4xl font-bold text-gray-800">

                            Administração

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Gerencie turmas e usuários do sistema.

                        </p>

                    </div>

                    <button

                        onClick={() => navigate("/adm-control-user")}

                        className="bg-[#007BC0] text-white px-6 py-3 rounded-xl hover:bg-[#0067a3] transition flex items-center gap-2 cursor-pointer"
                    >

                        <UserCog size={20} />

                        Gerenciar Usuários

                    </button>

                </div>

                <div className="grid grid-cols-3 gap-6 mt-10">

                    <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

                            <School className="text-[#007BC0]" />

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">

                                {turmas.length}

                            </h2>

                            <p className="text-gray-500">

                                Turmas

                            </p>

                        </div>

                    </div>

                    <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                            <Users className="text-green-600" />

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">

                                {turmas.reduce((acc, turma) => acc + turma.alunos, 0)}

                            </h2>

                            <p className="text-gray-500">

                                Alunos

                            </p>

                        </div>

                    </div>

                    <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">

                            <UserCog className="text-purple-600" />

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold">

                                87

                            </h2>

                            <p className="text-gray-500">

                                Usuários

                            </p>

                        </div>

                    </div>

                </div>
                                <div className="bg-white rounded-3xl shadow-sm mt-10 p-8">

                    <div className="flex items-center justify-between mb-8">

                        <div className="relative w-[420px]">

                            <Search
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input

                                type="text"

                                placeholder="Pesquisar turma..."

                                value={pesquisa}

                                onChange={(e) => setPesquisa(e.target.value)}

                                className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#007BC0]"

                            />

                        </div>

                        <button

                            onClick={abrirNovaTurma}

                            className="bg-[#007BC0] hover:bg-[#0067a3] transition text-white px-6 h-12 rounded-xl flex items-center gap-2 cursor-pointer"

                        >

                            <Plus size={20} />

                            Nova Turma

                        </button>

                    </div>

                    <table className="w-full">

                        <thead>

                            <tr className="border-b border-gray-200 text-gray-600">

                                <th className="py-4 text-left">

                                    Turma

                                </th>

                                <th className="text-center">

                                    Alunos

                                </th>

                                <th className="text-center">

                                    Professor

                                </th>

                                <th className="text-center">

                                    Status

                                </th>

                                <th className="text-center">

                                    Ações

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                turmasFiltradas.map(

                                    turma => (

                                        <tr

                                            key={turma.id}

                                            className="border-b border-gray-100 hover:bg-gray-50 transition"

                                        >

                                            <td className="py-5 font-medium">

                                                {turma.nome}

                                            </td>

                                            <td className="text-center">

                                                {turma.alunos}

                                            </td>

                                            <td className="text-center">

                                                {turma.professor}

                                            </td>

                                            <td className="text-center">

                                                <span
                                                    className={`px-4 py-2 rounded-full text-sm font-medium ${

                                                        turma.status === "Ativa"

                                                            ? "bg-green-100 text-green-700"

                                                            : "bg-red-100 text-red-600"

                                                    }`}
                                                >

                                                    {turma.status}

                                                </span>

                                            </td>

                                            <td>

                                                <div className="flex justify-center gap-3">

                                                    <button

                                                        onClick={() => navigate(`/management/admin/class/${turma.id}`)}

                                                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer"

                                                    >

                                                        <Eye size={18} />

                                                    </button>

                                                    <button

                                                        onClick={() => editarTurma(turma)}

                                                        className="w-10 h-10 rounded-xl bg-blue-100 hover:bg-blue-200 text-blue-600 flex items-center justify-center cursor-pointer"

                                                    >

                                                        <Pencil size={18} />

                                                    </button>

                                                    <button

                                                        onClick={() => excluirTurma(turma.id)}

                                                        className="w-10 h-10 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center cursor-pointer"

                                                    >

                                                        <Trash2 size={18} />

                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    )

                                )

                            }

                        </tbody>

                    </table>

                </div>
                            </main>

            {
                modalTurma && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white w-[550px] rounded-3xl shadow-xl p-8">

                            <div className="flex items-center justify-between mb-8">

                                <h2 className="text-2xl font-bold">

                                    {editando ? "Editar Turma" : "Nova Turma"}

                                </h2>

                                <button
                                    onClick={() => setModalTurma(false)}
                                    className="cursor-pointer"
                                >

                                    <X size={22} />

                                </button>

                            </div>

                            <div className="flex flex-col gap-5">

                                <div>

                                    <label className="text-sm text-gray-500">

                                        Nome da Turma

                                    </label>

                                    <input

                                        type="text"

                                        value={novaTurma.nome}

                                        onChange={(e) =>
                                            setNovaTurma({
                                                ...novaTurma,
                                                nome: e.target.value
                                            })
                                        }

                                        className="w-full h-12 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-[#007BC0]"

                                    />

                                </div>

                                    <div>

                                        <label className="text-sm text-gray-500">

                                            Professor Responsável

                                        </label>

                                        <select

                                            value={novaTurma.professorId}

                                            onChange={(e) => {

                                                const usuarioSelecionado = usuarios.find(
                                                    usuario => usuario.id === Number(e.target.value)
                                                );

                                                setNovaTurma({

                                                    ...novaTurma,

                                                    professorId: usuarioSelecionado.id,

                                                    professor: usuarioSelecionado.nome

                                                });

                                            }}

                                            className="w-full h-12 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-[#007BC0]"

                                        >

                                            <option value="">

                                                Selecione um professor

                                            </option>


                                            {
                                                usuarios

                                                    .filter(
                                                        usuario => usuario.perfil === "Professor"
                                                    )

                                                    .map(usuario => (

                                                        <option

                                                            key={usuario.id}

                                                            value={usuario.id}

                                                        >

                                                            {usuario.nome}

                                                        </option>

                                                    ))

                                            }

                                        </select>

                                    </div>

                                <div>

                                    <label className="text-sm text-gray-500">

                                        Status

                                    </label>

                                    <select

                                        value={novaTurma.status}

                                        onChange={(e) =>
                                            setNovaTurma({
                                                ...novaTurma,
                                                status: e.target.value
                                            })
                                        }

                                        className="w-full h-12 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-[#007BC0]"

                                    >

                                        <option value="Ativa">

                                            Ativa

                                        </option>

                                        <option value="Inativa">

                                            Inativa

                                        </option>

                                    </select>

                                </div>

                            </div>

                            <div className="flex justify-end gap-4 mt-10">

                                <button

                                    onClick={() => setModalTurma(false)}

                                    className="px-6 h-11 rounded-xl border border-gray-300 hover:bg-gray-100 transition cursor-pointer"

                                >

                                    Cancelar

                                </button>

                                <button

                                    onClick={salvarTurma}

                                    className="px-6 h-11 rounded-xl bg-[#007BC0] hover:bg-[#0067a3] text-white transition cursor-pointer"

                                >

                                    {editando ? "Salvar Alterações" : "Criar Turma"}

                                </button>

                            </div>

                        </div>

                    </div>

                )

            }

        </div>

    );

};