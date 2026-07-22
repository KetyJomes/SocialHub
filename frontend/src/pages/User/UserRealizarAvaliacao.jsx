import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";


import { Header } from "../../components/Header";

import { Sidebar } from "../../components/Sidebar";

import { EvaluationTable } from "../../components/EvaluationTable";


import { evaluation } from "../../data/evaluation";


export const UserRealizarAvaliacao = () => {


    const location = useLocation();

    const navigate = useNavigate();


    const params = new URLSearchParams(location.search);


    const alunoAvaliado = params.get("avaliado");

    const turma = params.get("turma");

    const idAvaliacao = params.get("id");


    const [answers, setAnswers] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);


    /*
    =====================================================
    SELECIONAR RESPOSTA
    =====================================================
    */

    const handleSelect = (questionId, option) => {

        setAnswers(prev => ({

            ...prev,

            [questionId]: option

        }));

    };


    /*
    =====================================================
    LIMPAR RESPOSTAS
    =====================================================
    */

    const limparRespostas = () => {


        if (

            window.confirm(

                "Deseja realmente limpar todas as respostas da avaliação?"

            )

        ) {


            setAnswers({});

        }

    };


    /*
    =====================================================
    ENVIAR AVALIAÇÃO
    =====================================================
    */

    const handleEnviar = () => {


        const totalQuestoes = evaluation.length;

        const respondidas = Object.keys(answers).length;


        if (respondidas < totalQuestoes) {


            alert(

                `Você respondeu ${respondidas} de ${totalQuestoes} competências.\n\nResponda todas antes de enviar a avaliação.`

            );


            return;

        }


        setShowConfirm(true);

    };


    /*
    =====================================================
    CONFIRMAR ENVIO
    =====================================================
    */

    const confirmarEnvio = () => {


        console.log(

            "Avaliação enviada!",

            answers

        );


        /*
        =====================================================
        BUSCA RESPOSTAS JÁ SALVAS
        =====================================================
        */

        const avaliacoesSalvas =

            JSON.parse(

                localStorage.getItem(

                    "avaliacoesRespondidas"

                )

            ) || {};


        /*
        =====================================================
        SALVA AS RESPOSTAS DA AVALIAÇÃO
        =====================================================
        */

        avaliacoesSalvas[idAvaliacao] = answers;


        localStorage.setItem(

            "avaliacoesRespondidas",

            JSON.stringify(

                avaliacoesSalvas

            )

        );


        setShowConfirm(false);


        /*
        =====================================================
        VOLTA PARA A TELA DE AVALIAÇÕES
        =====================================================
        */

        navigate("/user-avaliacoes");

    };


    const totalQuestoes = evaluation.length;

    const respondidas = Object.keys(answers).length;


    return (

        <>


            <Sidebar

                isOpen={isOpen}

                setIsOpen={setIsOpen}

            />


            <Header

                isOpen={isOpen}

                setIsOpen={setIsOpen}

            />


            <main className="p-8 overflow-y-auto mt-[8vh]">


                <div className="w-[80vw] mx-auto">


                    <h1 className="text-3xl font-bold">

                        Avaliação 360°

                    </h1>


                    {


                        alunoAvaliado && (


                            <div
                                className="
                                    mt-5
                                    mb-8
                                    rounded-2xl
                                    border
                                    border-blue-200
                                    bg-blue-50
                                    px-6
                                    py-5
                                "
                            >

                                <p className="text-sm text-gray-500">
                                    Você está avaliando
                                </p>

                                <h2 className="text-2xl font-semibold text-[#21528A]">
                                    {alunoAvaliado}
                                </h2>

                                {turma && (
                                    <p className="text-gray-500 mt-1">
                                        {turma}
                                    </p>
                                )}

                            </div>

                        )

                    }


                    <div className="flex justify-between items-center mt-2 mb-8">


                        <p className="text-gray-500">

                            Escolha apenas uma alternativa para cada competência.

                        </p>


                        <span className="bg-[#0291F7]/15 text-[#0291F7] font-semibold px-4 py-2 rounded-full">

                            {respondidas}/{totalQuestoes} respondidas

                        </span>


                    </div>


                    <EvaluationTable

                        data={evaluation}

                        answers={answers}

                        onSelect={handleSelect}

                    />


                    <div className="flex justify-center gap-4 mt-10">


                        <button

                            onClick={limparRespostas}

                            className="border border-red-500 text-red-500 rounded-xl px-10 py-4 hover:bg-red-50 transition"

                        >

                            Limpar respostas

                        </button>


                        <button

                            onClick={handleEnviar}

                            className="bg-[#21528A] text-white rounded-xl px-12 py-4 hover:bg-[#1b4471] transition"

                        >

                            Enviar Avaliação

                        </button>


                    </div>


                </div>


            </main>


            {


                showConfirm && (


                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">


                        <div className="bg-white rounded-2xl shadow-xl p-8 w-[420px]">


                            <h2 className="text-2xl font-bold mb-4">

                                Confirmar envio

                            </h2>


                            <p className="text-gray-600 mb-8">


                                Todas as competências foram respondidas.


                                <br />

                                <br />


                                Após enviar esta avaliação ela não poderá mais ser alterada.


                                <br />

                                <br />


                                Deseja realmente enviá-la?


                            </p>


                            <div className="flex justify-end gap-4">


                                <button

                                    onClick={() => setShowConfirm(false)}

                                    className="border border-gray-300 rounded-lg px-5 py-2 hover:bg-gray-100 transition"

                                >

                                    Cancelar

                                </button>


                                <button

                                    onClick={confirmarEnvio}

                                    className="bg-[#21528A] text-white rounded-lg px-5 py-2 hover:bg-[#1b4471] transition"

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