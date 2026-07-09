import { CalendarDays, Eye } from "lucide-react";


export const LinhaAvaliacao = ({
    avaliacao,
    responderAvaliacao
}) => {


    const statusClasses = {

        "Pendente":
            "bg-blue-100 text-blue-600",

        "Em andamento":
            "bg-yellow-100 text-yellow-700",

        "Em atraso":
            "bg-red-100 text-red-600",

        "Respondida":
            "bg-green-100 text-green-700"

    };



    return (

        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">


            <td className="px-6 py-5">


                <div className="flex items-center gap-4">


                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${avaliacao.bgIcon}`}>


                        <img

                            src={avaliacao.icon}

                            alt=""

                            className="w-7"

                        />


                    </div>



                    <div>


                        <h1 className="font-semibold text-gray-800">

                            {avaliacao.nome}

                        </h1>


                        <p className="text-sm text-gray-500">

                            {avaliacao.descricao}

                        </p>


                    </div>


                </div>


            </td>




            <td className="text-center">

                {avaliacao.tipo}

            </td>





            <td className="text-center">


                <div className="flex flex-col items-center">


                    <div className="flex items-center gap-2">

                        <CalendarDays size={15}/>

                        {avaliacao.disponibilizada}

                    </div>


                    <span className="text-sm text-gray-500">

                        {avaliacao.infoDisponibilizada}

                    </span>


                </div>


            </td>





            <td className="text-center">


                <div className="flex flex-col items-center">


                    <div className="flex items-center gap-2">

                        <CalendarDays size={15}/>

                        {avaliacao.prazo}

                    </div>


                    <span className={`text-sm ${
                        avaliacao.infoPrazo === "Vencido"
                        ?
                        "text-red-500"
                        :
                        "text-gray-500"
                    }`}>

                        {avaliacao.infoPrazo}

                    </span>


                </div>


            </td>





            <td className="text-center">


                <span className={`px-4 py-2 rounded-lg text-sm font-medium ${statusClasses[avaliacao.status]}`}>

                    ● {avaliacao.status}

                </span>


            </td>


gity 


            <td className="text-center">


                <button

                    onClick={() => 

                        avaliacao.status !== "Respondida" && 
                        responderAvaliacao(avaliacao.id)

                    }

                    className="flex items-center gap-2 mx-auto border border-[#6C63FF] text-[#6C63FF] rounded-lg px-4 py-2 hover:bg-[#6C63FF] hover:text-white transition cursor-pointer"

                >


                    <Eye size={16}/>


                    {avaliacao.acao}


                </button>


            </td>


        </tr>

    );

};