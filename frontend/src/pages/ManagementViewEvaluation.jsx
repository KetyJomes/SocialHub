import { useParams } from "react-router-dom";
import { useState } from "react";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { ManagementEvaluationTable } from "../components/ManagementEvaluationTable";

import { evaluation } from "../data/evaluation";

export const ManagementViewEvaluation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { turma, aluno, id } = useParams();

    // Apenas exemplo. Depois virá da API.
    const answers = {
        1: "dentro",
        2: "acima",
        3: "abaixo",
        4: "dentro",
        5: "acima",
        6: "dentro"
    };

    return (

        <>

            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="mt-[8vh] p-8 overflow-y-auto">

                <div className="w-[90vw] mx-auto">

                    <div className="mb-8">

                        <div className="flex items-center gap-2">

                            <h1 className="text-3xl font-bold text-gray-900">
                                {aluno}
                            </h1>

                            <span className="text-3xl font-bold text-gray-900">
                                /
                            </span>

                            <span className="text-3xl font-bold text-gray-900">
                                {turma}
                            </span>

                        </div>

                        <p className="text-gray-500 mt-1">
                            Visualização da avaliação respondida. Esta avaliação não pode ser alterada.
                        </p>

                    </div>

                    <div className="flex justify-end mb-6">

                        <span
                            className="
                                bg-green-100
                                text-green-700
                                px-4
                                py-2
                                rounded-full
                                font-semibold
                            "
                        >
                            Respondida
                        </span>

                    </div>

                    <ManagementEvaluationTable
                        data={evaluation}
                        answers={answers}
                        onSelect={() => {}}
                        readOnly={true}
                    />

                </div>

            </main>

        </>

    );

};