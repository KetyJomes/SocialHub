import { CardManagementEvaluation } from "./CardManagementEvaluation";

export const AbaManagementEvaluation = ({
    avaliacoes,
    responderAvaliacao,
    podeAvaliar = true
}) => {

    return (

        <div className="w-full overflow-x-auto">

            <table className="w-full">

                <thead>

                    <tr className="border-b text-gray-500">

                        <th className="text-left px-6 py-4">
                            Avaliação
                        </th>

                        <th>
                            Tipo
                        </th>

                        <th>
                            Disponibilizada
                        </th>

                        <th>
                            Prazo
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Ação
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {avaliacoes.map((avaliacao) => (

                        <CardManagementEvaluation
                            key={avaliacao.id}
                            avaliacao={avaliacao}
                            responderAvaliacao={responderAvaliacao}
                            podeAvaliar={podeAvaliar}
                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

};