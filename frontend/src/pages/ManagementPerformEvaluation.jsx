import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { ManagementEvaluationTable } from "../components/ManagementEvaluationTable";

import { evaluation } from "../data/evaluation";

export const ManagementPerformEvaluation = () => {

    const navigate = useNavigate();

    const { turma, aluno } = useParams();

    const [answers, setAnswers] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);

    function handleSelect(questionId, option) {

        setAnswers(prev => ({

            ...prev,

            [questionId]: option

        }));

    }

    function limparRespostas() {

        if (

            window.confirm(

                "Deseja limpar todas as respostas desta avaliação?"

            )

        ) {

            setAnswers({});

        }

    }

    function handleEnviar() {

        const total = evaluation.length;

        const respondidas = Object.keys(answers).length;

        if (respondidas < total) {

            alert(

                `Você respondeu ${respondidas} de ${total} competências.`

            );

            return;

        }

        setShowConfirm(true);

    }

    function confirmarEnvio() {

        console.log(answers);

        setShowConfirm(false);

        navigate(

            `/management-student/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/gestor`

        );

    }

    const respondidas = Object.keys(answers).length;

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

            <main className="mt-[8vh] p-8 overflow-y-auto">

                <div className="w-[90vw] mx-auto">

                    <h1 className="text-3xl font-bold">
                        Avaliação de Desempenho
                    </h1>

                    <div className="flex justify-between items-end mt-3 mb-6">

                        <div>

                            <div className="flex items-center gap-3">

                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {aluno}
                                </h2>

                                <span className="text-gray-300 text-2xl">|</span>

                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {turma}
                                </h2>

                            </div>

                            <p className="text-gray-500 mt-1">
                                Escolha apenas uma alternativa para cada competência.
                            </p>

                        </div>

                        <span
                            className="
                                bg-[#F1EDFF]
                                text-[#8B5CF6]
                                px-4
                                py-2
                                rounded-full
                                font-semibold
                            "
                        >
                            {respondidas}/{evaluation.length} respondidas
                        </span>

                    </div>
                    <ManagementEvaluationTable

                        data={evaluation}

                        answers={answers}

                        onSelect={handleSelect}

                    />

                    <div className="flex justify-center gap-5 mt-10">

                        <button

                            onClick={limparRespostas}

                            className="
                                border
                                border-red-500
                                text-red-500
                                px-8
                                py-3
                                rounded-xl
                                hover:bg-red-50
                                transition
                            "

                        >

                            Limpar respostas

                        </button>

                        <button

                            onClick={handleEnviar}

                            className="
                                bg-[#B8A4FF]
                                text-white
                                px-10
                                py-3
                                rounded-xl
                                hover:opacity-90
                                transition
                            "

                        >

                            Enviar avaliação

                        </button>

                    </div>

                </div>

            </main>

            {

                showConfirm && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white rounded-2xl p-8 w-[430px]">

                            <h2 className="text-2xl font-bold mb-5">

                                Confirmar envio

                            </h2>

                            <p className="text-gray-600">

                                Após enviar esta avaliação ela não poderá ser alterada.

                                <br />

                                <br />

                                Deseja realmente enviá-la?

                            </p>

                            <div className="flex justify-end gap-4 mt-8">

                                <button

                                    onClick={() => setShowConfirm(false)}

                                    className="
                                        border
                                        border-gray-300
                                        px-5
                                        py-2
                                        rounded-lg
                                    "

                                >

                                    Cancelar

                                </button>

                                <button

                                    onClick={confirmarEnvio}

                                    className="
                                        bg-[#B8A4FF]
                                        text-white
                                        px-5
                                        py-2
                                        rounded-lg
                                    "

                                >

                                    Confirmar

                                </button>

                            </div>

                        </div>

                    </div>

                )

            }

        </>

    );

};