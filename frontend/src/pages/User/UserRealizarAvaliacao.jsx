import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { EvaluationTable } from "../../components/EvaluationTable";

import { evaluationsCompleteMock } from "../../data/evaluationsCompleteMock";
import { evaluationsMock } from "../../data/evaluationsMock";

export const UserRealizarAvaliacao = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);

    const alunoAvaliado = params.get("avaliado");
    const turma = params.get("turma");
    const idAvaliacao = params.get("id");
    const teste = params.get("perguntas");

    const avaliacaoInfo =
        evaluationsMock.find(
        item => item.id === Number(idAvaliacao)
    );    
    
    const avaliacaoAtual =
    evaluationsCompleteMock.find(
        item => item.id === Number(idAvaliacao)
    );
    
    console.log("ID AVALIACAO:", idAvaliacao);
    console.log("AVALIACAO:", avaliacaoAtual);
    console.log("aaa:", avaliacaoAtual.perguntas.length);
    
    const [answers, setAnswers] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false); 
    

    /* Pega as respostas salvas */
    useEffect(() => {

        if (!idAvaliacao) return;

        const avaliacoesSalvas =
            JSON.parse(
                localStorage.getItem("avaliacoesRespondidas")
            ) || {};

        const avaliacaoSalva =
            avaliacoesSalvas[idAvaliacao];


        if (avaliacaoSalva) {

            setAnswers(
                avaliacaoSalva.respostas || {}
            );

        }

    }, [idAvaliacao]);




    /* Seleciona resposta */
    const handleSelect = (questionId, nivel) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: nivel
        }));
    };

    const limparRespostas = () => {

        if (
            window.confirm(
                "Deseja realmente limpar todas as respostas da avaliação?"
            )
        ) {
            setAnswers({});
        }
    };

    /* SALVAR AVALIAÇÃO COMPLETA */
    const salvarAvaliacao = (finalizada) => {

        const avaliacoesSalvas =
            JSON.parse(
                localStorage.getItem(
                    "avaliacoesRespondidas"
                )
            ) || {};

        avaliacoesSalvas[idAvaliacao] = {
            ...avaliacaoAtual,
            respostas: answers,
            finalizada,
            status:
                finalizada
                ?
                "Respondida"
                :
                "Em andamento"
            };
            
            localStorage.setItem(
                "avaliacoesRespondidas",
                JSON.stringify(
                    avaliacoesSalvas
                )
                
            );
        };
        
        const confirmarEnvio = () => {
            
            salvarAvaliacao(true);
            setShowConfirm(false);
            
            navigate(
                "/user-avaliacoes"
            );
        };
        
        const salvarEContinuarDepois = () => {
            
            salvarAvaliacao(false);
            setShowConfirm(false);
            
            navigate(
                "/user-avaliacoes"
            );
        };
        
        const totalQuestoes = avaliacaoAtual?.perguntas.length || 0;
        const respondidas = Object.keys(answers).length;
        const avaliacaoCompleta = respondidas === totalQuestoes;
        
        const avaliacaoFinalizada = avaliacaoAtual.perguntas.length > 0
        console.log(avaliacaoFinalizada)
        

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
                        {avaliacaoAtual?.nome}
                    </h1>

                    {
                        alunoAvaliado && (
                            <div className="mt-5 mb-8 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5">

                                <p className="text-sm text-gray-500">
                                    Você está avaliando
                                </p>

                                <h2 className="text-2xl font-semibold text-[#0291F7]">
                                    {alunoAvaliado}
                                </h2>
                                {
                                    turma && (
                                        <p className="text-gray-500 mt-1">
                                            {turma}
                                        </p>
                                    )
                                }

                            </div>
                        )
                    }

                    <div className="flex justify-between items-center mt-2 mb-8">

                        <span className="bg-[#0291F7]/15 text-[#0291F7] font-semibold px-4 py-2 rounded-full">
                            {respondidas}/{totalQuestoes} respondidas
                        </span>

                    </div>

                    {
                        avaliacaoAtual && (
                            <EvaluationTable
                                data={avaliacaoAtual.perguntas}
                                answers={answers}
                                onSelect={handleSelect}
                            />
                        )
                    }

                    {
                        !avaliacaoFinalizada && (

                            <div className="flex justify-center gap-4 mt-10">
                                <button
                                    onClick={limparRespostas}
                                    className="border border-red-500 text-red-500 rounded-xl px-10 py-4 hover:bg-red-50 transition"
                                >
                                    Limpar respostas
                                </button>

                                <button
                                    onClick={() => setShowConfirm(true)}
                                    className="bg-[#0291F7] text-white rounded-xl px-12 py-4 hover:bg-blue-700 transition"
                                >
                                    Enviar Avaliação
                                </button>
                            </div>
                        )
                    }
                </div>
            </main>

            {

                showConfirm && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white rounded-2xl shadow-xl p-8 w-[420px]">

                            {
                                avaliacaoCompleta ? (
                                    <>

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
                                            Deseja realmente finalizar?
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
                                                className="bg-[#0291F7] text-white rounded-lg px-5 py-2 hover:bg-blue-700 transition"
                                            >
                                                Confirmar
                                            </button>

                                        </div>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <h2 className="text-2xl font-bold mb-4">
                                            Avaliação incompleta
                                        </h2>

                                        <p className="text-gray-600 mb-8">
                                            Você respondeu {respondidas} de {totalQuestoes} competências.
                                            <br />
                                            <br />
                                            Sua avaliação será salva e você poderá continuar depois.
                                            <br />
                                            <br />
                                            Deseja salvar e sair?
                                        </p>

                                        <div className="flex justify-end gap-4">

                                            <button
                                                onClick={() => setShowConfirm(false)}
                                                className="border border-gray-300 rounded-lg px-5 py-2 hover:bg-gray-100 transition"
                                            >
                                                Continuar avaliação
                                            </button>




                                            <button
                                                onClick={salvarEContinuarDepois}
                                                className="bg-[#0291F7] text-white rounded-lg px-5 py-2 hover:bg-blue-700 transition"
                                            >
                                                Salvar e sair
                                            </button>

                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};