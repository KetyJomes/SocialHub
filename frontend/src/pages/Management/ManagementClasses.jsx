//Visualização das turmas
import { useState } from "react";
import { GraduationCap, Info, BarChart3 } from "lucide-react";
import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";
import { CardTurmaRanking } from "../../components/CardTurmaRanking";
import { GraficoTurmas } from "../../components/GraficoTurmas";

export const ManagementClasses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const turmas = [
    {
      nome: "DTA 3",
      nota: 98,
    },

    {
      nome: "MAN 8",
      nota: 96,
    },

    {
      nome: "TDS 6",
      nota: 90,
    },

    {
      nome: "MEC 12",
      nota: 86,
    },

    {
      nome: "DTA 2",
      nota: 80,
    }
  ];

  return (
    <>
      <SidebarManagement isOpen={isOpen} setIsOpen={setIsOpen} />

      <main>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="pt-28 px-10 pb-10">
          <h1 className="text-3xl font-bold">Turmas</h1>

          <p className="text-gray-500">
            Visualize o desempenho geral de todas as turmas.
          </p>

          <section className=" grid grid-cols-2 gap-8 mt-8 ">
            {/* Card Rankings das Turmas */}
            <div className=" bg-white rounded-xl border border-gray-100 shadow-sm p-5 ">
              <div className="flex items-center gap-3 mb-5">
                <div className=" w-10 h-10 rounded-full bg-[#0291F7]/15 flex items-center justify-center ">
                  <GraduationCap size={20} className="text-[#0291F7]" />
                </div>

                <h2 className="text-xl font-bold">Desempenho das Turmas</h2>
              </div>

              <div className=" h-[520px] space-y-3 overflow-y-auto pr-2 ">
                {turmas.map((turma, index) => (
                  <CardTurmaRanking
                    key={index}
                    turma={turma.nome}
                    nota={turma.nota}
                  />
                ))}
              </div>
            </div>

            {/* Gráfico Desempenho Geral*/}
            <div className=" bg-white rounded-xl border border-gray-100 shadow-sm p-5 ">
              <div className="flex items-center gap-3 mb-5">
                <div className=" w-10 h-10 rounded-full bg-[#0291F7]/15 flex items-center justify-center ">
                  <BarChart3 size={20} className="text-[#0291F7]" />
                </div>

                <h2 className="text-xl font-bold">Desempenho Geral</h2>
              </div>

              <GraficoTurmas dados={turmas} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
