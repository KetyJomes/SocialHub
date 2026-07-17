import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { EvaluationManagementView } from "../components/EvaluationManagementView";

export const EvaluationManagement = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [abaAtiva, setAbaAtiva] = useState(
        location.state?.abaInicial || "avaliacoes"
    );

    return (
        <>
            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            {isOpen && (

                <div
                    className="fixed inset-0 bg-black/20 z-40"
                    onClick={() => setIsOpen(false)}
                />

            )}

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="mt-[8vh] h-[calc(100vh-11.5vh)]">

                <div className="p-10">

                    <h1 className="text-3xl font-bold">
                        Gerenciar Avaliações
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Crie, reutilize e acompanhe todas as avaliações do sistema.
                    </p>

                    <EvaluationManagementView
                        abaAtiva={abaAtiva}
                        setAbaAtiva={setAbaAtiva}
                    />

                </div>

            </main>

        </>

    );

};