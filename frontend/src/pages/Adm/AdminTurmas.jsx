import { useState } from "react";

import {
    Users,
    Search,
    Eye,
    Archive,
    ArchiveRestore,
    Trash2,
    UserPlus,
    X
} from "lucide-react";


import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/SidebarAdmin";



export const AdminTurmas = () => {


    const [isOpen, setIsOpen] = useState(false);

    const [pesquisa, setPesquisa] = useState("");

    const [pesquisaAluno, setPesquisaAluno] = useState("");

    const [filtroStatus, setFiltroStatus] = useState("Todas");

    const [modalAlunos, setModalAlunos] = useState(false);

    const [modalAdicionar, setModalAdicionar] = useState(false);

    const [turmaSelecionada, setTurmaSelecionada] = useState(null);

    const [modalTurma, setModalTurma] = useState(false);

    const [editando, setEditando] = useState(false);


    const [novaTurma, setNovaTurma] = useState({

        nome: "",

        professorId: "",

        lider: "",

        status: "Ativa"

    });

    const abrirNovaTurma = () => {

        setEditando(false);

        setNovaTurma({

            nome: "",

            professorId: "",

            lider: "",

            status: "Ativa"

    });

        setModalTurma(true);

};


    const professores = [

        {
            id:1,
            nome:"Maria Souza"
        },

        {
            id:2,
            nome:"Carlos Oliveira"
        },

        {
            id:3,
            nome:"Juliana Berger"
        }

    ];

    const [turmas, setTurmas] = useState([


        {
            id: 1,

            nome: "1º EM A",

            lider: "Maria Souza",

            alunos: [

                {
                    id:1,
                    nome:"João Silva",
                    email:"joao@email.com"
                },


                {
                    id:2,
                    nome:"Ana Costa",
                    email:"ana@email.com"
                }

            ],

            status:"Ativa"

        },



        {
            id:2,

            nome:"1º EM B",

            lider:"Carlos Oliveira",

            alunos:[

                {
                    id:3,
                    nome:"Pedro Lima",
                    email:"pedro@email.com"
                }

            ],

            status:"Ativa"

        },



        {
            id:3,

            nome:"2º EM A",

            lider:"Juliana Berger",

            alunos:[],

            status:"Arquivada"

        }


    ]);







    const [alunosDisponiveis, setAlunosDisponiveis] = useState([


        {
            id:10,
            nome:"Lucas Santos",
            email:"lucas@email.com"
        },


        {
            id:11,
            nome:"Mariana Alves",
            email:"mariana@email.com"
        },


        {
            id:12,
            nome:"Rafael Souza",
            email:"rafael@email.com"
        }


    ]);







    const turmasFiltradas = turmas.filter(


        turma => {


            const nomeEncontrado = turma.nome
                .toLowerCase()
                .includes(
                    pesquisa.toLowerCase()
                );



            const statusSelecionado =


                filtroStatus === "Todas"

                ||

                turma.status === filtroStatus;



            return nomeEncontrado && statusSelecionado;


        }


    );







    const alterarStatusTurma = (id) => {


        setTurmas(


            turmas.map(


                turma =>


                    turma.id === id


                    ?


                    {


                        ...turma,


                        status:


                            turma.status === "Ativa"

                            ?

                            "Arquivada"

                            :

                            "Ativa"


                    }


                    :


                    turma



            )


        );


    };








    const abrirAlunos = (turma) => {


        setTurmaSelecionada(turma);


        setModalAlunos(true);


    };







    const adicionarAluno = (aluno) => {


        setTurmas(


            turmas.map(


                turma =>


                    turma.id === turmaSelecionada.id


                    ?


                    {


                        ...turma,


                        alunos:[

                            ...turma.alunos,

                            aluno

                        ]


                    }


                    :


                    turma


            )


        );




        setAlunosDisponiveis(


            alunosDisponiveis.filter(


                item => item.id !== aluno.id


            )


        );




        setTurmaSelecionada({


            ...turmaSelecionada,


            alunos:[

                ...turmaSelecionada.alunos,

                aluno

            ]


        });



    };







    const removerAluno = (alunoId) => {


        const alunoRemovido = turmaSelecionada.alunos.find(


            aluno => aluno.id === alunoId


        );




        setTurmas(


            turmas.map(


                turma =>


                    turma.id === turmaSelecionada.id


                    ?


                    {


                        ...turma,


                        alunos:


                            turma.alunos.filter(


                                aluno => aluno.id !== alunoId


                            )


                    }


                    :


                    turma



            )


        );





        setTurmaSelecionada({


            ...turmaSelecionada,


            alunos:


                turmaSelecionada.alunos.filter(


                    aluno => aluno.id !== alunoId


                )


        });





        setAlunosDisponiveis([


            ...alunosDisponiveis,


            alunoRemovido


        ]);



    };








    const excluirTurma = (id) => {


        setTurmas(


            turmas.filter(


                turma => turma.id !== id


            )


        );


    };








    const alunosDisponiveisFiltrados = alunosDisponiveis.filter(


        aluno =>


            aluno.nome

            .toLowerCase()

            .includes(

                pesquisaAluno.toLowerCase()

            )


            ||


            aluno.email

            .toLowerCase()

            .includes(

                pesquisaAluno.toLowerCase()

            )


    );
    return (

    <div className="min-h-screen bg-[#F7F8FC]">


        <Header

            isOpen={isOpen}

            setIsOpen={setIsOpen}

        />


        <SidebarAdmin

            isOpen={isOpen}

            setIsOpen={setIsOpen}

        />



        <main className="pt-[12vh] px-10 pb-10">



            <div className="flex justify-between items-center">


                <div>


                    <h1 className="text-4xl font-bold text-gray-800">

                        Gerenciar Turmas

                    </h1>



                    <p className="text-gray-500 mt-2">

                        Controle as turmas e alunos cadastrados.

                    </p>


                </div>




                <button

                    onClick={abrirNovaTurma}

                    className="
                        bg-[#007BC0]
                        text-white
                        px-6
                        py-3
                        cursor-pointer
                    "

                >

                    + Nova turma

                </button>



            </div>







            <div className="grid grid-cols-3 gap-6 mt-10">



                <div className="
                    bg-white
                    shadow-sm
                    p-8
                    flex
                    items-center
                    gap-5
                ">


                    <div className="
                        w-16
                        h-16
                        bg-blue-100
                        flex
                        items-center
                        justify-center
                    ">


                        <Users className="text-[#007BC0]" />


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







                <div className="
                    bg-white
                    shadow-sm
                    p-8
                ">


                    <h2 className="text-3xl font-bold">

                        {
                            turmas.reduce(

                                (total,turma)=>

                                    total + turma.alunos.length,

                                0

                            )
                        }

                    </h2>


                    <p className="text-gray-500">

                        Alunos vinculados

                    </p>


                </div>








                <div className="
                    bg-white
                    shadow-sm
                    p-8
                ">


                    <h2 className="text-3xl font-bold">


                        {
                            turmas.filter(

                                turma => turma.status==="Ativa"

                            ).length

                        }


                    </h2>



                    <p className="text-gray-500">

                        Turmas ativas

                    </p>


                </div>



            </div>








            <div className="
                bg-white 
                shadow-sm
                mt-10
                p-8
            ">





                <div className="
                    flex
                    justify-between
                    items-center
                    mb-8
                ">




                    <div className="relative w-[420px]">


                        <Search

                            size={20}

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


                            placeholder="Pesquisar turma..."


                            value={pesquisa}


                            onChange={(e)=>setPesquisa(e.target.value)}



                            className="
                                w-full
                                h-12
                                border
                                rounded-xl
                                pl-12
                                pr-4
                                outline-none
                            "


                        />


                    </div>







                    <div className="flex gap-3">


                        <button

                            onClick={()=>setFiltroStatus("Todas")}

                            className={`

                                px-5
                                py-2
                                rounded-xl
                                cursor-pointer

                                ${
                                    filtroStatus==="Todas"

                                    ?

                                    "bg-[#007BC0] text-white"

                                    :

                                    "bg-gray-100"

                                }

                            `}

                        >

                            Todas

                        </button>





                        <button

                            onClick={()=>setFiltroStatus("Ativa")}

                            className={`

                                px-5
                                py-2
                                rounded-xl
                                cursor-pointer

                                ${
                                    filtroStatus==="Ativa"

                                    ?

                                    "bg-green-500 text-white"

                                    :

                                    "bg-gray-100"

                                }

                            `}

                        >

                            Ativas

                        </button>






                        <button

                            onClick={()=>setFiltroStatus("Arquivada")}

                            className={`

                                px-5
                                py-2
                                rounded-xl
                                cursor-pointer

                                ${
                                    filtroStatus==="Arquivada"

                                    ?

                                    "bg-gray-700 text-white"

                                    :

                                    "bg-gray-100"

                                }

                            `}

                        >

                            Arquivadas

                        </button>



                    </div>




                </div>





                <table className="w-full">
                    <thead>
                        <tr className="
                            border-b
                            border-gray-200
                            text-gray-600
                        ">
                            <th className="text-center py-4">
                                Turma
                            </th>

                            <th className="text-center">
                                Líder
                            </th>

                            <th className="text-center">
                                Alunos
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
                        {turmasFiltradas.map(turma => (
                            <tr
                                key={turma.id}
                                className="
                                    border-b
                                    border-gray-100
                                    hover:bg-gray-50
                                "
                            >
                                <td className="py-5 text-center font-medium">
                                    {turma.nome}
                                </td>

                                <td className="text-center">
                                    {turma.lider}
                                </td>

                                <td className="text-center">
                                    {turma.alunos.length}
                                </td>

                                <td className="text-center">
                                    <span className={`...`}>
                                        {turma.status}
                                    </span>
                                </td>

                                <td className="text-center">
                                    <div className="
                                        flex
                                        justify-center
                                        gap-3
                                    ">
                                        ...
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>




            </div>




        </main>
                {
            modalAlunos && turmaSelecionada && (


                <div className="
                    fixed
                    inset-0
                    bg-black/40
                    flex
                    items-center
                    justify-center
                    z-50
                ">


                    <div className="
                        bg-white
                        w-[950px]
                        h-[700px]
                        rounded-3xl
                        shadow-xl
                        p-8
                        flex
                        flex-col
                    ">



                        <div className="
                            flex
                            justify-between
                            items-center
                            mb-8
                        ">


                            <div>

                                <h2 className="text-2xl font-bold">

                                    {turmaSelecionada.nome}

                                </h2>


                                <p className="text-gray-500">

                                    Líder: {turmaSelecionada.lider}

                                </p>

                            </div>



                            <button

                                onClick={() => setModalAlunos(false)}

                                className="cursor-pointer"

                            >

                                <X/>

                            </button>


                        </div>







                        <div className="
                            flex
                            justify-between
                            mb-5
                        ">


                            <h3 className="text-lg font-bold">

                                Alunos

                            </h3>



                            <button

                                onClick={() => setModalAdicionar(true)}

                                className="
                                    bg-[#007BC0]
                                    text-white
                                    px-4
                                    py-2
                                    rounded-xl
                                    flex
                                    gap-2
                                    items-center
                                    cursor-pointer
                                "

                            >

                                <UserPlus size={18}/>

                                Adicionar


                            </button>


                        </div>








                        <div className="
                            flex-1
                            overflow-y-auto
                            flex
                            flex-col
                            gap-3
                        ">



                            {

                                turmaSelecionada.alunos.length > 0

                                ?

                                turmaSelecionada.alunos.map(

                                    aluno => (


                                        <div

                                            key={aluno.id}

                                            className="
                                                border
                                                rounded-xl
                                                p-4
                                                flex
                                                justify-between
                                            "

                                        >


                                            <div>

                                                <p className="font-medium">

                                                    {aluno.nome}

                                                </p>


                                                <p className="text-sm text-gray-500">

                                                    {aluno.email}

                                                </p>


                                            </div>




                                            <button

                                                onClick={() => removerAluno(aluno.id)}

                                                className="
                                                    text-red-600
                                                    cursor-pointer
                                                "

                                            >

                                                Remover

                                            </button>


                                        </div>


                                    )

                                )


                                :


                                <div className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    h-full
                                    text-gray-500
                                ">


                                    <Users size={45}/>


                                    <p className="font-medium mt-4">

                                        Nenhum aluno cadastrado

                                    </p>


                                    <span className="text-sm">

                                        Adicione alunos para vincular a esta turma.

                                    </span>


                                </div>


                            }



                        </div>


                    </div>


                </div>


            )

        }









        {
            modalAdicionar && (


                <div className="
                    fixed
                    inset-0
                    bg-black/40
                    flex
                    items-center
                    justify-center
                    z-[60]
                ">


                    <div className="
                        bg-white
                        w-[600px]
                        h-[650px]
                        rounded-3xl
                        shadow-xl
                        p-8
                        flex
                        flex-col
                    ">



                        <div className="
                            flex
                            justify-between
                            mb-6
                        ">


                            <h2 className="text-2xl font-bold">

                                Adicionar aluno

                            </h2>



                            <button

                                onClick={() => setModalAdicionar(false)}

                                className="cursor-pointer"

                            >

                                <X/>

                            </button>


                        </div>








                        <div className="relative mb-5">


                            <Search

                                size={20}

                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                "

                            />



                            <input


                                value={pesquisaAluno}


                                onChange={(e)=>setPesquisaAluno(e.target.value)}


                                placeholder="Pesquisar usuário..."


                                className="
                                    w-full
                                    h-12
                                    border
                                    rounded-xl
                                    pl-12
                                "


                            />


                        </div>









                        <div className="
                            flex-1
                            overflow-y-auto
                            flex
                            flex-col
                            gap-3
                        ">



                            {


                                alunosDisponiveisFiltrados.length > 0


                                ?


                                alunosDisponiveisFiltrados.map(


                                    aluno => (


                                        <div

                                            key={aluno.id}

                                            className="
                                                border
                                                rounded-xl
                                                p-4
                                                flex
                                                justify-between
                                            "

                                        >



                                            <div>


                                                <p className="font-medium">

                                                    {aluno.nome}

                                                </p>



                                                <p className="text-sm text-gray-500">

                                                    {aluno.email}

                                                </p>


                                            </div>





                                            <button

                                                onClick={() => adicionarAluno(aluno)}

                                                className="
                                                    bg-[#007BC0]
                                                    text-white
                                                    px-4
                                                    py-2
                                                    rounded-xl
                                                    cursor-pointer
                                                "

                                            >

                                                Adicionar


                                            </button>


                                        </div>


                                    )


                                )


                                :


                                <div className="
                                    h-full
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    text-gray-500
                                ">


                                    <Users size={45}/>



                                    <p className="font-medium mt-3">

                                        Nenhum usuário disponível

                                    </p>



                                    <span className="text-sm text-center">

                                        Todos os usuários já estão vinculados
                                        ou não existem usuários disponíveis.

                                    </span>


                                </div>


                            }



                        </div>



                    </div>


                </div>


            )

        }


    </div>


);


};