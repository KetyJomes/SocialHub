import {
    Eye,
    Pencil,
    UserRound,
    CheckCircle2,
    Clock3
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export const LinhaColaborador360 = ({ colaborador }) => {

    const navigate = useNavigate();

    const respondido = colaborador.status === "Avaliado";

    return (

        <div className="grid grid-cols-12 items-center px-8 py-5 border-b border-gray-100 hover:bg-violet-50 transition-all duration-200">

            {/* Colaborador */}

            <div className="col-span-5 flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">

                    <UserRound
                        size={22}
                        className="text-violet-600"
                    />

                </div>

                <div>

                    <h3 className="font-semibold text-gray-800">
                        {colaborador.nome}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {colaborador.email}
                    </p>

                </div>

            </div>

            {/* Cargo */}

            <div className="col-span-2">

                <span className="text-gray-700">
                    {colaborador.cargo}
                </span>

            </div>

            {/* Status */}

            <div className="col-span-2 flex justify-center">

                {
                    respondido ?

                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">

                            <CheckCircle2 size={16} />

                            Avaliado

                        </span>

                        :

                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">

                            <Clock3 size={16} />

                            Pendente

                        </span>

                }

            </div>

            {/* Botão */}

            <div className="col-span-3 flex justify-center">

                {
                    respondido ?

                        <button
                            onClick={() => navigate(`/avaliacao360/${colaborador.id}`)}
                            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-violet-600 text-violet-600 font-medium hover:bg-violet-600 hover:text-white transition"
                        >

                            <Eye size={18} />

                            Visualizar

                        </button>

                        :

                        <button
                            onClick={() => navigate(`/avaliacao360/${colaborador.id}`)}
                            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition"
                        >

                            <Pencil size={18} />

                            Responder

                        </button>

                }

            </div>

        </div>

    );

};