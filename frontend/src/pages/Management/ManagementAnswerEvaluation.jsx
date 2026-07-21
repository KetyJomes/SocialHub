import { useParams } from "react-router-dom";
import { useState } from "react";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";
import { ManagementEvaluationTable } from "../../components/ManagementEvaluationTable";

import { evaluation } from "../../data/evaluation";


export const ManagementAnswerEvaluation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { turma, aluno } = useParams();

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

            <main className="mt-[8vh] p-8">
                <div className="w-[90vw] mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold">
                                {aluno}
                            </h1>
                            <span className="text-3xl font-bold">
                                /
                            </span>
                            <span className="text-3xl font-bold">
                                {turma}
                            </span>

                        </div>
                        <p className="text-gray-500 mt-2">
                            Responda a avaliação do aluno.
                        </p>
                    </div>
                    <ManagementEvaluationTable
                        data={evaluation}
                        answers={{}}
                        onSelect={() => {}}
                        readOnly={false}
                    />
                </div>
            </main>
        </>

    );

};