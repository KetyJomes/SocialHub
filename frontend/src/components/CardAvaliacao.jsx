import { useState } from "react";
import { ClipboardCheck } from "lucide-react";


export const CardAvaliacao = ({
    nome,
    turma,
    tipo,
    status
}) => {


    const [clicado, setClicado] = useState(false);



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
                cursor-pointer
            "
        >


            <div className="flex items-center gap-3">


                <div
                    className="
                        w-9
                        h-9
                        rounded-full
                        bg-[#0291F7]/15
                        flex
                        items-center
                        justify-center
                    "
                >

                    <ClipboardCheck
                        size={18}
                        className="text-[#0291F7]"
                    />

                </div>



                <div>


                    <h3 className="font-semibold text-gray-800">
                        {nome}
                    </h3>


                    <p
                        className="
                            text-sm
                            text-gray-500
                            mt-1
                        "
                    >

                        {tipo}

                    </p>


                </div>


            </div>




            <div
                className="
                    flex
                    items-center
                    gap-3
                "
            >



                <span className="text-sm text-gray-500">
                    {turma}
                </span>




                <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium


                        ${
                            status === "Em atraso"

                            ?

                            "bg-red-100 text-red-700"

                            :

                            "bg-yellow-100 text-yellow-700"

                        }

                    `}
                >

                    {status}

                </span>




                <button

                    onClick={() => setClicado(!clicado)}

                    className="
                        text-[#0291F7]
                        text-2xl
                        font-bold
                    "

                >

                    ›

                </button>



            </div>


        </div>

    );

};