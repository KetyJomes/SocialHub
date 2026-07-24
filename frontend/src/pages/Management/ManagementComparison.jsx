import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";

import { SummaryCards } from "../../components/SummaryCards";
import { EvaluationCard } from "../../components/EvaluationCard";

import {
  Award,
  Target,
  Users,
  TrendingUp,
  MessageCircle,
  Lightbulb,
  Download,
  Save,
  Pencil,
  Info
} from "lucide-react";

export const ManagementComparison = () => {

  const [isOpen, setIsOpen] = useState(false);

  const { turma, aluno } = useParams();

  const [feedback, setFeedback] = useState("");

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
    <>
      <SidebarManagement
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main className="mt-[8vh] p-8">

        <div className="max-w-[1700px] mx-auto">

          <div className="flex justify-between items-start">

            <div>

              <h1 className="text-3xl font-bold">
                Feedback Comparativo
              </h1>

              <p className="text-lg font-semibold mt-2">
                {aluno}
              </p>

              <p className="text-gray-500">
                {turma}
              </p>

              <p className="text-gray-500 mt-2">
                Compare a autoavaliação do aluno com a avaliação realizada pelo gestor e registre um feedback.
              </p>

            </div>

            <div className="flex items-center gap-4">


            {/* INFORMAÇÃO */}

            <button
              className="
                w-9
                h-9
                rounded-full
                border
                border-gray-200
                flex
                items-center
                justify-center
                hover:bg-gray-100
                transition
              "
            >

              <Info
                size={18}
                className="text-gray-500"
              />

            </button>



            {/* EXPORTAR */}

            <button

              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-xl
                bg-white
                border
                border-blue-500
                text-blue-600
                font-semibold
                hover:bg-blue-50
                transition
                shadow-sm
              "

            >

              <Download size={18}/>

              Exportar relatório

            </button>

            {/* EDITAR */}

            <button

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

              <Pencil size={18}/>

              Editar

            </button>


          </div>

          </div>

          <div className="flex gap-6 mt-8 items-start">

            {/* Cards de resumo (os gráficos iguais ao do aluno) */}
            <div className="w-[22%] min-w-[300px]">

              <SummaryCards />

            </div>

            {/* Comparação */}
            <div
              className="
                flex
                flex-1
                gap-6
                max-h-[72vh]
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
                />

              </div>

              <div className="flex-1">

                <EvaluationCard
                  title="Avaliação do Gestor"
                  color="purple"
                  data={managerEvaluation}
                />

              </div>

            </div>

          </div>

          {/* Feedback */}

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              p-6
              mt-8
            "
          >

            <h2 className="text-2xl font-bold">
              Feedback do Gestor
            </h2>

            <p className="text-gray-500 mt-2">
              Utilize este espaço para registrar um feedback construtivo ao aluno com base na comparação entre a autoavaliação e a avaliação do gestor.
            </p>

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={8}
              placeholder="Digite o feedback..."
              className="
                w-full
                mt-6
                rounded-xl
                border
                border-gray-300
                p-4
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-[#0291F7]
              "
            />

            <div className="flex justify-end mt-6">

              <button
                className="
                  flex
                  items-center
                  gap-2
                  bg-[#0291F7]
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-[#0278d2]
                  transition
                "
              >

                <Save size={18} />

                Salvar Feedback

              </button>

            </div>

          </div>

        </div>

      </main>
    </>
  );

};