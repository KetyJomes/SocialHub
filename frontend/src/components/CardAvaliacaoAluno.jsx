import { useNavigate } from "react-router-dom";
import {
    UserCog,
    User,
    UserRound,
    Users
} from "lucide-react";

function configuracao(tipo) {

    switch(tipo) {

        case "gestor":

            return {
                Icone: UserCog,
                fundo: "bg-[#F1EDFF]",
                icone: "text-[#B8A4FF]"
            };


        case "aluno":

            return {
                Icone: User,
                fundo: "bg-blue-100",
                icone: "text-blue-500"
            };


        case "auto":

            return {
                Icone: UserRound,
                fundo: "bg-green-100",
                icone: "text-green-500"
            };


        case "360":

            return {
                Icone: Users,
                fundo: "bg-yellow-100",
                icone: "text-yellow-500"
            };


        default:

            return {
                Icone: User,
                fundo: "bg-gray-100",
                icone: "text-gray-500"
            };

    }

}

export const CardAvaliacaoAluno = ({
    titulo,
    quantidade,
    ultima,
    tipo,
    turma,
    aluno
}) => {

    const navigate = useNavigate();


    function abrirTela() {

        switch (tipo) {

            case "gestor":

                navigate(
                    `/management-student/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}/gestor`
                );

                break;


            case "aluno":

                navigate(
                    `/management-student-to-manager/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}`
                );

                break;


            case "auto":

                navigate(
                    `/management-self-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}`
                );

                break;


            case "360":

                navigate(
                    `/management-360-evaluation/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}`
                );

                break;

            case "lider-aluno":

                navigate(
                    `/management-student-to-leader/${encodeURIComponent(turma)}/${encodeURIComponent(aluno)}`
                );

                break;


            case "lider-turma":

                navigate(
                    `/management-leader-to-class/${encodeURIComponent(turma)}`
                );

                break;


            default:

                break;

        }

    }


    const { Icone, fundo, icone } = configuracao(tipo);


    return (

        <div
            onClick={abrirTela}
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