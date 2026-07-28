import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";

// Agora usando o componente padrão do sistema
import { EvaluationTable } from "../../components/EvaluationTable";

import { evaluation } from "../../data/evaluation";

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

            `/management-student/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}`

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

                <div className="w-[90vw] max-w-[1500px] mx-auto">

                    <h1 className="text-3xl font-bold">
                        Avaliação de Desempenho
                    </h1>

                    <div
                        className="
                            mt-5
                            rounded-2xl
                            border
                            border-blue-200
                            bg-blue-50
                            px-6
                            py-5
                            w-full
                        "
                    >

                        <p className="text-sm text-gray-500">
                            Você está avaliando
                        </p>

                        <h2 className="text-2xl font-semibold text-[#21528A]">
                            {aluno}
                        </h2>

                        <p className="text-gray-500 mt-1">
                            {turma}
                        </p>

                    </div>

                    <div className="flex justify-between items-center mt-8 mb-8">

                        <p className="text-gray-500">
                            Escolha apenas uma alternativa para cada competência.
                        </p>

                        <span
                            className="
                                bg-[#0291F7]/15
                                text-[#0291F7]
                                px-4
                                py-2
                                rounded-full
                                font-semibold
                            "
                        >
                            {respondidas}/{evaluation.length} respondidas
                        </span>

                    </div>

                    {/* TABELA PADRÃO DO SISTEMA */}

                    <EvaluationTable
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
                                bg-[#21528A]
                                text-white
                                px-10
                                py-3
                                rounded-xl
                                hover:bg-[#1b4471]
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
                                        bg-[#21528A]
                                        text-white
                                        px-5
                                        py-2
                                        rounded-lg
                                        hover:bg-[#1b4471]
                                        transition
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