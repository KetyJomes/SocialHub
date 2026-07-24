import { useState } from "react";
import Swal from "sweetalert2";

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
const confirmarAlteracaoStatus = (turma) => {

    const vaiArquivar = turma.status === "Ativa";


    Swal.fire({

        title: "Tem certeza?",

        text: vaiArquivar
            ? `Deseja arquivar a turma ${turma.nome}?`
            : `Deseja desarquivar a turma ${turma.nome}?`,

        icon: "warning",

        showCancelButton: true,

        confirmButtonText: vaiArquivar
            ? "Sim, arquivar"
            : "Sim, desarquivar",

        cancelButtonText: "Cancelar",

        confirmButtonColor: vaiArquivar
            ? "#6B7280"
            : "#009C5D",

        cancelButtonColor: "#9CA3AF"

    }).then((result) => {


        if(result.isConfirmed){


            alterarStatusTurma(turma.id);



            Swal.fire({

                title: vaiArquivar
                    ? "Turma arquivada!"
                    : "Turma desarquivada!",

                text: `${turma.nome} foi ${
                    vaiArquivar
                    ? "arquivada"
                    : "desarquivada"
                } com sucesso.`,

                icon: "success",

                confirmButtonColor:"#007BC0"

            });


        }


    });

};

const confirmarExcluir = (turma) => {

    Swal.fire({

        title: "Tem certeza?",

        text: `Deseja excluir a turma ${turma.nome}? Essa ação não pode ser desfeita.`,

        icon: "warning",

        showCancelButton: true,

        confirmButtonText: "Sim, excluir",

        cancelButtonText: "Cancelar",

        confirmButtonColor: "#DC2626",

        cancelButtonColor: "#9CA3AF"

    }).then((result) => {


        if(result.isConfirmed){

            excluirTurma(turma.id);


            Swal.fire({

                title: "Turma excluída!",

                text: `${turma.nome} foi removida.`,

                icon: "success",

                confirmButtonColor:"#007BC0"

            });

        }


    });

};


    const [isOpen, setIsOpen] = useState(false);

    const [pesquisa, setPesquisa] = useState("");

    const [pesquisaAluno, setPesquisaAluno] = useState("");

    const [filtroStatus, setFiltroStatus] = useState("Todas");


    const [modalAlunos, setModalAlunos] = useState(false);
    
    const [modalAdicionar, setModalAdicionar] = useState(false);

    const [modalTurma, setModalTurma] = useState(false);


    const [turmaSelecionada, setTurmaSelecionada] = useState(null);


    const [editando, setEditando] = useState(false);

    const abrirAdicionarAluno = () => {

        setPesquisaAluno("");

        setModalAdicionar(true);

    };



    const [novaTurma, setNovaTurma] = useState({

        nome: "",

        professorId: "",

        lider: "",

        turno: "",

        status: "Ativa"

    });






    const abrirNovaTurma = () => {


        setEditando(false);


        setNovaTurma({

            nome: "",

            professorId: "",

            lider: "",

            turno: "",

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

        },



        {

            id:13,

            nome:"Rafael Souza",

            email:"rafael@email.com"

        }



    ]);









    const criarTurma = () => {


        const nova = {


            id: turmas.length + 1,


            nome: novaTurma.nome,


            lider: novaTurma.lider,


            alunos: [],


            status: novaTurma.status,

            turno: novaTurma.turno 


        };



        setTurmas([

            ...turmas,

            nova

        ]);



        setModalTurma(false);



        setNovaTurma({

            nome:"",

            professorId:"",

            lider:"",

            turno:"",

            status:"Ativa"

        });


    };









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

        setPesquisaAluno("");

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



    const alunosTurmaFiltrados = turmaSelecionada
    ? turmaSelecionada.alunos.filter(
        aluno =>
            aluno.nome
                .toLowerCase()
                .includes(pesquisaAluno.toLowerCase())
            ||
            aluno.email
                .toLowerCase()
                .includes(pesquisaAluno.toLowerCase())
    )
    : [];





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
                        rounded-xl
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

                            className={`px-5 py-2 rounded-xl cursor-pointer ${
                                filtroStatus==="Todas"
                                ? "bg-[#007BC0] text-white"
                                : "bg-gray-100"
                            }`}

                        >

                            Todas

                        </button>





                        <button

                            onClick={()=>setFiltroStatus("Ativa")}

                            className={`px-5 py-2 rounded-xl cursor-pointer ${
                                filtroStatus==="Ativa"
                                ? "bg-green-500 text-white"
                                : "bg-gray-100"
                            }`}

                        >

                            Ativas

                        </button>






                        <button

                            onClick={()=>setFiltroStatus("Arquivada")}

                            className={`px-5 py-2 rounded-xl cursor-pointer ${
                                filtroStatus==="Arquivada"
                                ? "bg-gray-700 text-white"
                                : "bg-gray-100"
                            }`}

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
                                Turno
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


                        {
                            turmasFiltradas.map(turma => (


                                <tr

                                    key={turma.id}

                                    className="
                                        border-b
                                        border-gray-100
                                        hover:bg-gray-50
                                    "

                                >



                                    <td className="
                                        py-5
                                        text-center
                                        font-medium
                                    ">

                                        {turma.nome}

                                    </td>

                                    <td className="text-center">

                                        <span
                                            className="
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-[#EEF7FD]
                                                text-[#007BC0]
                                                text-sm
                                            "
                                        >

                                            {turma.turno || "Não definido"}

                                        </span>

                                    </td>




                                    <td className="text-center">

                                        {turma.lider}

                                    </td>




                                    <td className="text-center">


                                        {turma.alunos.length}


                                    </td>






                                    <td className="text-center">


                                        <span
                                            className={`
                                                px-3
                                                py-1
                                                rounded-full
                                                text-sm

                                                ${
                                                    turma.status === "Ativa"
                                                    ?
                                                    "bg-green-100 text-green-600"
                                                    :
                                                    "bg-gray-200 text-gray-600"
                                                }

                                            `}
                                        >

                                            {turma.status}

                                        </span>


                                    </td>






                                    <td className="text-center">


                                        <div className="
                                            flex
                                            justify-center
                                            gap-3
                                        ">



                                            <button

                                                onClick={() => abrirAlunos(turma)}

                                                className="
                                                    text-blue-600
                                                    cursor-pointer
                                                "

                                            >

                                                <Eye size={20}/>

                                            </button>






                                            <button

                                                onClick={() => confirmarAlteracaoStatus(turma)}

                                                className="
                                                    text-gray-600
                                                    cursor-pointer
                                                "

                                            >

                                                {
                                                    turma.status === "Ativa"

                                                    ?

                                                    <Archive size={20}/>

                                                    :

                                                    <ArchiveRestore size={20}/>

                                                }


                                            </button>







                                            <button

                                                onClick={() => confirmarExcluir(turma)}

                                                className="
                                                    text-red-600
                                                    cursor-pointer
                                                "

                                            >

                                                <Trash2 size={20}/>


                                            </button>





                                        </div>


                                    </td>




                                </tr>


                            ))

                        }



                    </tbody>


                </table>





            </div>





        </main>










        {/* MODAL NOVA TURMA */}


        {

            modalTurma && (


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
                        w-[600px]
                        rounded-3xl
                        shadow-xl
                        p-8
                    ">




                        <div className="
                            flex
                            justify-between
                            items-center
                            mb-8
                        ">


                            <div>


                                <h2 className="
                                    text-2xl
                                    font-bold
                                ">

                                    Nova turma

                                </h2>


                                <p className="
                                    text-gray-500
                                    mt-1
                                ">

                                    Cadastre uma nova turma.

                                </p>


                            </div>




                            <button

                                onClick={() => setModalTurma(false)}

                                className="cursor-pointer"

                            >

                                <X/>


                            </button>


                        </div>







                        <div className="flex flex-col gap-5">



                            <input

                                placeholder="Nome da turma"

                                value={novaTurma.nome}

                                onChange={(e)=>
                                    setNovaTurma({
                                        ...novaTurma,
                                        nome:e.target.value
                                    })
                                }

                                className="
                                    h-12
                                    border
                                    rounded-xl
                                    px-4
                                "

                            />

                            <select

    value={novaTurma.turno}

    onChange={(e)=>
        setNovaTurma({
            ...novaTurma,
            turno:e.target.value
        })
    }

    className="
        h-12
        border
        rounded-xl
        px-4
    "

>

    <option value="">

        Selecione o turno

    </option>


    <option value="Manhã">

        Manhã

    </option>


    <option value="Tarde">

        Tarde

    </option>


</select>






                            <select

                                value={novaTurma.professorId}

                                onChange={(e)=>
                                    setNovaTurma({
                                        ...novaTurma,
                                        professorId:e.target.value
                                    })
                                }


                                className="
                                    h-12
                                    border
                                    rounded-xl
                                    px-4
                                "

                            >


                                <option value="">

                                    Professor responsável

                                </option>


                                {
                                    professores.map(professor => (


                                        <option

                                            key={professor.id}

                                            value={professor.id}

                                        >

                                            {professor.nome}

                                        </option>


                                    ))
                                }



                            </select>







                            <select

                                value={novaTurma.lider}

                                onChange={(e)=>
                                    setNovaTurma({
                                        ...novaTurma,
                                        lider: e.target.value
                                    })
                                }

                                className="
                                    h-12
                                    border
                                    rounded-xl
                                    px-4
                                "

                            >

                                <option value="">

                                    Selecione o líder da turma

                                </option>

                                {
                                    alunosDisponiveis.map(aluno => (

                                        <option
                                            key={aluno.id}
                                            value={aluno.nome}
                                        >

                                            {aluno.nome}

                                        </option>

                                    ))
                                }

                            </select>






                            <select

                                value={novaTurma.status}

                                onChange={(e)=>
                                    setNovaTurma({
                                        ...novaTurma,
                                        status:e.target.value
                                    })
                                }


                                className="
                                    h-12
                                    border
                                    rounded-xl
                                    px-4
                                "

                            >

                                <option value="Ativa">

                                    Ativa

                                </option>


                                <option value="Arquivada">

                                    Arquivada

                                </option>


                            </select>



                        </div>








                        <div className="
                            flex
                            justify-end
                            gap-4
                            mt-8
                        ">



                            <button

                                onClick={() => setModalTurma(false)}

                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-gray-100
                                    cursor-pointer
                                "

                            >

                                Cancelar


                            </button>







                            <button

                                onClick={criarTurma}

                                className="
                                    px-6
                                    py-3
                                    rounded-xl
                                    bg-[#007BC0]
                                    text-white
                                    cursor-pointer
                                "

                            >

                                Criar turma


                            </button>





                        </div>






                    </div>



                </div>


            )

        }


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
                w-[900px]
                h-[750px]
                rounded-3xl
                shadow-xl
                overflow-hidden
                flex
                flex-col
            ">


                {/* CABEÇALHO */}

                <div className="
                    flex
                    justify-between
                    items-center
                    px-8
                    py-6
                    border-b
                ">

                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            text-gray-800
                        ">

                            {turmaSelecionada.nome}

                        </h2>


                        <p className="text-gray-500">

                            Gerenciamento da turma

                        </p>

                    </div>


                    <button

                        onClick={() => setModalAlunos(false)}

                        className="cursor-pointer"

                    >

                        <X size={24}/>

                    </button>


                </div>





                {/* INFORMAÇÕES */}

                <div className="
                    grid
                    grid-cols-3
                    gap-5
                    p-8
                ">


                    <div className="
                        bg-[#EEF7FD]
                        rounded-2xl
                        p-5
                    ">

                        <p className="text-sm text-gray-500">

                            Líder da turma

                        </p>


                        <h3 className="
                            font-bold
                            text-lg
                            mt-2
                        ">

                            {turmaSelecionada.lider}

                        </h3>


                    </div>





                    <div className="
                        bg-[#EEF8F1]
                        rounded-2xl
                        p-5
                    ">

                        <p className="text-sm text-gray-500">

                            Status

                        </p>


                        <h3 className="
                            font-bold
                            text-lg
                            mt-2
                        ">

                            {turmaSelecionada.status}

                        </h3>


                    </div>





                    <div className="
                        bg-[#F7F7F7]
                        rounded-2xl
                        p-5
                    ">

                        <p className="text-sm text-gray-500">

                            Total de alunos

                        </p>


                        <h3 className="
                            font-bold
                            text-lg
                            mt-2
                        ">

                            {turmaSelecionada.alunos.length}

                        </h3>


                    </div>


                </div>






                {/* TITULO + PESQUISA + BOTÃO */}

<div className="
    flex
    justify-between
    items-center
    px-8
    mb-5
    gap-5
">


    <h3 className="
        text-xl
        font-semibold
        whitespace-nowrap
    ">

        Alunos da turma

    </h3>




    <div className="
    relative
    w-[350px]
">


    <Search

        size={18}

        className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-400
        "

    />



    <input

        type="text"

        placeholder="Pesquisar aluno"

        value={pesquisaAluno}

        onChange={(e)=>setPesquisaAluno(e.target.value)}

        className="
            w-full
            h-11
            border
            rounded-xl
            pl-10
            pr-4
            outline-none
        "

    />


</div>






    <button

        onClick={abrirAdicionarAluno}

        className="
            bg-[#007BC0]
            text-white
            px-5
            py-3
            rounded-xl
            cursor-pointer
            flex
            items-center
            gap-2
            whitespace-nowrap
        "

    >

        <UserPlus size={18}/>

        Adicionar aluno


    </button>



</div>







                {/* LISTA DE ALUNOS */}

                <div className="
                    px-8
                    pb-8
                    flex-1
                    overflow-y-auto
                    min-h-0
                ">


                    {
                        turmaSelecionada.alunos.length === 0

                        ?

                        (

                            <div className="
                                h-[180px]
                                flex
                                items-center
                                justify-center
                                rounded-2xl
                                border-2
                                border-dashed
                                border-gray-300
                                text-gray-400
                            ">

                                Nenhum aluno cadastrado nesta turma.

                            </div>

                        )


                        :


                        (

                            <table className="w-full">


                                <thead>

                                    <tr className="border-b">


                                        <th className="
                                            text-left
                                            py-4
                                        ">

                                            Nome

                                        </th>



                                        <th className="text-left">

                                            Email

                                        </th>



                                        <th className="text-center">

                                            Ações

                                        </th>


                                    </tr>


                                </thead>






                                <tbody>


                                    {
                                        turmaSelecionada.alunos.map(aluno => (


                                            <tr

                                                key={aluno.id}

                                                className="
                                                    border-b
                                                    border-gray-100
                                                "

                                            >


                                                <td className="py-5">

                                                    {aluno.nome}

                                                </td>



                                                <td>

                                                    {aluno.email}

                                                </td>



                                                <td>


                                                    <div className="
                                                        flex
                                                        justify-center
                                                    ">


                                                        <button

                                                            onClick={() => removerAluno(aluno.id)}

                                                            className="
                                                                text-red-600
                                                                hover:text-red-700
                                                                cursor-pointer
                                                            "

                                                        >

                                                            <Trash2 size={20}/>


                                                        </button>


                                                    </div>


                                                </td>


                                            </tr>


                                        ))
                                    }


                                </tbody>


                            </table>

                        )

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
            bg-black/50
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


                {/* CABEÇALHO */}

                <div className="
                    flex
                    justify-between
                    items-center
                    mb-6
                ">


                    <div>

                        <h2 className="
                            text-2xl
                            font-bold
                            text-gray-800
                        ">

                            Adicionar alunos

                        </h2>


                        <p className="text-gray-500">

                            Selecione os alunos para adicionar à turma.

                        </p>


                    </div>



                    <button

                        onClick={() => setModalAdicionar(false)}

                        className="cursor-pointer"

                    >

                        <X />

                    </button>


                </div>





                {/* PESQUISA */}

                <div className="relative mb-6">


                    <Search

                        size={18}

                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "

                    />


                    <input

                        type="text"

                        placeholder="Pesquisar aluno"

                        value={pesquisaAluno}

                        onChange={(e)=>setPesquisaAluno(e.target.value)}

                        className="
                            w-full
                            h-12
                            border
                            rounded-xl
                            pl-10
                            pr-4
                            outline-none
                        "

                    />


                </div>





                {/* LISTA */}

                <div className="
                    flex-1
                    overflow-y-auto
                    border
                    rounded-2xl
                ">


                    {
                        alunosDisponiveisFiltrados.length === 0

                        ?

                        (

                            <div className="
                                p-8
                                text-center
                                text-gray-500
                            ">

                                Nenhum aluno disponível.

                            </div>

                        )


                        :


                        (

                            alunosDisponiveisFiltrados.map(aluno => (

                                <div

                                    key={aluno.id}

                                    className="
                                        flex
                                        justify-between
                                        items-center
                                        p-4
                                        border-b
                                        last:border-b-0
                                    "

                                >


                                    <div>

                                        <p className="
                                            font-medium
                                            text-gray-800
                                        ">

                                            {aluno.nome}

                                        </p>


                                        <p className="
                                            text-sm
                                            text-gray-500
                                        ">

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
                                            flex
                                            items-center
                                            gap-2
                                            cursor-pointer
                                        "

                                    >

                                        <UserPlus size={18}/>

                                        Adicionar

                                    </button>


                                </div>


                            ))

                        )

                    }


                </div>



            </div>


        </div>

    )
}
    </div>


);


};