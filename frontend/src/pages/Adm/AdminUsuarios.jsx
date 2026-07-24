import { useState } from "react";

import { GetUers } from "../../services/userService"; 

import {
    Users,
    Search,
    Pencil,
    ShieldCheck,
    X
} from "lucide-react";

import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/SidebarAdmin";


export const AdminUsuarios = () => {

    const [isOpen, setIsOpen] = useState(false);


    const [pesquisa, setPesquisa] = useState("");


    const [modalAcesso, setModalAcesso] = useState(false);


    const [usuarioEditando, setUsuarioEditando] = useState(null);




    const [usuarios, setUsuarios] = useState([


        {
            id: 1,

            nome: "João Silva",

            email: "joao@email.com",

            acesso: "Gestor",

            status: "Ativo"

        },


        {
            id: 2,

            nome: "Maria Souza",

            email: "maria@email.com",

            acesso: "Líder de turma",

            status: "Ativo"

        },


        {
            id: 3,

            nome: "Pedro Lima",

            email: "pedro@email.com",

            acesso: "Usuário padrão",

            status: "Ativo"

        },


        {
            id: 4,

            nome: "Ana Costa",

            email: "ana@email.com",

            acesso: "Líder de turma",

            status: "Inativo"

        }


    ]);





    const usuariosFiltrados = usuarios.filter(


        usuario =>


            usuario.nome

                .toLowerCase()

                .includes(

                    pesquisa.toLowerCase()

                )


            ||


            usuario.email

                .toLowerCase()

                .includes(

                    pesquisa.toLowerCase()

                )


    );






    const editarAcesso = (usuario) => {


        setUsuarioEditando(usuario);


        setModalAcesso(true);


    };







    const salvarAcesso = () => {


        setUsuarios(


            usuarios.map(


                usuario =>


                    usuario.id === usuarioEditando.id

                        ?

                    usuarioEditando

                        :

                    usuario


            )


        );


        setModalAcesso(false);


        setUsuarioEditando(null);


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


                            <h2 className="text-3xl font-bold">


                                {usuarios.length}


                            </h2>



                            <p className="text-gray-500">


                                Usuários


                            </p>


                        </div>


                    </div>





                    <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center gap-5">


                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">


                            <ShieldCheck className="text-green-600" />


                        </div>




                        <div>


                            <h2 className="text-3xl font-bold">


                                {
                                    usuarios.filter(

                                        usuario => usuario.status === "Ativo"

                                    ).length
                                }


                            </h2>




                            <p className="text-gray-500">


                                Acessos ativos


                            </p>



                        </div>


                    </div>





                    <div className="bg-white rounded-3xl shadow-sm p-8">


                        <h2 className="text-2xl font-bold">


                            Perfis


                        </h2>



                        <div className="mt-4 flex flex-col gap-2 text-gray-500">


                            <span>

                                • Gestor

                            </span>


                            <span>

                                • Líder de turma

                            </span>


                            <span>

                                • Usuário padrão

                            </span>


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


                                onChange={(e) =>

                                    setPesquisa(e.target.value)

                                }


                                className="w-full h-12 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#007BC0]"


                            />


                        </div>


                    </div>







                    <table className="w-full">



                        <thead>


                            <tr className="border-b border-gray-200 text-gray-600">



                                <th className="text-left py-4">

                                    Usuário

                                </th>



                                <th className="text-center">

                                    Email

                                </th>



                                <th className="text-center">

                                    Acesso

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

                                usuariosFiltrados.map(


                                    usuario => (


                                        <tr

                                            key={usuario.id}

                                            className="border-b border-gray-100 hover:bg-gray-50 transition"

                                        >



                                            <td className="py-5 font-medium">


                                                {usuario.nome}


                                            </td>





                                            <td className="text-center">


                                                {usuario.email}


                                            </td>





                                            <td className="text-center">


                                                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">


                                                    {usuario.acesso}


                                                </span>


                                            </td>





                                            <td className="text-center">


                                                <span


                                                    className={`px-4 py-2 rounded-full text-sm ${

                                                        usuario.status === "Ativo"

                                                            ?

                                                        "bg-green-100 text-green-700"

                                                            :

                                                        "bg-red-100 text-red-600"

                                                    }`}


                                                >


                                                    {usuario.status}


                                                </span>


                                            </td>





                                            <td>


                                                <div className="flex justify-center">


                                                    <button


                                                        onClick={() => editarAcesso(usuario)}


                                                        className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 cursor-pointer"


                                                    >


                                                        <Pencil size={18}/>


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
                modalAcesso && usuarioEditando && (


                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">


                        <div className="bg-white w-[500px] rounded-3xl shadow-xl p-8">



                            <div className="flex items-center justify-between mb-8">


                                <h2 className="text-2xl font-bold">


                                    Editar Acesso


                                </h2>



                                <button


                                    onClick={() => {

                                        setModalAcesso(false);

                                        setUsuarioEditando(null);

                                    }}


                                    className="cursor-pointer"


                                >


                                    <X size={22}/>


                                </button>


                            </div>







                            <div className="flex flex-col gap-5">





                                <div>


                                    <label className="text-sm text-gray-500">


                                        Usuário


                                    </label>



                                    <input


                                        type="text"


                                        value={usuarioEditando.nome}


                                        disabled


                                        className="w-full h-12 border border-gray-200 bg-gray-100 rounded-xl px-4 mt-2 text-gray-500"


                                    />


                                </div>







                                <div>


                                    <label className="text-sm text-gray-500">


                                        Email


                                    </label>



                                    <input


                                        type="text"


                                        value={usuarioEditando.email}


                                        disabled


                                        className="w-full h-12 border border-gray-200 bg-gray-100 rounded-xl px-4 mt-2 text-gray-500"


                                    />


                                </div>







                                <div>


                                    <label className="text-sm text-gray-500">


                                        Perfil de acesso


                                    </label>



                                    <select


                                        value={usuarioEditando.acesso}


                                        onChange={(e) =>


                                            setUsuarioEditando({

                                                ...usuarioEditando,

                                                acesso:e.target.value

                                            })


                                        }


                                        className="w-full h-12 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-[#007BC0]"


                                    >



                                        <option>


                                            Gestor


                                        </option>



                                        <option>


                                            Líder de turma


                                        </option>



                                        <option>


                                            Usuário padrão


                                        </option>



                                    </select>


                                </div>







                                <div>


                                    <label className="text-sm text-gray-500">


                                        Status


                                    </label>



                                    <select


                                        value={usuarioEditando.status}


                                        onChange={(e) =>


                                            setUsuarioEditando({

                                                ...usuarioEditando,

                                                status:e.target.value

                                            })


                                        }


                                        className="w-full h-12 border border-gray-200 rounded-xl px-4 mt-2 outline-none focus:border-[#007BC0]"


                                    >



                                        <option>


                                            Ativo


                                        </option>



                                        <option>


                                            Inativo


                                        </option>



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


                )

            }



        </div>


    );


};