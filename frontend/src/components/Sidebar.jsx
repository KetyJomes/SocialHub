export const Sidebar = ({ isOpen }) => {
    return (
        <aside
            className={`
                h-screen
                bg-white
                transition-all
                duration-300
                ${isOpen ? "w-64" : "w-20"}
            `}
        >
            {/* Conteúdo */}
        </aside>
    );
};