import { useState } from "react";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";

import { EvaluationSectionEditor } from "../components/EvaluationSectionEditor";
import { EvaluationPreview } from "../components/EvaluationPreview";


export const CreateEvaluation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dados, setDados] = useState({

        titulo: "",
        tipo: "",
        publico: "",
        disponibilidade: "",
        prazo: "",
        recorrencia: "uma-vez"

    });

    const [secoes, setSecoes] = useState([

        {
            id: 1,
            titulo: "Competências",
            perguntas: [
                {
                    id: 1,
                    texto: ""
                }
            ]
        }

    ]);

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
                        texto: ""
                    }

                ]
            }

        ]));

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

            <main
                className="
                    mt-[8vh]
                    p-10
                    bg-gray-50
                    min-h-screen
                "
            >
                <div
                    className="
                        max-w-7xl
                        mx-auto
                    "
                >
                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-gray-800
                        "
                    >
                        Nova Avaliação
                    </h1>

                    <p
                        className="
                            text-gray-500
                            mt-2
                        "
                    >
                        Configure as informações gerais e monte a avaliação.
                    </p>

                    {/* INFORMAÇÕES DA AVALIAÇÃO */}

                    <section
                        className="
                            mt-8
                            bg-white
                            border
                            border-gray-200
                            rounded-xl
                            p-6
                            hover:shadow-sm
                            transition
                        "
                    >
                        <h2
                            className="
                                text-xl
                                font-semibold
                                text-gray-800
                                mb-6
                            "
                        >
                            Informações da Avaliação
                        </h2>

                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-6
                            "
                        >
                            <div>
                                <label
                                    className="
                                        font-medium
                                        text-gray-800
                                    "
                                >
                                    Título
                                </label>

                                <input
                                    type="text"
                                    placeholder="Ex: Avaliação 2º Trimestre"
                                    value={dados.titulo}
                                    onChange={(e) =>
                                        atualizarCampo(
                                            "titulo",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        mt-2
                                        bg-[#F8F8FB]
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-500
                                        placeholder:text-gray-400
                                        outline-none
                                        focus:ring-2
                                        focus:ring-[#B8A4FF]
                                        focus:border-[#B8A4FF]
                                    "
                                />
                            </div>


                            <div>
                                <label
                                    className="
                                        font-medium
                                        text-gray-800
                                    "
                                >
                                    Tipo
                                </label>

                                <select
                                    value={dados.tipo}
                                    onChange={(e) =>
                                        atualizarCampo(
                                            "tipo",
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        mt-2
                                        bg-[#F8F8FB]
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-500
                                        placeholder:text-gray-400
                                        outline-none
                                        focus:ring-2
                                        focus:ring-[#B8A4FF]
                                        focus:border-[#B8A4FF]
                                    "
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
                                <label
                                    className="
                                        font-medium
                                        text-gray-800
                                    "
                                >
                                    Disponibilizar em
                                </label>

                                <input
                                    type="date"
                                    className="
                                        w-full
                                        mt-2
                                        bg-[#F8F8FB]
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-500
                                        placeholder:text-gray-400
                                        outline-none
                                        focus:ring-2
                                        focus:ring-[#B8A4FF]
                                        focus:border-[#B8A4FF]
                                    "
                                />
                            </div>

                            <div>
                                <label
                                    className="
                                        font-medium
                                        text-gray-800
                                    "
                                >
                                    Prazo Final
                                </label>

                                <input
                                    type="date"
                                    className="
                                        w-full
                                        mt-2
                                        bg-[#F8F8FB]
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-500
                                        placeholder:text-gray-400
                                        outline-none
                                        focus:ring-2
                                        focus:ring-[#B8A4FF]
                                        focus:border-[#B8A4FF]
                                    "

                                />

                            </div>

                            <div>

                                <label
                                    className="
                                        font-medium
                                        text-gray-800
                                    "
                                >
                                    Público
                                </label>

                                <input
                                    type="text"
                                    placeholder="Ex: Turma 1EM"
                                    className="
                                        w-full
                                        mt-2
                                        bg-[#F8F8FB]
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-500
                                        placeholder:text-gray-400
                                        outline-none
                                        focus:ring-2
                                        focus:ring-[#B8A4FF]
                                        focus:border-[#B8A4FF]
                                    "
                                />

                            </div>

                            <div>
                                <label
                                    className="
                                        font-medium
                                        text-gray-800
                                    "
                                >
                                    Frequência
                                </label>
                                <select

                                    value={dados.recorrencia}
                                    onChange={(e) =>
                                        atualizarCampo(
                                            "recorrencia",
                                            e.target.value
                                        )
                                    }

                                    className="
                                        w-full
                                        mt-2
                                        bg-[#F8F8FB]
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-gray-500
                                        placeholder:text-gray-400
                                        outline-none
                                        focus:ring-2
                                        focus:ring-[#B8A4FF]
                                        focus:border-[#B8A4FF]
                                    "
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

                    </section>

                    <EvaluationSectionEditor
                        secoes={secoes}
                        setSecoes={setSecoes}
                        adicionarSecao={adicionarSecao}

                    />

                    <EvaluationPreview
                        dados={dados}
                        secoes={secoes}

                    />

                </div>

            </main>

        </>

    );

};