import { ManagementEvaluationTableRow } from "./ManagementEvaluationTableRow";

export const ManagementEvaluationTable = ({
    data,
    answers,
    onSelect
}) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-sm
                border
                border-gray-200
                overflow-hidden
            "
        >

            <div className="overflow-x-auto">

                <table className="w-full min-w-[1400px] table-fixed">

                    <thead className="bg-white sticky top-0 z-10">

                        <tr className="border-b border-gray-200">

                            <th
                                className="
                                    w-20
                                    px-4
                                    py-6
                                    text-center
                                    text-gray-600
                                    font-semibold
                                "
                            >
                                Nº
                            </th>

                            <th
                                className="
                                    w-[320px]
                                    px-6
                                    py-6
                                    text-left
                                    text-gray-600
                                    font-semibold
                                "
                            >
                                Competência
                            </th>

                            <th className="px-5 py-6 bg-red-50">

                                <div className="flex flex-col items-center">

                                    <span className="font-semibold text-gray-800">
                                        Crítico
                                    </span>

                                    <span className="text-xs text-center text-gray-500 mt-2">
                                        Muito abaixo do esperado
                                    </span>

                                </div>

                            </th>

                            <th className="px-5 py-6 bg-orange-50">

                                <div className="flex flex-col items-center">

                                    <span className="font-semibold text-gray-800">
                                        Abaixo
                                    </span>

                                    <span className="text-xs text-center text-gray-500 mt-2">
                                        Abaixo das expectativas
                                    </span>

                                </div>

                            </th>

                            <th className="px-5 py-6 bg-green-50">

                                <div className="flex flex-col items-center">

                                    <span className="font-semibold text-gray-800">
                                        Dentro
                                    </span>

                                    <span className="text-xs text-center text-gray-500 mt-2">
                                        Dentro das expectativas
                                    </span>

                                </div>

                            </th>

                            <th className="px-5 py-6 bg-blue-50">

                                <div className="flex flex-col items-center">

                                    <span className="font-semibold text-gray-800">
                                        Acima
                                    </span>

                                    <span className="text-xs text-center text-gray-500 mt-2">
                                        Acima das expectativas
                                    </span>

                                </div>

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            data.map((topic) => (

                                <ManagementEvaluationTableRow
                                    key={topic.id}
                                    topic={topic}
                                    answer={answers[topic.id]}
                                    onSelect={onSelect}
                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};