import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { StudentTestsControlTable } from "../components/Management/StudentTestsControlTable";


export const ManagementSelfEvaluation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [abaAtiva, setAbaAtiva] = useState("disponiveis");

    const { turma, aluno } = useParams();


    const [avaliacoes, setAvaliacoes] = useState([

        {
            id: 1,
            nome: "1º Trimestre",
            descricao: "Autoavaliação de desempenho do aluno",
            tipo: "Autoavaliação",
            disponibilizada: "01/07/2026",
            infoDisponibilizada: "Disponível",
            prazo: "20/07/2026",
            infoPrazo: "10 dias restantes",
            status: "Pendente",
        },


        {
            id: 2,
            nome: "Avaliação Técnica",
            descricao: "Avaliação das competências técnicas",
            tipo: "Autoavaliação",
            disponibilizada: "20/06/2026",
            infoDisponibilizada: "há 22 dias",
            prazo: "30/06/2026",
            infoPrazo: "prazo encerrado",
            status: "Em atraso",
        },


        {
            id: 3,
            nome: "3º Trimestre",
            descricao: "Autoavaliação de desempenho do aluno",
            tipo: "Autoavaliação",
            disponibilizada: "01/01/2026",
            infoDisponibilizada: "Finalizada",
            prazo: "20/01/2026",
            infoPrazo: "Concluída",
            status: "Respondida",
        }

    ]);



    function responderAvaliacao(id) {

        setAvaliacoes(prev =>

            prev.map(avaliacao =>

                avaliacao.id === id

                    ?

                    {
                        ...avaliacao,

                        status: "Respondida",

                        acao: "Visualizar",

                        infoPrazo: "Concluída"
                    }

                    :

                    avaliacao

            )

        );

    }



    const disponiveis = avaliacoes.filter(

        avaliacao =>

            avaliacao.status === "Pendente" ||

            avaliacao.status === "Em atraso"

    );



    const feitas = avaliacoes.filter(

        avaliacao =>

            avaliacao.status === "Respondida"

    );



    return (

        <>

            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            {isOpen && (

                <div
                    className="
                        fixed
                        inset-0
                        bg-black/20
                        z-40
                    "
                    onClick={() => setIsOpen(false)}
                />

            )}



            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />



            <main className="mt-[8vh] h-[calc(100vh-11.5vh)]">


                <div className="p-10 h-full flex flex-col">


                    <h1 className="text-3xl font-bold">

                        {aluno}

                    </h1>



                    <h2 className="text-lg font-semibold text-gray-700 mt-1">

                        {turma}

                    </h2>



                    <p className="text-gray-500 mt-2 mb-6">

                        Autoavaliações realizadas pelo aluno.

                    </p>



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

                                    "text-[#B8A4FF] border-[#B8A4FF] font-semibold"

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

                                    "text-[#B8A4FF] border-[#B8A4FF] font-semibold"

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
                            abaAtiva === "disponiveis" &&

                            (

                                <StudentTestsControlTable
                                    avaliacoes={disponiveis}
                                    tipoAba="disponiveis"
                                />

                            )
                        }



                        {
                            abaAtiva === "feitas" &&

                            (

                                <StudentTestsControlTable
                                    avaliacoes={feitas}
                                    tipoAba="feitas"
                                />

                            )
                        }


                    </section>


                </div>


            </main>


        </>

    );

};