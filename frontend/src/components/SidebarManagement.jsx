import {
    House,
    ClipboardCheck,
    GraduationCap,
    MessageSquareQuote,
    LogOut
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export const SidebarManagement = ({ isOpen }) => {

    const navigate = useNavigate();

    return (
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
                    onClick={() => navigate("/management-main")}
                    className="
                        flex
                        items-center
                        gap-3
                        w-full
                        p-3
                        rounded-lg
                        hover:bg-gray-100
                    "
                >
                    <House size={20} />

                    {isOpen && <span>Home</span>}
                </button>

                {/* GERENCIAR AVALIAÇÕES */}
                <button
                    onClick={() => navigate("/management-evaluations")}
                    className="
                        flex
                        items-center
                        gap-3
                        w-full
                        p-3
                        rounded-lg
                        hover:bg-gray-100
                    "
                >
                    <ClipboardCheck size={20} />

                    {isOpen && (
                        <span>
                            Gerenciar Avaliações
                        </span>
                    )}
                </button>

                {/* TURMAS */}
                <button
                    onClick={() => navigate("/management-classes")}
                    className="
                        flex
                        items-center
                        gap-3
                        w-full
                        p-3
                        rounded-lg
                        hover:bg-gray-100
                    "
                >
                    <GraduationCap size={20} />

                    {isOpen && <span>Turmas</span>}
                </button>

                {/* FEEDBACKS */}

                <button
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

                        {isOpen && <span>Feedback</span>}
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

                    {isOpen && (
                        <span>
                            Sair
                        </span>
                    )}
                </button>

            </div>

        </aside>
    );
};