import {
    House,
    ClipboardList,
    ChartColumn,
    MessageSquareQuote,
    LogOut
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export const Sidebar = ({ isOpen, setIsOpen }) => {

    const navigate = useNavigate();

    return (
        <>
            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        bg-black/40
                        z-40
                        top-[72px]
                        left-0
                    "
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`
                    fixed
                    top-[72px]
                    left-0
                    h-[calc(100vh-72px)]
                    w-64
                    bg-white
                    border-r
                    border-gray-200
                    shadow-xl
                    transition-transform
                    duration-300
                    z-50
                    flex
                    flex-col
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <nav className="mt-6 px-4 flex-1">

                    {isOpen && (
                        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
                            Menu
                        </h2>
                    )}

                    {/* HOME */}
                    <button
                        onClick={() => navigate("/user-main")}
                        className="
                            flex
                            items-center
                            gap-3
                            w-full
                            p-3
                            rounded-lg
                            hover:bg-gray-100
                            transition
                        "
                    >
                        <House size={20} />

                        {isOpen && <span>Início</span>}
                    </button>

                    {/* AVALIAÇÕES */}
                    <button
                        onClick={() => navigate("/user-avaliacoes")}
                        className="
                            flex
                            items-center
                            gap-3
                            w-full
                            p-3
                            rounded-lg
                            hover:bg-gray-100
                            transition
                        "
                    >
                        <ClipboardList size={20} />

                        {isOpen && <span>Avaliações</span>}
                    </button>

                    {/* FEEDBACK 360 */}
                    <button
                        onClick={() => navigate("/360")}
                        className="
                            flex
                            items-center
                            gap-3
                            w-full
                            p-3
                            rounded-lg
                            hover:bg-gray-100
                            transition
                        "
                    >
                        <MessageSquareQuote size={20} />

                        {isOpen && <span>Avaliação 360</span>}
                    </button>

                    {/* RESULTADOS */}
                    <button
                        onClick={() => navigate("/resultados")}
                        className="
                            flex
                            items-center
                            gap-3
                            w-full
                            p-3
                            rounded-lg
                            hover:bg-gray-100
                            transition
                        "
                    >
                        <ChartColumn size={20} />

                        {isOpen && <span>Resultados</span>}
                    </button>


                </nav>

                {/* SAIR */}
                <div className="px-4 pb-6">

                    <button
                        onClick={() => navigate("/login")}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-3
                            w-full
                            p-3
                            rounded-lg
                            text-gray-500
                            hover:bg-gray-100
                            transition
                        "
                    >
                        <LogOut size={20} />

                        {isOpen && <span>Sair</span>}
                    </button>

                </div>
            </aside>
        </>
    );
};