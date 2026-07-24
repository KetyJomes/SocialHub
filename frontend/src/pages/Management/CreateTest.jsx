// Criar Avaliação

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";
import { TopicsEditor } from "../../components/Management/TopicsEditor";
import { EvaluationPreview } from "../../components/Management/EvaluationPreview";
import { testsMock } from "../../data/testsMock";
import { modelsMock } from "../../data/modelsMock";

export const CreateTest = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const modelo = location.state?.modelo;
    const modoCriacao = location.state?.criarAvaliacao || false;
    const modoEdicao = location.state?.editarModelo || false;
    const modeloOrigemId = location.state?.modeloOrigemId;
    const [showAlert, setShowAlert] = useState(false);
    const [mensagemAlert, setMensagemAlert] = useState("");

    const [dados, setDados] = useState({
        titulo: modelo?.titulo || "",
        tipo: modelo?.tipo || "",
        publico: modelo?.publico || "",
        disponibilidade: modelo?.disponibilidade || "",
        prazo: modelo?.prazo || "",
        recorrencia: modelo?.recorrencia || "uma-vez"
    });

    const [turma, setTurma] = useState(
        modelo?.turma || ""
    );
    const [tipoPublico, setTipoPublico] = useState(
        modelo?.tipoPublico || "todos"
    );
    const [alunosSelecionados, setAlunosSelecionados] = useState(
        modelo?.alunosSelecionados || []
    );
    const alunos = [
        { id: 1, nome: "João Pedro" },
        { id: 2, nome: "Maria Eduarda" },
        { id: 3, nome: "Lucas Henrique" },
        { id: 4, nome: "Ana Clara" },
        { id: 5, nome: "Gabriel" },
    ];

    const [secoes, setSecoes] = useState(

        modelo?.secoes || [

            {
                id: 1,
                titulo: "",
                descricao: "",
                perguntas: [
                    {
                        id: 1,
                        texto: "",
                        escala: ""
                    }
                ]
            }

        ]

    );

    useEffect(() => {

        if (!modelo) return;

        setDados({
            titulo: modelo.titulo || "",
            tipo: modelo.tipo || "",
            publico: modelo.publico || "",
            disponibilidade: modelo.disponibilidade || "",
            prazo: modelo.prazo || "",
            recorrencia: modelo.recorrencia || "uma-vez"
        });

        setTurma(modelo.turma || "");

        setTipoPublico(
        modelo.tipoPublico || "todos"
        );

        setAlunosSelecionados(
            modelo.alunosSelecionados || []
        );

        setSecoes(modelo.secoes || []);

    }, [modelo]);

    function atualizarCampo(campo, valor) {

        setDados(prev => ({
            ...prev,
            [campo]: valor
        }));

    }

    function adicionarSecao() {

        setSecoes(prev => ([
            ...prev,
            {
                id: Date.now(),
                titulo: "",
                perguntas: [
                    {
                        id: Date.now() + 1,
                        texto: "",
                        escala: ""
                    }
                ]
            }
        ]));

    }

    function criarAvaliacao() {

        // ============================
        // Informações da avaliação
        // ============================

        if (
            !dados.titulo ||
            !dados.tipo ||
            !dados.disponibilidade ||
            !dados.prazo ||
            !turma
        ) {

            setMensagemAlert(
                "Preencha todos os campos obrigatórios em Informações da Avaliação antes de continuar."
            );

            setShowAlert(true);

            return;

        }

        // ============================
        // Destinatários
        // ============================

        if (
            tipoPublico === "alguns" &&
            alunosSelecionados.length === 0
        ) {

            setMensagemAlert(
                "Selecione pelo menos um aluno como destinatário da avaliação."
            );

            setShowAlert(true);

            return;

        }

        // ============================
        // Tópicos
        // ============================

        if (secoes.length < 1) {

            setMensagemAlert(
                "Crie pelo menos um tópico para a avaliação."
            );

            setShowAlert(true);

            return;

        }

        // ============================
        // Validação dos tópicos
        // ============================

        for (const secao of secoes) {

            if (!secao.titulo.trim()) {

                setMensagemAlert(
                    "Todos os tópicos devem possuir um título."
                );

                setShowAlert(true);

                return;

            }

            if (secao.perguntas.length === 0) {

                setMensagemAlert(
                    "Todos os tópicos devem possuir pelo menos uma questão."
                );

                setShowAlert(true);

                return;

            }

            const escalasUtilizadas = secao.perguntas
                .map(pergunta => pergunta.escala)
                .filter(Boolean);

            const escalasObrigatorias = [
                "Crítico",
                "Abaixo do esperado",
                "Dentro do esperado",
                "Acima do esperado"
            ];

            const possuiTodasEscalas = escalasObrigatorias.every(
                escala => escalasUtilizadas.includes(escala)
            );

            if (!possuiTodasEscalas) {

                setMensagemAlert(
                    `O tópico "${secao.titulo}" deve conter questões utilizando todas as escalas: Crítico, Abaixo do esperado, Dentro do esperado e Acima do esperado.`
                );

                setShowAlert(true);

                return;

            }

            for (const pergunta of secao.perguntas) {

                if (
                    !pergunta.texto.trim() ||
                    !pergunta.escala
                ) {

                    setMensagemAlert(
                        "Todas as questões devem possuir um texto e uma escala."
                    );

                    setShowAlert(true);

                    return;

                }

            }

        }

        // ============================
        // Criar avaliação
        // ============================

        const novaAvaliacao = {

            id: Date.now(),

            ...dados,

            turma,

            tipoPublico,

            alunosSelecionados,

            secoes,

            status:"Pendente"

        };


        testsMock.push(novaAvaliacao);

        navigate("/management-test", {
            state: {
                abaInicial: "avaliacoes"
            }
        });

    }

    function salvarModelo() {

        if (
            !dados.titulo ||
            !dados.tipo
        ) {

            setMensagemAlert(
                "Informe pelo menos o título e o tipo antes de salvar um modelo."
            );

            setShowAlert(true);

            return;

        }


        const modeloAtualizado = {

        id: modeloOrigemId || Date.now(),

        ...dados,

        turma,

        tipoPublico,

        alunosSelecionados,

        secoes

    };


    const index = modelsMock.findIndex(
        item => item.id === modeloOrigemId
    );


        if(index !== -1){

            modelsMock[index] = modeloAtualizado;

        } else {

            modelsMock.push(modeloAtualizado);

        }


        navigate("/management-test", {
            state:{
                abaInicial:"modelos"
            }
        });

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

            <main className="mt-[8vh] p-10 bg-gray-50 min-h-screen">

                <div className="max-w-7xl mx-auto">

                    <h1 className="text-3xl font-bold text-gray-800">
                        {
                            modelo
                                ? modoCriacao
                                    ? "Criar Avaliação"
                                    : modoEdicao
                                        ? "Editar Modelo"
                                        : "Editar Modelo"
                                : "Nova Avaliação"
                        }

                    </h1>

                    <p className="text-gray-500 mt-2">
                        Configure as informações gerais e monte a avaliação.
                    </p>

                    {/* INFORMAÇÕES DA AVALIAÇÃO */}

                    <section className="mt-8 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition">

                        <h2 className="text-xl font-semibold text-gray-800 mb-6">
                            Informações da Avaliação
                        </h2>

                        <div className="grid grid-cols-2 gap-6">

                            <div>

                                <label className="font-medium text-gray-800">
                                    Título
                                </label>

                                <input
                                    type="text"
                                    placeholder="Ex: Avaliação 2º Trimestre"
                                    value={dados.titulo}
                                    onChange={(e) => atualizarCampo("titulo", e.target.value)}
                                    className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0291F7] focus:border-[#0291F7]"
                                />

                            </div>

                            <div>

                                <label className="font-medium text-gray-800">
                                    Tipo
                                </label>

                                <select
                                    value={dados.tipo}
                                    onChange={(e) => atualizarCampo("tipo", e.target.value)}
                                    className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0291F7] focus:border-[#0291F7]"
                                >

                                    <option value="">
                                        Selecione
                                    </option>

                                    <option>
                                        Gestor → Aluno
                                    </option>

                                    <option>
                                        Aluno → Gestor
                                    </option>

                                    <option>
                                        Autoavaliação
                                    </option>

                                    <option>
                                        Líder → Turma
                                    </option>

                                    <option>
                                        Aluno → Líder
                                    </option>

                                    <option>
                                        360°
                                    </option>

                                </select>

                            </div>

                            <div>

                                <label className="font-medium text-gray-800">
                                    Disponibilizar em
                                </label>

                                <input
                                    type="date"
                                    value={dados.disponibilidade}
                                    onChange={(e) =>
                                        atualizarCampo("disponibilidade", e.target.value)
                                    }
                                    className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0291F7] focus:border-[#0291F7]"
                                />
                            </div>

                            <div>

                                <label className="font-medium text-gray-800">
                                    Prazo Final
                                </label>

                                <input
                                    type="date"
                                    value={dados.prazo}
                                    onChange={(e) =>
                                        atualizarCampo("prazo", e.target.value)
                                    }
                                    className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0291F7] focus:border-[#0291F7]"
                                />

                            </div>

                            <div>

                                <label className="font-medium text-gray-800">
                                    Turma
                                </label>

                                <select
                                    value={turma}
                                    onChange={(e) => setTurma(e.target.value)}
                                    className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 outline-none focus:ring-2 focus:ring-[#0291F7] focus:border-[#0291F7]"
                                >

                                    <option value="">
                                        Selecione uma turma
                                    </option>

                                    <option value="1A">
                                        1º EM A
                                    </option>

                                    <option value="1B">
                                        1º EM B
                                    </option>

                                    <option value="2A">
                                        2º EM A
                                    </option>

                                    <option value="2B">
                                        2º EM B
                                    </option>

                                    <option value="3A">
                                        3º EM A
                                    </option>

                                </select>

                            </div>

                            <div>

                                <label className="font-medium text-gray-800">
                                    Frequência
                                </label>

                                <select
                                    value={dados.recorrencia}
                                    onChange={(e) => atualizarCampo("recorrencia", e.target.value)}
                                    className="w-full mt-2 bg-[#F8F8FB] border border-gray-200 rounded-lg px-4 py-3 text-gray-500 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#0291F7] focus:border-[#0291F7]"
                                >

                                    <option value="uma-vez">
                                        Apenas uma vez
                                    </option>

                                    <option value="mensal">
                                        Mensal
                                    </option>

                                    <option value="bimestral">
                                        Bimestral
                                    </option>

                                    <option value="trimestral">
                                        Trimestral
                                    </option>

                                    <option value="semestral">
                                        Semestral
                                    </option>

                                    <option value="anual">
                                        Anual
                                    </option>

                                </select>

                            </div>

                        </div>

                        <div className="col-span-2 mt-6">

                            <label className="font-medium text-gray-800">
                                Destinatários
                            </label>

                            <div className="mt-3 space-y-3">

                                <label className="flex items-center gap-2 cursor-pointer">

                                    <input
                                        type="radio"
                                        value="todos"
                                        checked={tipoPublico === "todos"}
                                        onChange={(e) => setTipoPublico(e.target.value)}
                                    />

                                    Todos os alunos da turma

                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">

                                    <input
                                        type="radio"
                                        value="alguns"
                                        checked={tipoPublico === "alguns"}
                                        onChange={(e) => setTipoPublico(e.target.value)}
                                    />

                                    Apenas alguns alunos

                                </label>

                            </div>

                            {
                                tipoPublico === "alguns" && (

                                    <div className="mt-5 bg-[#F8F8FB] border border-gray-200 rounded-xl p-5">

                                        <p className="font-medium text-gray-800 mb-4">
                                            Selecione os alunos
                                        </p>

                                        <div className="space-y-3">

                                            {
                                                alunos.map((aluno) => (

                                                    <label
                                                        key={aluno.id}
                                                        className="flex items-center gap-3 cursor-pointer"
                                                    >

                                                        <input
                                                            type="checkbox"
                                                            checked={alunosSelecionados.includes(aluno.id)}
                                                            onChange={(e) => {

                                                                if (e.target.checked) {

                                                                    setAlunosSelecionados(prev => [
                                                                        ...prev,
                                                                        aluno.id
                                                                    ]);

                                                                } else {

                                                                    setAlunosSelecionados(prev =>
                                                                        prev.filter(id => id !== aluno.id)
                                                                    );

                                                                }

                                                            }}
                                                        />

                                                        <span className="text-gray-700">
                                                            {aluno.nome}
                                                        </span>

                                                    </label>

                                                ))
                                            }

                                        </div>

                                    </div>

                                )
                            }

                        </div>

                    </section>
                    
                    <TopicsEditor
                        secoes={secoes}
                        setSecoes={setSecoes}
                        adicionarSecao={adicionarSecao}
                    />

                    <EvaluationPreview
                        dados={dados}
                        secoes={secoes}
                        onSaveModel={salvarModelo}
                        onCreate={criarAvaliacao}
                    />

                </div>

            </main>
            {
            showAlert && (
            
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                    <div className="bg-white rounded-2xl shadow-xl p-8 w-[420px]">

                        <h2 className="text-2xl font-bold mb-4">
                            Atenção
                        </h2>

                        <p className="text-gray-600 mb-8">
                            {mensagemAlert}
                        </p>

                        <div className="flex justify-end">

                            <button
                                onClick={() => setShowAlert(false)}
                                className="bg-[#0291F7] text-white rounded-lg px-5 py-2 hover:opacity-90 transition"
                            >
                                Entendi
                            </button>

                        </div>

                    </div>

                </div>

            )
        }

        </>

    );

};

