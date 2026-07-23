import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LinhaAvaliacaoDash = ({ avaliacao }) => {

    const navigate = useNavigate();

    const tipoClasses = {
        "360°": "text-purple-600",
        Gestão: "text-green-600",
        Autoavaliação: "text-blue-600"
    };

    return (

        <tr className="border-b last:border-none hover:bg-gray-50 transition">

            <td className="py-5 text-left">

                <div>

                    <h4 className="font-semibold text-sm">
                        {avaliacao.nome}
                    </h4>

                    <span className="text-xs text-gray-500">
                        {avaliacao.subtitulo}
                    </span>

                </div>

            </td>

            <td className="text-center">

                <span
                    className={`inline-flex px-3 py-1 rounded-full text-md ${tipoClasses[avaliacao.tipo]}`}
                >
                    {avaliacao.tipo}
                </span>

            </td>

            <td className="text-center text-gray-600">
                {avaliacao.data}
            </td>

            <td className="text-center">

                <span className="inline-flex text-green-600 px-3 py-1 rounded-full text-md">
                    {avaliacao.situacao}
                </span>

            </td>

            <td className="text-center">

                <div className="flex flex-col items-center">

                    <p className="font-bold text-lg text-blue-600">
                        {avaliacao.desempenho}%
                    </p>

                    <span className="text-xs text-gray-500">
                        {avaliacao.conceito}
                    </span>

                </div>

            </td>

            <td className="text-center">

               <button
                className="inline-flex items-center gap-2 border border-blue-500 text-white rounded-lg px-4 py-2 bg-[#0291F7] hover:bg-blue-700 transition"
                onClick={() => 
                    avaliacao.tipo === "Autoavaliação"
                        ? navigate("/realizar-avaliacao")
                        : navigate("/comparacao")
                }
            >

                Ver resultados

                <ChevronRight size={16} />

            </button>

            </td>

        </tr>

    );

};