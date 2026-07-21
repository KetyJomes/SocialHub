import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    ArrowLeft,
    Users,
    UserPlus,
    Search,
    Trash2,
    X
} from "lucide-react";


import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/SidebarAdmin";


export const AdminTurmaDetalhes = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { id } = useParams();

    const navigate = useNavigate();



    const turma = {

        id: id,

        nome: "1º EM A",

        professor: "Maria Souza"

    };



    const [modalAluno, setModalAluno] = useState(false);


    const [pesquisa, setPesquisa] = useState("");




    const [alunos, setAlunos] = useState([


        {
            id: 1,

            nome: "João Silva",

            email: "joao@email.com"
        },


        {
            id: 2,

            nome: "Pedro Lima",

            email: "pedro@email.com"
        },


        {
            id: 3,

            nome: "Ana Costa",

            email: "ana@email.com"
        }


    ]);





    const [alunosDisponiveis, setAlunosDisponiveis] = useState([


        {
            id: 4,

            nome: "Carlos Oliveira",

            email: "carlos@email.com"
        },


        {
            id: 5,

            nome: "Julia Martins",

            email: "julia@email.com"
        },


        {
            id: 6,

            nome: "Lucas Santos",

            email: "lucas@email.com"
        }


    ]);







    const adicionarAluno = (aluno) => {


        setAlunos([

            ...alunos,

            aluno

        ]);



        setAlunosDisponiveis(

            alunosDisponiveis.filter(

                item => item.id !== aluno.id

            )

        );


    };







    const removerAluno = (id) => {


        const alunoRemovido = alunos.find(

            aluno => aluno.id === id

        );



        setAlunos(

            alunos.filter(

                aluno => aluno.id !== id

            )

        );



        setAlunosDisponiveis([

            ...alunosDisponiveis,

            alunoRemovido

        ]);


    };







    const alunosFiltrados = alunos.filter(


        aluno =>

            aluno.nome

            .toLowerCase()

            .includes(

                pesquisa.toLowerCase()

            )


    );




    return (

        <div className="min-h-screen bg-[#F7F8FC]">


            <SidebarAdmin 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />





            <main className="pt-[12vh] px-10 pb-10 ml-[18rem]">
                                <div className="flex items-center justify-between">


                    <div className="flex items-center gap-5">


                        <button

                            onClick={() => navigate(-1)}

                            className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center hover:bg-gray-100 cursor-pointer"

                        >


                            <ArrowLeft size={22}/>


                        </button>





                        <div>


                            <h1 className="text-4xl font-bold text-gray-800">


                                {turma.nome}


                            </h1>



                            <p className="text-gray-500 mt-2">


                                Gerenciamento de alunos da turma


                            </p>


                        </div>



                    </div>


                </div>







                <div className="grid grid-cols-3 gap-6 mt-10">



                    <div className="bg-white rounded-3xl shadow-sm p-8">


                        <div className="flex items-center gap-4">


                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">


                                <Users className="text-[#007BC0]" />


                            </div>




                            <div>


                                <h2 className="text-3xl font-bold">


                                    {alunos.length}


                                </h2>



                                <p className="text-gray-500">


                                    Alunos


                                </p>


                            </div>



                        </div>


                    </div>







                    <div className="bg-white rounded-3xl shadow-sm p-8">


                        <p className="text-gray-500">


                            Professor responsável


                        </p>



                        <h2 className="text-xl font-bold mt-3">


                            {turma.professor}


                        </h2>


                    </div>







                    <div className="bg-white rounded-3xl shadow-sm p-8 flex items-center justify-center">


                        <button


                            onClick={() => setModalAluno(true)}


                            className="bg-[#007BC0] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#0067a3] cursor-pointer"


                        >


                            <UserPlus size={20}/>


                            Adicionar aluno


                        </button>


                    </div>



                </div>







                <div className="bg-white rounded-3xl shadow-sm mt-10 p-8">



                    <div className="flex justify-between items-center mb-8">



                        <h2 className="text-2xl font-bold">


                            Alunos da turma


                        </h2>





                        <div className="relative w-[350px]">


                            <Search

                                size={20}

                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"

                            />



                            <input


                                type="text"


                                placeholder="Pesquisar aluno..."


                                value={pesquisa}


                                onChange={(e) => setPesquisa(e.target.value)}


                                className="w-full h-12 border border-gray-200 rounded-xl pl-12 pr-4 outline-none focus:border-[#007BC0]"


                            />


                        </div>


                    </div>








                    <table className="w-full">



                        <thead>


                            <tr className="border-b border-gray-200 text-gray-600">



                                <th className="text-left py-4">


                                    Nome


                                </th>




                                <th className="text-center">


                                    Email


                                </th>




                                <th className="text-center">


                                    Ações


                                </th>



                            </tr>


                        </thead>







                        <tbody>


                            {


                                alunosFiltrados.map(


                                    aluno => (


                                        <tr


                                            key={aluno.id}


                                            className="border-b border-gray-100 hover:bg-gray-50 transition"


                                        >



                                            <td className="py-5 font-medium">


                                                {aluno.nome}


                                            </td>





                                            <td className="text-center">


                                                {aluno.email}


                                            </td>





                                            <td>


                                                <div className="flex justify-center">


                                                    <button


                                                        onClick={() => removerAluno(aluno.id)}


                                                        className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 cursor-pointer"


                                                    >


                                                        <Trash2 size={18}/>


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
                modalAluno && (


                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">


                        <div className="bg-white w-[600px] rounded-3xl shadow-xl p-8">



                            <div className="flex items-center justify-between mb-8">


                                <h2 className="text-2xl font-bold">


                                    Adicionar aluno


                                </h2>



                                <button


                                    onClick={() => setModalAluno(false)}


                                    className="cursor-pointer"


                                >


                                    <X size={22}/>


                                </button>


                            </div>







                            <p className="text-gray-500 mb-5">


                                Selecione um aluno cadastrado para adicionar na turma.


                            </p>







                            <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto">



                                {


                                    alunosDisponiveis.length > 0 ?


                                    alunosDisponiveis.map(


                                        aluno => (


                                            <div


                                                key={aluno.id}


                                                className="flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:bg-gray-50"


                                            >



                                                <div>


                                                    <h3 className="font-medium">


                                                        {aluno.nome}


                                                    </h3>



                                                    <p className="text-sm text-gray-500">


                                                        {aluno.email}


                                                    </p>


                                                </div>







                                                <button


                                                    onClick={() => adicionarAluno(aluno)}


                                                    className="bg-[#007BC0] text-white px-4 py-2 rounded-xl hover:bg-[#0067a3] cursor-pointer"


                                                >


                                                    Adicionar


                                                </button>



                                            </div>


                                        )


                                    )

                                    :



                                    <p className="text-center text-gray-500 py-10">


                                        Não existem alunos disponíveis.


                                    </p>


                                }



                            </div>







                            <div className="flex justify-end mt-8">


                                <button


                                    onClick={() => setModalAluno(false)}


                                    className="px-6 h-11 rounded-xl border border-gray-300 hover:bg-gray-100 cursor-pointer"


                                >


                                    Fechar


                                </button>


                            </div>





                        </div>


                    </div>



                )

            }





        </div>


    );


};