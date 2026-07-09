import { useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { EvaluationTable } from "../components/EvaluationTable";

import { evaluation } from "../data/evaluation";

export const UserRealizarAvaliacao = () => {

    const [answers, setAnswers] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (topicId, option) => {
        setAnswers((prev) => ({
            ...prev,
            [topicId]: option,
        }));
    };

    return (
        <>
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="p-8 overflow-y-auto mt-[8vh]">

                <div className="w-[80vw] mx-auto">

                    <h1 className="text-3xl font-bold">
                        Avaliação 360°
                    </h1>

                    <p className="text-gray-500 mt-2 mb-8">
                        Escolha apenas uma alternativa para cada competência.
                    </p>

                    <EvaluationTable
                        data={evaluation}
                        answers={answers}
                        onSelect={handleSelect}
                    />

                    <div className="flex justify-center mt-10">

                        <button className="bg-[#21528A] text-white rounded-xl px-12 py-4">
                            Enviar Avaliação
                        </button>

                    </div>

                </div>

            </main>
        </>
    );
};