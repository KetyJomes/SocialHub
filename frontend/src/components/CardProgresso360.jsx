import { Users, CircleCheckBig } from "lucide-react";

export const CardProgresso360 = ({ colaboradores }) => {

    const total = colaboradores.length;

    const respondidos = colaboradores.filter(
        colaborador => colaborador.status === "Avaliado"
    ).length;

    const porcentagem = Math.round((respondidos / total) * 100);

    return (

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

            <div className="flex justify-between items-center">

                <div>

                    <div className="flex items-center gap-3">

                        <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">

                            <CircleCheckBig
                                size={28}
                                className="text-violet-600"
                            />

                        </div>

                        <div>

                            <h2 className="text-2xl font-semibold text-gray-800">
                                Progresso da Avaliação
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Continue respondendo para concluir sua avaliação.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                        <Users
                            size={28}
                            className="text-blue-600"
                        />

                    </div>

                    <div className="text-right">

                        <h2 className="text-3xl font-bold text-gray-800">
                            {respondidos}/{total}
                        </h2>

                        <p className="text-gray-500">
                            colaboradores
                        </p>

                    </div>

                </div>

            </div>

            <div className="mt-8">

                <div className="flex justify-between mb-2">

                    <span className="text-sm font-medium text-gray-600">
                        Progresso
                    </span>

                    <span className="text-sm font-semibold text-violet-600">
                        {porcentagem}%
                    </span>

                </div>

                <div className="w-full h-4 rounded-full bg-gray-200 overflow-hidden">

                    <div
                        className="h-full bg-violet-600 rounded-full transition-all duration-500"
                        style={{
                            width: `${porcentagem}%`
                        }}
                    />

                </div>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">

                <div className="bg-violet-50 rounded-2xl p-5">

                    <p className="text-gray-500 text-sm">
                        Respondidas
                    </p>

                    <h2 className="text-3xl font-bold text-violet-600 mt-2">
                        {respondidos}
                    </h2>

                </div>

                <div className="bg-amber-50 rounded-2xl p-5">

                    <p className="text-gray-500 text-sm">
                        Pendentes
                    </p>

                    <h2 className="text-3xl font-bold text-amber-500 mt-2">
                        {total - respondidos}
                    </h2>

                </div>

                <div className="bg-blue-50 rounded-2xl p-5">

                    <p className="text-gray-500 text-sm">
                        Total
                    </p>

                    <h2 className="text-3xl font-bold text-blue-600 mt-2">
                        {total}
                    </h2>

                </div>

            </div>

        </div>

    );

};