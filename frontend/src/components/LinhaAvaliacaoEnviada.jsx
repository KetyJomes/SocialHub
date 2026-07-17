import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LinhaAvaliacaoEnviada = ({ avaliacao }) => {

    const navigate = useNavigate();

    const statusClasses = {

        "Publicada":
            "bg-blue-100 text-blue-600",

        "Em andamento":
            "bg-yellow-100 text-yellow-700",

        "Encerrada":
            "bg-green-100 text-green-700"

    };

    return (

        <tr className="border-b border-gray-100 hover:bg-gray-50 transition">

            <td className="py-5">

                <div>

                    <h3 className="font-semibold text-gray-800">

                        {avaliacao.nome}

                    </h3>

                </div>

            </td>

            <td className="text-center text-gray-600">

                {avaliacao.tipo}

            </td>

            <td className="text-center text-gray-600">

                {avaliacao.turma}

            </td>

            <td className="text-center text-gray-600">

                {avaliacao.postagem}

            </td>

            <td className="text-center text-gray-600">

                {avaliacao.prazo}

            </td>

            <td className="text-center">

                <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${statusClasses[avaliacao.status]}`}
                >

                    {avaliacao.status}

                </span>

            </td>

            <td>

                <div className="flex justify-center">

                    <button

                        onClick={() => navigate('/management-avaliacoes-turmas')}

                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"

                    >

                        <Eye size={18} />

                        Visualizar

                    </button>

                </div>

            </td>

        </tr>

    );

};