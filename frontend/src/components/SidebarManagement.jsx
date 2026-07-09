import {
    House,
    ClipboardList,
    ClipboardCheck,
    GraduationCap,
    ChevronDown,
    ChevronRight,
} from "lucide-react";

import { useState } from "react";

export const SidebarManagement = ({ isOpen }) => {

    const [abrirAvaliacoes, setAbrirAvaliacoes] = useState(false);

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
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >

            <nav className="mt-6 px-4">

                {isOpen && (
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-2 px-6">
                        Menu
                    </h2>
                )}

                <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100">
                    <House size={20} />
                    {isOpen && <span>Home</span>}
                </button>

                <button
                    onClick={() => setAbrirAvaliacoes(!abrirAvaliacoes)}
                    className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100"
                >

                    <div className="flex items-center gap-3">
                        <ClipboardList size={20} />
                        {isOpen && <span>Avaliações</span>}
                    </div>

                    {isOpen &&
                        (abrirAvaliacoes ? (
                            <ChevronDown size={18} />
                        ) : (
                            <ChevronRight size={18} />
                        ))}
                </button>

                {isOpen && abrirAvaliacoes && (
                    <div className="ml-8 mt-1 space-y-2">

                        <button className="block text-gray-600 hover:text-[#B8A4FF]">
                            Enviadas
                        </button>

                        <button className="block text-gray-600 hover:text-[#B8A4FF]">
                            Recebidas
                        </button>

                    </div>
                )}

                <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100">
                    <ClipboardCheck size={20} />
                    {isOpen && <span>Gerenciar Avaliações</span>}
                </button>

                <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100">
                    <GraduationCap size={20} />
                    {isOpen && <span>Turmas</span>}
                </button>

            </nav>

        </aside>
    );
};