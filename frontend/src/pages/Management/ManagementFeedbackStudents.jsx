import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";

export const ManagementFeedbackStudents = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [abaAtiva, setAbaAtiva] = useState("disponiveis");

    const alunos = [
        {
            id: 1,
            nome: "Pedro Santos",
            disponibilizado: "22/07/2026",
            prazo: "29/07/2026",
            status: "Pendente"
        },
        {
            id: 2,
            nome: "Maria Silva",
            disponibilizado: "22/07/2026",
            prazo: "29/07/2026",
            status: "Respondido"
        },
        {
            id: 3,
            nome: "João Oliveira",
            disponibilizado: "22/07/2026",
            prazo: "29/07/2026",
            status: "Em atraso"
        }
    ];

    const feedbacks = alunos.filter((aluno) => {

        if (abaAtiva === "disponiveis") {

            return aluno.status !== "Respondido";

        }

        return aluno.status === "Respondido";

    });

    function abrirFeedback(aluno) {

        navigate(
            `/management-comparison/${encodeURIComponent("Turma 1")}/${encodeURIComponent(aluno.nome)}`
        );

    }

    return (

        <>

            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="mt-[8vh] p-8">

                <div className="w-[90vw] max-w-[1500px] mx-auto">

                    <h1 className="text-3xl font-bold">
                        Feedbacks
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Selecione um aluno para visualizar ou realizar um feedback.
                    </p>

                    <section
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-gray-300
                            mt-8
                        "
                    >

                        <div className="flex gap-8">

                            <button
                                onClick={() => setAbaAtiva("disponiveis")}
                                className={`
                                    px-2
                                    py-3
                                    text-lg
                                    border-b-2
                                    transition
                                    cursor-pointer

                                    ${
                                        abaAtiva === "disponiveis"
                                            ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                            : "text-gray-500 border-transparent"
                                    }
                                `}
                            >
                                Disponíveis ({alunos.filter(aluno => aluno.status !== "Respondido").length})
                            </button>

                            <button
                                onClick={() => setAbaAtiva("feitas")}
                                className={`
                                    px-2
                                    py-3
                                    text-lg
                                    border-b-2
                                    transition
                                    cursor-pointer

                                    ${
                                        abaAtiva === "feitas"
                                            ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                            : "text-gray-500 border-transparent"
                                    }
                                `}
                            >
                                Feitos ({alunos.filter(aluno => aluno.status === "Respondido").length})
                            </button>

                        </div>

                    </section>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mt-6">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b border-gray-200 text-gray-500">

                                    <th className="text-left px-6 py-4">
                                        Aluno
                                    </th>

                                    <th className="text-center">
                                        Disponibilizado
                                    </th>

                                    <th className="text-center">
                                        Prazo
                                    </th>

                                    <th className="text-center">
                                        Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    feedbacks.length > 0 ? (

                                        feedbacks.map((aluno) => (

                                            <tr
                                                key={aluno.id}
                                                onClick={() => abrirFeedback(aluno)}
                                                className="
                                                    border-b
                                                    border-gray-200
                                                    hover:bg-[#21528A]/5
                                                    hover:shadow-sm
                                                    cursor-pointer
                                                    transition-all
                                                "
                                            >

                                                <td className="px-6 py-5">

                                                    <div>

                                                        <h3 className="font-semibold">
                                                            {aluno.nome}
                                                        </h3>

                                                        <p className="text-sm text-gray-500">
                                                            Feedback Individual
                                                        </p>

                                                    </div>

                                                </td>

                                                <td className="text-center">
                                                    {aluno.disponibilizado}
                                                </td>

                                                <td className="text-center">
                                                    {aluno.prazo}
                                                </td>

                                                <td className="text-center">

                                                    <span
                                                        className={`
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-sm
                                                            font-medium

                                                            ${
                                                                aluno.status === "Respondido"
                                                                    ? "bg-green-100 text-green-700"

                                                                    : aluno.status === "Em atraso"
                                                                        ? "bg-red-100 text-red-700"

                                                                        : "bg-yellow-100 text-yellow-700"
                                                            }
                                                        `}
                                                    >

                                                        {aluno.status}

                                                    </span>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="
                                                    text-center
                                                    py-12
                                                    text-gray-500
                                                "
                                            >

                                                Nenhum feedback encontrado.

                                            </td>

                                        </tr>

                                    )

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>

        </>

    );

};