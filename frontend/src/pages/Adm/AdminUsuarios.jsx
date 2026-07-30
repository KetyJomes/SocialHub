import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/SidebarAdmin";
import api from "../../services/apiService";
import Swal from 'sweetalert2'

// import { GetUers } from "../../services/userService";

import { Users, Search, Pencil, ShieldCheck, X } from "lucide-react";

export const AdminUsuarios = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [pesquisa, setPesquisa] = useState("");

    const [modalAcesso, setModalAcesso] = useState(false);

    const [usuarioEditando, setUsuarioEditando] = useState(null);

    const [usuarios, setUsuarios] = useState([]);

    const [role, setRole] = useState("");

    const fetchAlunos = async () => {
        const response = await api.get("/user/findAll");

        setUsuarios(response.data);
    };

    useEffect(() => {
        fetchAlunos();
    }, []);

    console.log(usuarios.name);

    const usuariosFiltrados = usuarios.filter((usuario) =>
        usuario.name

            .toLowerCase()

            .includes(pesquisa.toLowerCase())
    );

    const editarAcesso = (usuario) => {
        setUsuarioEditando(usuario);

        setModalAcesso(true);
    };

    const salvarAcesso = async () => {
        try {
            console.log(usuarioEditando.id)
            const response = await api.patch(`/user/updateRole/${usuarioEditando.id}`, {
                role: usuarioEditando.role
            });

            console.log(response)

            // Atualiza a lista local
            setUsuarios(
                usuarios.map((usuario) =>
                    usuario.id === usuarioEditando.id
                        ? usuarioEditando
                        : usuario
                )
            );

            setModalAcesso(false);
            setUsuarioEditando(null);

            Swal.fire({
                icon: "success",
                title: "Acesso atualizado!"
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Não foi possível atualizar o acesso."
            });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header setIsOpen={setIsOpen} isOpen={isOpen} />

            <SidebarAdmin isOpen={isOpen} setIsOpen={setIsOpen} />

            <main className="pt-[12vh] px-10 pb-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">
                            Gerenciar Acessos
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Controle as permissões dos usuários do sistema.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-10">
                    <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                            <Users className="text-[#007BC0]" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold">{usuarios.length}</h2>

                            <p className="text-gray-500">Usuários</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                            <ShieldCheck className="text-green-600" />
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm p-8">
                        <h2 className="text-2xl font-bold">Perfis</h2>

                        <div className="mt-4 flex flex-col gap-2 text-gray-500">
                            <span>• Gestor</span>

                            <span>• Líder de turma</span>

                            <span>• Usuário padrão</span>
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
                                placeholder="Pesquisar usuário..."
                                value={pesquisa}
                                onChange={(e) => setPesquisa(e.target.value)}
                                className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#007BC0]"
                            />
                        </div>
                    </div>

                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200 text-gray-600">
                                <th className="text-left py-4">Usuário</th>

                                <th className="text-center">Email</th>

                                <th className="text-center">Acesso</th>

                                <th className="text-center">Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {usuariosFiltrados.map((usuario) => (
                                <tr
                                    key={usuario.id}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                                >
                                    <td className="py-5 font-medium">{usuario.name}</td>

                                    <td className="text-center">{usuario.EDV}</td>

                                    <td className="text-center">
                                        <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">
                                            {usuario.role}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => editarAcesso(usuario)}
                                                className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 cursor-pointer"
                                            >
                                                <Pencil size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {modalAcesso && usuarioEditando && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-[500px] rounded-3xl shadow-xl p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">Editar Acesso</h2>

                            <button
                                onClick={() => {
                                    setModalAcesso(false);

                                    setUsuarioEditando(null);
                                }}
                                className="cursor-pointer"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <label className="text-sm text-gray-500">Usuário</label>

                                <input
                                    type="text"
                                    value={usuarioEditando.name}
                                    disabled
                                    className="w-full h-12 border border-gray-200 bg-gray-100 rounded-xl px-4 mt-2 text-gray-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-500">EDV</label>

                                <input
                                    type="text"
                                    value={usuarioEditando.EDV}
                                    disabled
                                    className="w-full h-12 border border-gray-200 bg-gray-100 rounded-xl px-4 mt-2 text-gray-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">
                                    Perfil de acesso
                                </label>

                                <select
                                    value={usuarioEditando.role}
                                    className="w-full h-12 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-[#007BC0]"
                                    onChange={(e) =>
                                        setUsuarioEditando({
                                            ...usuarioEditando,
                                            role: e.target.value
                                        })
                                    }
                                >
                                    <option value="Manager">Manager</option>
                                    <option value="Leader">Leader</option>
                                    <option value="Student">Student</option>
                                    <option value="ADM">ADM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-10">
                            <button
                                onClick={() => {
                                    setModalAcesso(false);

                                    setUsuarioEditando(null);
                                }}
                                className="px-6 h-11 rounded-xl border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={salvarAcesso}
                                className="px-6 h-11 rounded-xl bg-[#007BC0] hover:bg-[#0067a3] text-white transition cursor-pointer"
                            >
                                Salvar alterações
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
