import { useState } from "react";
import { 
    Users,
    UserRound,
    Handshake,
    UserCheck,
    ChartColumn
} from "lucide-react";


export const CardAvaliacao360 = ({ tipo, descricao, status }) => {
    const [clicado, setClicado] = useState(false);

    function escolherIcone(){

        if(tipo.includes("Alunos")){
            return <Users size={20}/>;
        }

        if(tipo.includes("Pares")){
            return <Handshake size={20}/>;
        }

        if(tipo.includes("Líder")){
            return <UserRound size={20}/>;
        }

        if(tipo.includes("Equipe")){
            return <UserCheck size={20}/>;
        }

        return <ChartColumn size={20}/>;

    }
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
            "
        >
            <div className="flex items-center gap-3">
                <div
                    className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#F1EDFF]
                        text-[#B8A4FF]
                        flex
                        items-center
                        justify-center
                    "
                >
                    {escolherIcone()}
                </div>

                <div>
                    <h3 className="font-semibold text-gray-800">
                        {tipo}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {descricao}
                    </p>
                </div>

            </div>
            <div className="flex items-center gap-5">

                <div className="flex items-center gap-2">

                    <span
                        className={`
                            w-2
                            h-2
                            rounded-full

                            ${
                                status === "concluido"
                                ? "bg-green-500"
                                : "bg-yellow-400"
                            }
                        `}
                    />

                    <span className="text-sm text-gray-500">
                        {
                            status === "concluido"
                            ? "Concluído"
                            : "Pendente"
                        }
                    </span>

                </div>

                <button
                    onClick={() => setClicado(!clicado)}
                    className={`
                        text-2xl
                        font-bold
                        text-[#B8A4FF]
                        transition

                        ${
                            clicado
                            ? "scale-125"
                            : ""
                        }
                    `}
                >
                    ›
                </button>
            </div>
        </div>
    )

}