import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { AbaAvaliacoes } from "../../components/AbaAvaliacoes";

import { FileText } from "lucide-react";


export const UserAvaliacoes = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [abaAtiva, setAbaAtiva] = useState("disponiveis");

    const [avaliacoes, setAvaliacoes] = useState([

        {
            id: 1,

            nome: "Avaliação 360°",

            descricao: "Avaliação dos colaboradores",

            tipo: "Trimestral",

            disponibilizada: "01/07/2026",

            infoDisponibilizada: "Disponível",

            prazo: "20/07/2026",

            infoPrazo: "10 dias restantes",

            status: "Pendente",

            acao: "Responder",

            icon: FileText,

            bgIcon: "bg-[#EAF4FF]"

        },


        {
            id: 2,

            nome: "Avaliação Liderança",

            descricao: "Avaliação da liderança",

            tipo: "Semestral",

            disponibilizada: "01/01/2026",

            infoDisponibilizada: "Disponível",

            prazo: "30/01/2026",

            infoPrazo: "Vencido",

            status: "Em atraso",

            acao: "Responder",

            icon: FileText,

            bgIcon: "bg-red-100"

        },


        {
            id: 3,

            nome: "Avaliação Técnica",

            descricao: "Avaliação de competências",

            tipo: "Anual",

            disponibilizada: "01/03/2026",

            infoDisponibilizada: "Finalizada",

            prazo: "20/03/2026",

            infoPrazo: "Pendente",

            status: "Respondida",

            acao: "Visualizar",

            icon: FileText,

            bgIcon: "bg-green-100"

        },
        {
            id: 4,

            nome: "Avaliação Comportamental",

            descricao: "Avaliação de comportamento e relacionamento",

            tipo: "Trimestral",

            disponibilizada: "10/04/2026",

            infoDisponibilizada: "Disponível",

            prazo: "25/04/2026",

            infoPrazo: "Pendente",

            status: "Respondida",

            acao: "Responder",

            icon: FileText,

            bgIcon: "bg-green-100"

        },
        {
            id: 5,

            nome: "Avaliação de Clima Organizacional",

            descricao: "Pesquisa sobre o ambiente de trabalho",

            tipo: "Anual",

            disponibilizada: "15/07/2026",

            infoDisponibilizada: "Disponível",

            prazo: "30/07/2026",

            infoPrazo: "7 dias restantes",

            status: "Pendente",

            acao: "Responder",

            icon: FileText,

            bgIcon: "bg-yellow-100"
        }

    ]);


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


                    {/* TÍTULO */}

                    <h1 className="font-bold text-3xl mb-2">

                        Avaliações

                    </h1>


                    <h2 className="text-gray-500 mb-5">

                        Confira as avaliações feitas e as que estão disponíveis para você.

                    </h2>


                    {/* ABAS */}

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


                    {/* CONTEÚDO */}

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