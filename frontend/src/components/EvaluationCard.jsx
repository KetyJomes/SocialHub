import { useState } from "react";


export const EvaluationCard = ({
    title,
    color,
    data,
    editando
}) => {


    const [avaliacoes, setAvaliacoes] = useState(data);



    const titleColor =
        color === "purple"
            ? "text-purple-600"
            : "text-blue-600";





    const alterarResultado = (index, valor) => {


        const novaLista = [...avaliacoes];


        novaLista[index] = {

            ...novaLista[index],

            status: valor,

            color:
                valor === "Muito bom"
                    ? "green"
                    : valor === "Bom"
                    ? "blue"
                    : "orange"

        };


        setAvaliacoes(novaLista);


    };







    return (


        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">





            {/* CABEÇALHO */}


            <div className="px-8 py-6 border-b border-gray-100">



                <div>


                    <h2 className={`text-2xl font-bold ${titleColor}`}>

                        {title}

                    </h2>



                    <p className="text-gray-500 mt-1">

                        Resultado por competência

                    </p>



                </div>



            </div>









            {/* CONTEÚDO */}



            <div className="px-8 py-3 flex-1">



                {avaliacoes.map((item, index) => (



                    <div

                        className="
                            py-7
                            border-b
                            border-gray-100
                            last:border-none
                            flex
                            flex-col
                        "

                        key={index}

                    >






                        {/* COMPETÊNCIA */}


                        <h3 className="text-lg font-bold text-gray-800">

                            {item.title}

                        </h3>








                        {/* DESCRIÇÃO */}


                        <div className="
                            mt-4
                            bg-gray-50
                            border-l-4
                            border-blue-500
                            rounded-r-xl
                            p-5
                        ">


                            <p className="
                                text-[15px]
                                leading-6
                                text-gray-700
                                text-justify
                            ">


                                {item.description}


                            </p>



                        </div>









                        {/* RESULTADO */}



                        <div className="mt-5 flex flex-col gap-3">



                            <p className="
                                text-xs
                                uppercase
                                tracking-wider
                                text-gray-400
                                font-semibold
                            ">

                                Resultado da avaliação

                            </p>








                            {
                                editando

                                ?



                                (

                                    <select

                                        value={item.status}


                                        onChange={(e) =>

                                            alterarResultado(

                                                index,

                                                e.target.value

                                            )

                                        }


                                        className="
                                            w-full
                                            px-5
                                            py-3
                                            rounded-xl
                                            border
                                            border-gray-200
                                            bg-white
                                            text-gray-700
                                            font-semibold
                                            outline-none
                                            cursor-pointer
                                            focus:ring-2
                                            focus:ring-blue-300
                                        "

                                    >


                                        <option>

                                            Crítico                                                      

                                        </option>


                                        <option>

                                            
                                                
                                                Abaixo do esperado
                                            

                                        </option>


                                        <option>

                                                Atende às expectativas
                                            
                                        </option>


                                        <option>

                                            
                                                Acima do esperado

                                        </option>


                                    </select>


                                )




                                :



                                (


                                    <div

                                        className={`
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            px-5
                                            py-3
                                            rounded-xl
                                            font-semibold
                                            text-sm

                                            ${
                                                item.color === "green"
                                                ?
                                                "bg-green-50 text-green-700 border border-green-200"

                                                :

                                                item.color === "blue"

                                                ?

                                                "bg-blue-50 text-blue-700 border border-blue-200"

                                                :

                                                "bg-orange-50 text-orange-700 border border-orange-200"
                                            }
                                        `}

                                    >




                                        <span

                                            className={`
                                                w-3
                                                h-3
                                                rounded-full

                                                ${
                                                    item.color === "green"
                                                    ?
                                                    "bg-green-500"

                                                    :

                                                    item.color === "blue"

                                                    ?

                                                    "bg-blue-500"

                                                    :

                                                    "bg-orange-500"
                                                }

                                            `}

                                        />




                                        {item.status}



                                    </div>


                                )


                            }




                        </div>





                    </div>




                ))}




            </div>






        </div>



    );

};