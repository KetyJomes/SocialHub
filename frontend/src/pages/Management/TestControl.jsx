// Página de gerenciamento de avaliações

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";

import { testsMock } from "../../data/testsMock";
import { modelsMock } from "../../data/modelsMock";

export const TestControl = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showModelModal, setShowModelModal] = useState(false);
    const [modeloSelecionado, setModeloSelecionado] = useState(null);
    const [modeloCompleto, setModeloCompleto] = useState(false);

    const [abaAtiva, setAbaAtiva] = useState(
        location.state?.abaInicial || "avaliacoes"
    );

    const agendamentos = testsMock.filter(
        (avaliacao) => avaliacao.recorrencia !== "uma-vez"
    );

    function excluirAvaliacao(id) {

        const index = testsMock.findIndex((item) => item.id === id);

        if (index !== -1) {
            testsMock.splice(index, 1);
            setAbaAtiva((aba) => aba);
        }

    }

    function excluirModelo(id) {

        const index = modelsMock.findIndex((item) => item.id === id);

        if (index !== -1) {
            modelsMock.splice(index, 1);
            setAbaAtiva((aba) => aba);
        }

    }

    function verificarModelo(modelo) {

        const possuiInformacoes =
            modelo.titulo &&
            modelo.tipo &&
            modelo.disponibilidade &&
            modelo.prazo &&
            modelo.turma;

        const possuiTopicos =
            modelo.secoes &&
            modelo.secoes.length >= 2;

        let perguntasValidas = true;

        if (possuiTopicos) {

            for (const secao of modelo.secoes) {

                if (!secao.titulo.trim()) {
                    perguntasValidas = false;
                    break;
                }

                const escalas = secao.perguntas
                    .map(p => p.escala)
                    .filter(Boolean);

                const obrigatorias = [
                    "Crítico",
                    "Abaixo do esperado",
                    "Dentro do esperado",
                    "Acima do esperado"
                ];

                const possuiTodas = obrigatorias.every(
                    escala => escalas.includes(escala)
                );

                if (!possuiTodas) {
                    perguntasValidas = false;
                    break;
                }

            }

        } else {

            perguntasValidas = false;

        }

        setModeloSelecionado(modelo);
        setModeloCompleto(
            possuiInformacoes &&
            possuiTopicos &&
            perguntasValidas
        );

        setShowModelModal(true);

    }

    return (

        <>

            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            {
                isOpen && (

                    <div
                        className="fixed inset-0 bg-black/20 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                )
            }

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="mt-[8vh] h-[calc(100vh-11.5vh)]">

                <div className="p-10">

                    <h1 className="text-3xl font-bold">
                        Gerenciar Avaliações
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Crie, reutilize e acompanhe todas as avaliações do sistema.
                    </p>

                    {/* ABAS */}

                    <section className="flex gap-8 border-b border-gray-300 mt-8">

                        <button
                            onClick={() => setAbaAtiva("avaliacoes")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${
                                abaAtiva === "avaliacoes"
                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                    : "text-gray-500 border-transparent"
                            }`}
                        >
                            Avaliações
                        </button>

                        <button
                            onClick={() => setAbaAtiva("modelos")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${
                                abaAtiva === "modelos"
                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                    : "text-gray-500 border-transparent"
                            }`}
                        >
                            Modelos
                        </button>

                        <button
                            onClick={() => setAbaAtiva("agendamentos")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${
                                abaAtiva === "agendamentos"
                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                    : "text-gray-500 border-transparent"
                            }`}
                        >
                            Agendamentos
                        </button>

                    </section>

                    {/* ================= AVALIAÇÕES ================= */}

                    {
                        abaAtiva === "avaliacoes" && (

                            <>

                                <section className="mt-8 flex justify-between items-center">

                                    <h2 className="text-2xl font-bold">
                                        Avaliações
                                    </h2>

                                    <button
                                        onClick={() => navigate("/management-test/create")}
                                        className="bg-[#0291F7] text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
                                    >
                                        + Nova avaliação
                                    </button>

                                </section>

                                <section className="mt-8 space-y-4">

                                    {
                                        testsMock.length > 0 ? (

                                            testsMock.map((avaliacao) => (

                                                <div
                                                    key={avaliacao.id}
                                                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                                                >

                                                    <div className="flex justify-between items-center">

                                                        <div>

                                                            <h3 className="text-xl font-semibold">
                                                                {avaliacao.titulo}
                                                            </h3>

                                                            <p className="text-gray-500 mt-2">
                                                                Tipo: {avaliacao.tipo}
                                                            </p>

                                                            <p className="text-gray-500">
                                                                Turma: {avaliacao.turma}
                                                            </p>

                                                        </div>

                                                        <div className="flex items-center gap-4">

                                                            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">
                                                                {avaliacao.status}
                                                            </span>

                                                            <button
                                                                onClick={() => excluirAvaliacao(avaliacao.id)}
                                                                className="text-red-500 hover:text-red-700 transition"
                                                            >
                                                                <Trash2 size={22} />
                                                            </button>

                                                        </div>

                                                    </div>

                                                </div>

                                            ))

                                        ) : (

                                            <div className="text-center py-12 text-gray-500">

                                                Nenhuma avaliação criada.

                                            </div>

                                        )
                                    }

                                </section>

                            </>

                        )
                    }

                    {/* ================= MODELOS ================= */}

                    {
                        abaAtiva === "modelos" && (

                            <>

                                <section className="mt-8">

                                    <h2 className="text-2xl font-bold">
                                        Modelos
                                    </h2>

                                </section>

                                <section className="mt-8 space-y-4">

                                    {
                                        modelsMock.length > 0 ? (

                                            modelsMock.map((modelo) => (

                                                <div
                                                    key={modelo.id}
                                                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                                                >

                                                    <div className="flex justify-between items-center">

                                                        <div>

                                                            <h3 className="text-xl font-semibold">
                                                                {modelo.titulo}
                                                            </h3>

                                                            <p className="text-gray-500 mt-2">
                                                                Tipo: {modelo.tipo}
                                                            </p>

                                                            <p className="text-gray-500">
                                                                Disponível em: {modelo.disponibilidade || "-"}
                                                            </p>

                                                            <p className="text-gray-500">
                                                                Prazo: {modelo.prazo || "-"}
                                                            </p>

                                                        </div>

                                                        <div className="flex items-center gap-4">

                                                            <button
                                                                onClick={() => verificarModelo(modelo)}
                                                                className="
                                                                    bg-[#0291F7]
                                                                    text-white
                                                                    px-5
                                                                    py-2.5
                                                                    rounded-lg
                                                                    hover:opacity-90
                                                                    transition
                                                                    font-medium
                                                                "
                                                            >
                                                                Utilizar modelo
                                                            </button>

                                                            <button
                                                                onClick={() => excluirModelo(modelo.id)}
                                                                className="text-red-500 hover:text-red-700 transition"
                                                            >
                                                                <Trash2 size={22} />
                                                            </button>

                                                        </div>

                                                    </div>

                                                </div>

                                            ))

                                        ) : (

                                            <div className="text-center py-12 text-gray-500">

                                                Nenhum modelo salvo.

                                            </div>

                                        )
                                    }

                                </section>

                            </>

                        )
                    }

                   {/* ================= AGENDAMENTOS ================= */}

                    {
                        abaAtiva === "agendamentos" && (

                            <>

                                <section className="mt-8">

                                    <h2 className="text-2xl font-bold">
                                        Agendamentos
                                    </h2>

                                </section>

                                <section className="mt-8 space-y-4">

                                    {
                                        agendamentos.length > 0 ? (

                                            agendamentos.map((agendamento) => (

                                                <div
                                                    key={agendamento.id}
                                                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                                                >

                                                    <div className="flex justify-between items-center">

                                                        <div>

                                                            <h3 className="text-xl font-semibold">
                                                                {agendamento.titulo}
                                                            </h3>

                                                            <p className="text-gray-500 mt-2">
                                                                Tipo: {agendamento.tipo}
                                                            </p>

                                                            <p className="text-gray-500">
                                                                Turma: {agendamento.turma}
                                                            </p>

                                                            <p className="text-gray-500">
                                                                Próxima recorrência: {agendamento.recorrencia}
                                                            </p>

                                                        </div>

                                                        <div className="flex items-center gap-4">

                                                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                                                                Agendada
                                                            </span>

                                                            <button
                                                                onClick={() => excluirAvaliacao(agendamento.id)}
                                                                className="text-red-500 hover:text-red-700 transition"
                                                            >
                                                                <Trash2 size={22} />
                                                            </button>

                                                        </div>

                                                    </div>

                                                </div>

                                            ))

                                        ) : (

                                            <div className="text-center py-12 text-gray-500">

                                                Nenhum agendamento criado.

                                            </div>

                                        )
                                    }

                                </section>

                            </>

                        )
                    }

                </div>

            </main>

            {
                showModelModal && modeloSelecionado && (

                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                        <div className="bg-white rounded-2xl shadow-xl p-8 w-[460px]">

                            {

                                modeloCompleto ? (

                                    <>

                                        <h2 className="text-2xl font-bold mb-4">
                                            Utilizar modelo
                                        </h2>

                                        <p className="text-gray-600 mb-8">

                                            Este modelo está completo.

                                            <br /><br />

                                            Deseja criar uma avaliação utilizando este modelo?

                                        </p>

                                        <div className="flex justify-end gap-4">

                                            <button
                                                onClick={() => setShowModelModal(false)}
                                                className="
                                                    border 
                                                    border-gray-300
                                                    rounded-lg
                                                    px-5
                                                    py-2
                                                    hover:bg-gray-100
                                                "
                                            >
                                                Cancelar
                                            </button>


                                            <button
                                                onClick={() => {

                                                    setShowModelModal(false);

                                                    navigate(
                                                        "/management-test/create",
                                                        {
                                                            state:{
                                                                modelo: modeloSelecionado,
                                                                editarModelo:true,
                                                                modeloOrigemId: modeloSelecionado.id
                                                            }
                                                        }
                                                    );

                                                }}
                                                className="
                                                    border
                                                    border-[#0291F7]
                                                    text-[#0291F7]
                                                    rounded-lg
                                                    px-5
                                                    py-2
                                                "
                                            >
                                                Editar modelo
                                            </button>


                                            <button
                                                onClick={() => {

                                                    setShowModelModal(false);

                                                    navigate(
                                                        "/management-test/create",
                                                        {
                                                            state:{
                                                                modelo: modeloSelecionado,
                                                                criarAvaliacao:true
                                                            }
                                                        }
                                                    );

                                                }}
                                                className="
                                                    bg-[#0291F7]
                                                    text-white
                                                    rounded-lg
                                                    px-5
                                                    py-2
                                                "
                                            >
                                                Criar avaliação
                                            </button>

                                        </div>

                                    </>

                                ) : (

                                    <>

                                        <h2 className="text-2xl font-bold mb-4">
                                            Modelo incompleto
                                        </h2>

                                        <p className="text-gray-600 mb-8">

                                            Este modelo ainda possui informações obrigatórias que precisam ser preenchidas.

                                            <br /><br />

                                            Deseja editar o modelo?

                                        </p>

                                        <div className="flex justify-end gap-4">

                                            <button
                                                onClick={() => setShowModelModal(false)}
                                                className="border border-gray-300 rounded-lg px-5 py-2 hover:bg-gray-100 transition"
                                            >
                                                Cancelar
                                            </button>

                                            <button
                                                onClick={() => {

                                                    setShowModelModal(false);

                                                    navigate(
                                                        "/management-test/create",
                                                        {
                                                            state:{
                                                                modelo: modeloSelecionado,
                                                                editarModelo:true,
                                                                modeloOrigemId: modeloSelecionado.id
                                                            }
                                                        }
                                                    );

                                                }}
                                                className="bg-[#0291F7] text-white rounded-lg px-5 py-2 hover:opacity-90 transition"
                                            >
                                                Editar modelo
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