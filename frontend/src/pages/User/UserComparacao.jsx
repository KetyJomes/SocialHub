import { useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { DashboardHeader } from "../../components/DashboardHeader";
import { SummaryCards } from "../../components/SummaryCards";
import { EvaluationCard } from "../../components/EvaluationCard";

import {
    Award,
    Target,
    Users,
    TrendingUp,
    MessageCircle,
    Lightbulb,
    Pencil,
    Save
} from "lucide-react";



export const UserComparacao = () => {


    const [isOpen, setIsOpen] = useState(false);

    const [editando, setEditando] = useState(false);





    const selfEvaluation = [

        {
            icon: Award,
            title: "Foco no Cliente",
            description:
                "Demonstra capacidade de compreender as necessidades dos clientes internos e externos, buscando entregar soluções que agreguem valor.",
            status: "Muito bom",
            color: "green",
        },

        {
            icon: Target,
            title: "Qualidade",
            description:
                "Executa suas atividades seguindo padrões definidos, buscando excelência e melhoria contínua nos processos.",
            status: "Muito bom",
            color: "green",
        },

        {
            icon: Users,
            title: "Trabalho em Equipe",
            description:
                "Colabora com colegas, compartilha conhecimento e contribui para um ambiente de cooperação.",
            status: "Muito bom",
            color: "green",
        },

        {
            icon: TrendingUp,
            title: "Resultados",
            description:
                "Entrega resultados alinhados aos objetivos definidos e acompanha indicadores para evolução contínua.",
            status: "Muito bom",
            color: "green",
        },

        {
            icon: MessageCircle,
            title: "Comunicação",
            description:
                "Comunica informações e ideias de forma clara, mantendo alinhamento com diferentes públicos.",
            status: "Bom",
            color: "blue",
        },

        {
            icon: Lightbulb,
            title: "Inovação",
            description:
                "Propõe melhorias e identifica oportunidades para evolução dos processos.",
            status: "Regular",
            color: "orange",
        },

    ];







    const managerEvaluation = [

        {
            icon: Award,
            title: "Foco no Cliente",
            description:
                "Apresenta foco nas necessidades dos clientes buscando gerar valor através das suas entregas.",
            status: "Muito bom",
            color: "green",
        },

        {
            icon: Target,
            title: "Qualidade",
            description:
                "Mantém atenção aos detalhes e busca garantir qualidade nas atividades realizadas.",
            status: "Bom",
            color: "blue",
        },

        {
            icon: Users,
            title: "Trabalho em Equipe",
            description:
                "Contribui com o time, compartilha conhecimento e incentiva a colaboração.",
            status: "Muito bom",
            color: "green",
        },

        {
            icon: TrendingUp,
            title: "Resultados",
            description:
                "Entrega suas responsabilidades e busca alcançar os resultados esperados.",
            status: "Bom",
            color: "blue",
        },

        {
            icon: MessageCircle,
            title: "Comunicação",
            description:
                "Pode desenvolver ainda mais a clareza na comunicação e o alinhamento das informações compartilhadas.",
            status: "Regular",
            color: "orange",
        },

        {
            icon: Lightbulb,
            title: "Inovação",
            description:
                "Demonstra abertura para novas ideias e melhorias.",
            status: "Muito bom",
            color: "green",
        },

    ];
        return (

        <div className="flex min-h-screen bg-[#F7F8FC] p-8">



            <Sidebar

                isOpen={isOpen}

                setIsOpen={setIsOpen}

            />





            <div className="flex-1 flex flex-col">



                <Header

                    isOpen={isOpen}

                    setIsOpen={setIsOpen}

                />







                <main className="flex-1 p-8 mt-16">



                    <div className="max-w-[1700px] mx-auto">





                        <DashboardHeader>


                            <button

                                onClick={() => setEditando(!editando)}

                                className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-blue-600
                                    text-white
                                    font-semibold
                                    hover:bg-blue-700
                                    transition
                                    shadow-sm
                                "

                            >


                                {
                                    editando

                                    ?

                                    <>

                                        <Save size={18}/>

                                        Salvar

                                    </>


                                    :

                                    <>

                                        <Pencil size={18}/>

                                        Editar

                                    </>

                                }


                            </button>



                        </DashboardHeader>








                        <div className="flex gap-6 mt-8 items-start">






                            {/* RESUMO */}



                            <div className="w-[22%] min-w-[280px]">


                                <SummaryCards />


                            </div>









                            {/* AVALIAÇÕES */}



                            <div

                                className="
                                    flex
                                    flex-1
                                    gap-6
                                    max-h-[70vh]
                                    overflow-y-auto
                                    pr-2
                                    scrollbar-thin
                                    scrollbar-thumb-gray-300
                                    scrollbar-track-transparent
                                "

                            >





                                <div className="flex-1">



                                    <EvaluationCard

                                        title="Autoavaliação"

                                        color="blue"

                                        data={selfEvaluation}

                                        editando={editando}

                                    />



                                </div>









                                <div className="flex-1">



                                    <EvaluationCard

                                        title="Avaliação Gestão"

                                        color="purple"

                                        data={managerEvaluation}

                                        editando={editando}

                                    />



                                </div>






                            </div>





                        </div>





                    </div>





                </main>




            </div>




        </div>


    );

};