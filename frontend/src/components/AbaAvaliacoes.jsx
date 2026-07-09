import { LinhaAvaliacao } from "./LinhaAvaliacao";


export const AbaAvaliacoes = ({
    avaliacoes,
    responderAvaliacao
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


                    {
                        avaliacoes.map(avaliacao =>

                            <LinhaAvaliacao

                                key={avaliacao.id}

                                avaliacao={avaliacao}

                                responderAvaliacao={responderAvaliacao}

                            />

                        )
                    }


                </tbody>


            </table>


        </div>

    );

};