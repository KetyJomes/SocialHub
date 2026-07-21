import { useState } from "react";
import {
    GraduationCap,
    Info,
    Eye
} from "lucide-react";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";
import { useNavigate } from "react-router-dom";


export const ManagementEvaluationClasses = () => {

    const navigate = useNavigate();


    const [isOpen, setIsOpen] = useState(false);



    const turmas = [

        {
            nome: "Turma 1EM",
            alunos: 32,
            respondidas: 28,
            pendentes: 4,
            adesao: 87,
            nota: 98
        },

        {
            nome: "Turma 9A",
            alunos: 30,
            respondidas: 30,
            pendentes: 0,
            adesao: 100,
            nota: 96
        },

        {
            nome: "Turma 2EM",
            alunos: 35,
            respondidas: 22,
            pendentes: 13,
            adesao: 63,
            nota: 59
        },

        {
            nome: "Turma 3EM",
            alunos: 28,
            respondidas: 25,
            pendentes: 3,
            adesao: 89,
            nota: 70
        },

        {
            nome: "Turma 9B",
            alunos: 31,
            respondidas: 31,
            pendentes: 0,
            adesao: 100,
            nota: 90
        }

    ];



    return (

        <>


            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />



            <main>


                <Header
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />



                <div
                    className="
                        pt-28
                        px-10
                        pb-10
                    "
                >


                    <h1 className="text-3xl font-bold">
                        Turmas
                    </h1>


                    <p className="text-gray-500">
                        Visualize o desempenho geral de todas as turmas.
                    </p>




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
                                Desempenho das Turmas
                            </h2>


                        </div>





                        <div
                            className="
                                overflow-x-auto
                            "
                        >


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
                                            text-sm
                                        "
                                    >

                                        <th
                                            className="
                                                text-left
                                                px-5
                                                py-4
                                                rounded-l-lg
                                            "
                                        >
                                            Turma
                                        </th>


                                        <th className="px-5 py-4">
                                            Alunos
                                        </th>


                                        <th className="px-5 py-4">
                                            Respondidas
                                        </th>


                                        <th className="px-5 py-4">
                                            Pendentes
                                        </th>


                                        <th className="px-5 py-4">
                                            Adesão
                                        </th>


                                        <th className="px-5 py-4">
                                            Nota média
                                        </th>


                                        <th
                                            className="
                                                px-5
                                                py-4
                                                rounded-r-lg
                                            "
                                        >
                                            Ação
                                        </th>


                                    </tr>


                                </thead>





                                <tbody>


                                    {
                                        turmas.map((turma, index) => (

                                            <tr
                                                key={index}
                                                className="
                                                    border-b
                                                    border-gray-100
                                                    hover:bg-gray-50
                                                    transition
                                                "
                                            >


                                                <td
                                                    className="
                                                        px-5
                                                        py-5
                                                        font-semibold
                                                    "
                                                >

                                                    {turma.nome}

                                                </td>





                                                <td
                                                    className="
                                                        px-5
                                                        py-5
                                                        text-center
                                                    "
                                                >

                                                    {turma.alunos}

                                                </td>





                                                <td
                                                    className="
                                                        px-5
                                                        py-5
                                                        text-center
                                                    "
                                                >

                                                    <span
                                                        className="
                                                            text-green-600
                                                            font-semibold
                                                        "
                                                    >
                                                        {turma.respondidas}
                                                    </span>

                                                </td>





                                                <td
                                                    className="
                                                        px-5
                                                        py-5
                                                        text-center
                                                    "
                                                >

                                                    <span
                                                        className="
                                                            text-yellow-600
                                                            font-semibold
                                                        "
                                                    >
                                                        {turma.pendentes}
                                                    </span>

                                                </td>





                                                <td
                                                    className="
                                                        px-5
                                                        py-5
                                                        text-center
                                                    "
                                                >

                                                    <div
                                                        className="
                                                            flex
                                                            items-center
                                                            justify-center
                                                            gap-3
                                                        "
                                                    >


                                                        <div
                                                            className="
                                                                w-24
                                                                h-2
                                                                bg-gray-200
                                                                rounded-full
                                                                overflow-hidden
                                                            "
                                                        >

                                                            <div
                                                                className="
                                                                    h-full
                                                                    bg-[#B8A4FF]
                                                                    rounded-full
                                                                "
                                                                style={{
                                                                    width: `${turma.adesao}%`
                                                                }}
                                                            />

                                                        </div>



                                                        <span
                                                            className="
                                                                text-sm
                                                                font-semibold
                                                            "
                                                        >

                                                            {turma.adesao}%

                                                        </span>



                                                    </div>


                                                </td>





                                                <td
                                                    className="
                                                        px-5
                                                        py-5
                                                        text-center
                                                    "
                                                >

                                                    <span
                                                        className="
                                                            font-bold
                                                            text-lg
                                                        "
                                                    >

                                                        {turma.nota}

                                                    </span>


                                                </td>





                                                <td
                                                    className="
                                                        px-5
                                                        py-5
                                                        text-center
                                                    "
                                                >

                                                    <button
                                                        onClick={() => navigate('/management-avaliacoes-turmas-alunos')}

                                                        className="
                                                            flex
                                                            items-center
                                                            justify-center
                                                            gap-2
                                                            text-[#B8A4FF]
                                                            font-semibold
                                                            mx-auto
                                                            hover:underline
                                                        "
                                                    >

                                                        <Eye
                                                            size={18}
                                                        />

                                                        Visualizar

                                                    </button>


                                                </td>




                                            </tr>


                                        ))
                                    }



                                </tbody>



                            </table>



                        </div>




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
                                Clique em uma turma para visualizar seu desempenho detalhado.
                            </span>


                        </div>


                    </div>



                </div>


            </main>


        </>

    );

};