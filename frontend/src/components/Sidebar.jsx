export const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 top-[8vh]
                    left-0"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`
                    fixed
                    top-[8vh]
                    left-0
                    h-screen
                    w-72
                    bg-white
                    shadow-2xl
                    z-50
                    transform
                    transition-transform
                    duration-300
                    ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <div className="p-6">

                    <h1 className="text-2xl font-bold mb-8">
                        Menu
                    </h1>

                    <div className="flex flex-col gap-4">

                        <button className="text-left hover:bg-gray-100 rounded-lg p-3">
                            Início
                        </button>

                        <button className="text-left hover:bg-gray-100 rounded-lg p-3">
                            Avaliações
                        </button>

                        <button className="text-left hover:bg-gray-100 rounded-lg p-3">
                            Resultados
                        </button>

                        <button className="text-left hover:bg-gray-100 rounded-lg p-3">
                            Feedback 360
                        </button>

                    </div>

                </div>
            </aside>
        </>
    );
};