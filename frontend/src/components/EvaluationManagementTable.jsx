export const TestsControlTable = ({
    avaliacoes
}) => {

    return (

        <div
            className="
                bg-white
                rounded-xl
                border
                border-gray-200
                overflow-hidden
            "
        >

            <table className="w-full">

                <thead>
                    <tr className="border-b bg-gray-50 text-gray-500">

                        <th className="text-left px-6 py-4">
                            Título
                        </th>

                        <th className="text-center">
                            Tipo
                        </th>

                        <th className="text-center">
                            Disponibilização
                        </th>

                        <th className="text-center">
                            Prazo
                        </th>

                        <th className="text-center">
                            Recorrência
                        </th>

                        <th className="text-center">
                            Status
                        </th>

                        <th className="text-center">
                            Ações
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {
                        avaliacoes.length === 0 && (

                            <tr>

                                <td
                                    colSpan={7}
                                    className="
                                        text-center
                                        py-12
                                        text-gray-400
                                    "
                                >
                                    Nenhuma avaliação cadastrada.
                                </td>

                            </tr>

                        )
                    }

                </tbody>

            </table>

        </div>

    );

};