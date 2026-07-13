import { Download, Info } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Comparativo de Resultados
        </h1>

        <p className="text-gray-500 mt-2 text-[15px]">
          Acompanhe o desempenho das avaliações e identifique oportunidades de
          melhoria.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">
          <Info size={18} className="text-gray-500" />
        </button>

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
          <Download size={18} />

          Exportar relatório
        </button>
      </div>
    </div>
  );
};