import supergraphic from "../assets/supergraphic.svg";
import boschLogo from "../assets/BoschLogo.png";
import menu from "../assets/menu.png";

export const Header = ({ isOpen, setIsOpen }) => {
    return (
        <header className="fixed top-0 left-0 w-full h-[9vh] bg-white z-50 flex flex-col">

            <div className="flex-1 flex items-center justify-between px-6">

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer"
                >
                    <img
                        src={menu}
                        alt="Menu"
                        className="h-8 w-auto"
                    />
                </button>

                <h1 className="text-2xl font-bold">
                    SOCIALHUB
                </h1>

                <img
                    src={boschLogo}
                    alt="Bosch"
                    className="h-12 w-auto"
                />

            </div>

            <div className="h-[1.5vh]">
                <img
                    src={supergraphic}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

        </header>
    );
}