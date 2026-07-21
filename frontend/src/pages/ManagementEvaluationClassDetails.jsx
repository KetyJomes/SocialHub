import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    GraduationCap,
    Info,
    CheckCircle,
    Clock,
    AlertCircle,
    Eye
} from "lucide-react";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";


export const ManagementEvaluationClassDetails = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const { turma } = useParams();



    const alunos = [

        {
            nome: "Ana Souza",
            status: "Finalizada",
            progresso: 100,
            nota: 98
        },

        {
            nome: "João Silva",
            status: "Em andamento",
            progresso: 60,
            nota: "-"
        },

        {
            nome: "Maria Oliveira",
            status: "Pendente",
            progresso: 0,
            nota: "-"
        },

        {
            nome: "Pedro Santos",
            status: "Finalizada",
            progresso: 100,
            nota: 82
        },

        {
            nome: "Lucas Mendes",
            status: "Em andamento",
            progresso: 40,
            nota: "-"
        }

    ];



    const statusClasses = {

        "Finalizada":
            "bg-green-100 text-green-700",

        "Em andamento":
            "bg-yellow-100 text-yellow-700",

        "Pendente":
            "bg-red-100 text-red-700"

    };



    const statusIcons = {

        "Finalizada":
            <CheckCircle size={16}/>,

        "Em andamento":
            <Clock size={16}/>,

        "Pendente":
            <AlertCircle size={16}/>

    };



    const finalizadas = alunos.filter(
        aluno => aluno.status === "Finalizada"
    ).length;


    const andamento = alunos.filter(
        aluno => aluno.status === "Em andamento"
    ).length;


    const pendentes = alunos.filter(
        aluno => aluno.status === "Pendente"
    ).length;



    const progressoGeral = Math.round(
        (finalizadas / alunos.length) * 100
    );



    return (

        <>


            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />



            {
                isOpen && (

                    <div
                        className="
                            fixed
                            inset-0
                            bg-black/20
                            z-40
                        "
                        onClick={() => setIsOpen(false)}
                    />

                )
            }




            <main className="mt-[10vh]">


                <Header
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />



                <div
                    className="
                        p-10
                    "
                >



                    <h1 className="text-3xl font-bold">
                        {turma}
                    </h1>


                    <p className="text-gray-500">
                        Acompanhe o andamento da avaliação selecionada nesta turma.
                    </p>





                    {/* RESUMO */}


                    <section
                        className="
                            mt-8
                            bg-white
                            rounded-xl
                            border
                            border-gray-100
                            shadow-sm
                            p-6
                        "
                    >


                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                mb-6
                            "
                        >

                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-[#F1EDFF]
                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <GraduationCap
                                    size={20}
                                    className="text-[#B8A4FF]"
                                />

                            </div>


                            <h2 className="text-xl font-bold">
                                Andamento da Avaliação
                            </h2>


                        </div>




                        <div
                            className="
                                grid
                                grid-cols-4
                                gap-6
                            "
                        >


                            <div>
                                <p className="text-gray-500 text-sm">
                                    Total de alunos
                                </p>

                                <p className="text-2xl font-bold">
                                    {alunos.length}
                                </p>
                            </div>



                            <div>

                                <p className="text-gray-500 text-sm">
                                    Finalizadas
                                </p>

                                <p className="text-2xl font-bold text-green-600">
                                    {finalizadas}
                                </p>

                            </div>



                            <div>

                                <p className="text-gray-500 text-sm">
                                    Em andamento
                                </p>

                                <p className="text-2xl font-bold text-yellow-600">
                                    {andamento}
                                </p>

                            </div>



                            <div>

                                <p className="text-gray-500 text-sm">
                                    Pendentes
                                </p>

                                <p className="text-2xl font-bold text-red-600">
                                    {pendentes}
                                </p>

                            </div>


                        </div>



                        <div className="mt-6">


                            <div
                                className="
                                    flex
                                    justify-between
                                    mb-2
                                "
                            >

                                <span className="text-sm text-gray-500">
                                    Progresso geral
                                </span>


                                <span className="font-semibold">
                                    {progressoGeral}%
                                </span>


                            </div>



                            <div
                                className="
                                    w-full
                                    h-3
                                    bg-gray-200
                                    rounded-full
                                    overflow-hidden
                                "
                            >

                                <div
                                    className="
                                        h-full
                                        bg-[#B8A4FF]
                                    "
                                    style={{
                                        width: `${progressoGeral}%`
                                    }}
                                />

                            </div>


                        </div>



                    </section>







                    {/* TABELA */}



                    <section
                        className="
                            mt-8
                            bg-white
                            rounded-xl
                            border
                            border-gray-100
                            shadow-sm
                            p-6
                        "
                    >



                        <h2 className="text-xl font-bold mb-5">
                            Alunos
                        </h2>




                        <table
                            className="
                                w-full
                                border-collapse
                            "
                        >


                            <thead>

                                <tr
                                    className="
                                        bg-gray-50
                                        text-gray-600
                                    "
                                >

                                    <th className="text-left px-5 py-4 rounded-l-lg">
                                        Aluno
                                    </th>

                                    <th className="px-5 py-4">
                                        Status
                                    </th>

                                    <th className="px-5 py-4">
                                        Progresso
                                    </th>

                                    <th className="px-5 py-4">
                                        Nota
                                    </th>

                                    <th className="px-5 py-4 rounded-r-lg">
                                        Ação
                                    </th>

                                </tr>

                            </thead>



                            <tbody>


                                {
                                    alunos.map((aluno,index)=>(

                                        <tr
                                            key={index}
                                            className="
                                                border-b
                                                border-gray-100
                                                hover:bg-gray-50
                                            "
                                        >

                                            <td className="px-5 py-5 font-semibold">
                                                {aluno.nome}
                                            </td>



                                            <td className="px-5 py-5 text-center">

                                                <span
                                                    className={`
                                                        inline-flex
                                                        items-center
                                                        gap-2
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        text-sm
                                                        font-semibold
                                                        ${statusClasses[aluno.status]}
                                                    `}
                                                >

                                                    {statusIcons[aluno.status]}

                                                    {aluno.status}

                                                </span>

                                            </td>




                                            <td className="px-5 py-5 text-center">

                                                {aluno.progresso}%

                                            </td>




                                            <td className="px-5 py-5 text-center font-bold">

                                                {aluno.nota}

                                            </td>




                                            <td className="px-5 py-5 text-center">

                                                <button

                                                    onClick={() => navigate('/management-perform-evaluation/:turma/:aluno/:id')}

                                                    className="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        gap-2
                                                        mx-auto
                                                        text-[#B8A4FF]
                                                        font-semibold
                                                        hover:underline
                                                    "
                                                >

                                                    <Eye size={18}/>

                                                    {
                                                        aluno.status === "Finalizada"
                                                            ? "Visualizar"
                                                            : aluno.status === "Em andamento"
                                                                ? "Continuar"
                                                                : "Responder"
                                                    }


                                                </button>

                                            </td>


                                        </tr>


                                    ))
                                }


                            </tbody>



                        </table>



                    </section>





                    <div
                        className="
                            flex
                            justify-center
                            mt-8
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-gray-50
                                border
                                border-gray-200
                                rounded-lg
                                px-6
                                py-3
                            "
                        >

                            <Info
                                size={18}
                                className="text-[#B8A4FF]"
                            />

                            <span className="text-sm text-gray-600">
                                Acompanhe o progresso individual dos alunos nesta avaliação.
                            </span>


                        </div>


                    </div>




                </div>


            </main>


        </>

    );

};