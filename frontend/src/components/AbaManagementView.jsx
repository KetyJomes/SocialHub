import { CardManagementView } from "./CardManagementView";

export const AbaManagementView = ({
    avaliacoes,
    tipoAba
}) => {

    return (

        <div className="w-full overflow-x-auto">

            <table className="w-full">

                <thead>

                    <tr className="border-b text-gray-500">

                        <th className="text-left py-4 px-6">
                            Avaliação
                        </th>

                        <th className="text-center">
                            Tipo
                        </th>

                        <th className="text-center">
                            Disponibilizada
                        </th>

                        <th className="text-center">
                            Prazo
                        </th>

                        <th className="text-center">
                            Status
                        </th>

                        <th className="text-center">
                            Ação
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        avaliacoes.map((avaliacao) => (

                            <CardManagementView

                                key={avaliacao.id}

                                avaliacao={avaliacao}

                                tipoAba={tipoAba}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};