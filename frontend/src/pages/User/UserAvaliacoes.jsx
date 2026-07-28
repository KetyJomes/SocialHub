import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AbaAvaliacoes } from "../../components/AbaAvaliacoes";

import { evaluationsMock } from "../../data/evaluationsMock";

export const UserAvaliacoes = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [abaAtiva, setAbaAtiva] = useState("disponiveis");
    const [avaliacoes, setAvaliacoes] = useState(evaluationsMock);

    useEffect(() => {

        const avaliacoesSalvas =
            JSON.parse(
                localStorage.getItem("avaliacoesRespondidas")
            ) || {};

        setAvaliacoes(prev =>

            prev.map(avaliacao => {

                const avaliacaoSalva =
                    avaliacoesSalvas[avaliacao.id];

                if (avaliacaoSalva) {

                    if (avaliacaoSalva.finalizada) {

                        return {
                            ...avaliacao,
                            status: "Respondida",
                            acao: "Visualizar",
                            infoPrazo: "Concluída",
                            respostas: avaliacaoSalva.respostas
                        };

                    }

                    return {

                        ...avaliacao,
                        status: "Em andamento",
                        acao: "Continuar",
                        infoPrazo: "Salva",
                        respostas: avaliacaoSalva.respostas

                    };

                }
                return avaliacao;
            })

        );

    }, []);

    const disponiveis = avaliacoes.filter(

        avaliacao =>

            avaliacao.status === "Pendente" ||
            avaliacao.status === "Em andamento" ||
            avaliacao.status === "Em atraso"

    );

    const feitas = avaliacoes.filter(
        avaliacao =>
            avaliacao.status === "Respondida"
    );

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

            <main className="mt-[8vh] min-h-[calc(100vh-11.5vh)]">

                <div className="p-10">

                    <h1 className="font-bold text-3xl mb-2">
                        Avaliações
                    </h1>

                    <h2 className="text-gray-500 mb-5">
                        Confira as avaliações feitas e as que estão disponíveis para você.
                    </h2>

                    <section className="flex gap-8 border-b border-gray-300">

                        <button
                            onClick={() => setAbaAtiva("disponiveis")}
                            className={`
                                px-2
                                py-3
                                text-lg
                                border-b-2
                                cursor-pointer
                                ${
                                    abaAtiva === "disponiveis"
                                        ?
                                        "text-[#0291F7] border-[#0291F7] font-semibold"
                                        :
                                        "text-gray-500 border-transparent"
                                }
                            `}

                        >
                            Disponíveis ({disponiveis.length})
                        </button>

                        <button

                            onClick={() => setAbaAtiva("feitas")}
                            className={`
                                px-2
                                py-3
                                text-lg
                                border-b-2
                                cursor-pointer
                                ${

                                    abaAtiva === "feitas"
                                        ?
                                        "text-[#0291F7] border-[#0291F7] font-semibold"
                                        :
                                        "text-gray-500 border-transparent"
                                }
                            `}

                        >
                            Feitas ({feitas.length})
                        </button>

                    </section>

                    <section className="mt-8">
                        {
                            abaAtiva === "disponiveis" && (
                                <AbaAvaliacoes
                                    avaliacoes={disponiveis}
                                />
                            )
                        }

                        {
                            abaAtiva === "feitas" && (
                                <AbaAvaliacoes
                                    avaliacoes={feitas}
                                    modoVisualizacao={true}
                                />
                            )

                        }

                    </section>

                </div>
                
            </main>
        </>
    );
};