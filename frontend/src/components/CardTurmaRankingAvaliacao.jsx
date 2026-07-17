import {
    Users,
    CheckCircle,
    Clock,
    BarChart3,
    Star,
    Eye
} from "lucide-react";


export const CardTurmaRankingAvaliacao = ({ turma }) => {


    const statusClasses = {

        "Concluída":
            "bg-green-100 text-green-700",

        "Em andamento":
            "bg-yellow-100 text-yellow-700",

        "Baixa adesão":
            "bg-red-100 text-red-700"

    };



    return (

        <div
            className="
                w-full
                bg-gray-50
                rounded-xl
                border
                border-gray-100
                p-5
                hover:shadow-md
                transition
            "
        >



            <div
                className="
                    flex
                    justify-between
                    items-center
                "
            >


                <h3
                    className="
                        text-xl
                        font-bold
                    "
                >

                    {turma.nome}

                </h3>



                <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${statusClasses[turma.status]}
                    `}
                >

                    {turma.status}

                </span>



            </div>





            <div
                className="
                    grid
                    grid-cols-5
                    gap-5
                    mt-6
                "
            >



                <div className="flex items-center gap-3">

                    <Users
                        size={22}
                        className="text-[#B8A4FF]"
                    />

                    <div>

                        <p className="text-xs text-gray-500">
                            Alunos
                        </p>


                        <p className="font-bold text-lg">
                            {turma.alunos}
                        </p>


                    </div>

                </div>





                <div className="flex items-center gap-3">

                    <CheckCircle
                        size={22}
                        className="text-green-500"
                    />

                    <div>

                        <p className="text-xs text-gray-500">
                            Respondidas
                        </p>


                        <p className="font-bold text-lg">
                            {turma.respondidas}
                        </p>


                    </div>

                </div>





                <div className="flex items-center gap-3">

                    <Clock
                        size={22}
                        className="text-yellow-500"
                    />

                    <div>

                        <p className="text-xs text-gray-500">
                            Pendentes
                        </p>


                        <p className="font-bold text-lg">
                            {turma.pendentes}
                        </p>


                    </div>

                </div>





                <div className="flex items-center gap-3">

                    <BarChart3
                        size={22}
                        className="text-[#B8A4FF]"
                    />


                    <div>

                        <p className="text-xs text-gray-500">
                            Adesão
                        </p>


                        <p className="font-bold text-lg">
                            {turma.adesao}%
                        </p>


                    </div>


                </div>





                <div className="flex items-center gap-3">

                    <Star
                        size={22}
                        className="text-yellow-500"
                    />


                    <div>

                        <p className="text-xs text-gray-500">
                            Nota média
                        </p>


                        <p className="font-bold text-lg">
                            {turma.nota}
                        </p>


                    </div>


                </div>



            </div>





            <div
                className="
                    flex
                    justify-end
                    mt-6
                "
            >


                <button
                    className="
                        flex
                        items-center
                        gap-2
                        text-[#B8A4FF]
                        font-semibold
                        hover:underline
                    "
                >

                    <Eye size={18}/>

                    Visualizar

                </button>


            </div>



        </div>

    );

};