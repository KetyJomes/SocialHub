import {
    UserCog,
    User,
    UserRound,
    Users
} from "lucide-react";

export const CardAvaliacaoAluno = ({
    titulo,
    quantidade,
    ultima,
    tipo
}) => {

    function configuracao(tipo) {

        switch (tipo) {

            case "gestor":
                return {
                    Icone: UserCog,
                    fundo: "bg-[#EEF4FF]",
                    icone: "text-[#93C5FD]"
                };

            case "aluno":
                return {
                    Icone: User,
                    fundo: "bg-[#F0FDF4]",
                    icone: "text-[#86EFAC]"
                };

            case "auto":
                return {
                    Icone: UserRound,
                    fundo: "bg-[#FFFBEB]",
                    icone: "text-[#FDE68A]"
                };

            case "360":
                return {
                    Icone: Users,
                    fundo: "bg-[#F3E8FF]",
                    icone: "text-[#B8A4FF]"
                };

            default:
                return {
                    Icone: User,
                    fundo: "bg-gray-100",
                    icone: "text-gray-500"
                };

        }

    }

    const { Icone, fundo, icone } = configuracao(tipo);

    return (

        <div
            className="
                flex
                items-center
                justify-between
                p-4
                bg-white
                rounded-xl
                border
                border-gray-200
                transition
                hover:shadow-sm
                hover:-translate-y-1
                cursor-pointer
            "
        >

            <div className="flex items-center gap-4">

                <div
                    className={`
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        ${fundo}
                    `}
                >

                    <Icone
                        size={22}
                        className={icone}
                        strokeWidth={2}
                    />

                </div>

                <div>

                    <h3 className="font-semibold text-gray-800">
                        {titulo}
                    </h3>

                    <span className="text-sm text-gray-500">
                        {quantidade} avaliações
                    </span>

                    <p className="text-xs text-gray-400 mt-1">
                        Última: {ultima}
                    </p>

                </div>

            </div>

            <button
                className="
                    text-[#B8A4FF]
                    text-2xl
                    font-bold
                    transition
                    hover:scale-125
                "
            >
                ›
            </button>

        </div>

    );

};