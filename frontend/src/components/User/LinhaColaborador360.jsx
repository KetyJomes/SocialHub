import { useNavigate } from "react-router-dom";

import {
    CheckCircle2,
    Clock3,
    Eye,
    ClipboardPen
} from "lucide-react";

export const LinhaColaborador360 = ({ colaborador }) => {

    const navigate = useNavigate();

    const avaliado = colaborador.status === "Avaliado";

    const abrirAvaliacao = () => {

        navigate(
            `/realizar-avaliacao?tipo=360&avaliado=${encodeURIComponent(colaborador.nome)}`
        );

    };

    return (

        <div className="grid grid-cols-12 items-center px-8 py-5 border-b border-gray-100 hover:bg-gray-50 transition">

            {/* Colaborador */}

            <div className="col-span-5 flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center">

                    <span className="text-violet-600 font-bold text-lg">

                        {colaborador.nome
                            .split(" ")
                            .map(nome => nome[0])
                            .slice(0, 2)
                            .join("")
                        }

                    </span>

                </div>

                <div>

                    <p className="font-semibold text-gray-800">
                        {colaborador.nome}
                    </p>

                    <p className="text-sm text-gray-400">
                        {colaborador.email}
                    </p>

                </div>

            </div>


            {/* Cargo */}

            <div className="col-span-2">

                <p className="text-gray-600">
                    {colaborador.cargo}
                </p>

            </div>


            {/* Status */}

            <div className="col-span-2 flex justify-center">

                {

                    avaliado ?

                        <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">

                            <CheckCircle2 size={16} />

                            Avaliado

                        </span>

                        :

                        <span className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">

                            <Clock3 size={16} />

                            Pendente

                        </span>

                }

            </div>


            {/* Ação */}

            <div className="col-span-3 flex justify-center">

                {

                    avaliado ?

                        <button
                            onClick={() => navigate('/realizar-avaliacao')}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
                        >

                            <Eye size={17} />

                            Visualizar

                        </button>

                        :

                        <button
                            onClick={abrirAvaliacao}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition"
                        >

                            <ClipboardPen size={17} />

                            Avaliar

                        </button>

                }

            </div>

        </div>

    );

};