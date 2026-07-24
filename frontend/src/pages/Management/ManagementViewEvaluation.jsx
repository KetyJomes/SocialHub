import { useParams } from "react-router-dom";
import { useState } from "react";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";
import { ManagementEvaluationTable } from "../../components/ManagementEvaluationTable";

import { evaluation } from "../../data/evaluation";


export const ManagementViewEvaluation = () => {


    const [isOpen, setIsOpen] = useState(false);


    const { turma, aluno } = useParams();




    // Exemplo. Depois virá do back-end.
    const answers = {

        1: "dentro",
        2: "acima",
        3: "abaixo",
        4: "dentro",
        5: "acima",
        6: "dentro"

    };



    const respondidas = Object.keys(answers).length;

    const totalQuestoes = evaluation.length;





    return (

        <>


            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />



            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />





            <main className="mt-[8vh] p-8 overflow-y-auto">


                <div className="w-[80vw] mx-auto">





                    <h1 className="text-3xl font-bold">

                        Avaliação de Desempenho

                    </h1>







                    <div className="mt-5 mb-8">


                        <div
                            className="
                                rounded-2xl
                                border
                                border-blue-200
                                bg-blue-50
                                px-6
                                py-5
                            "
                        >



                            <p className="text-sm text-gray-500">

                                Avaliação respondida por

                            </p>




                            <h2 className="text-2xl font-semibold text-[#21528A]">

                                {aluno}

                            </h2>




                            <p className="text-gray-500 mt-1">

                                {turma}

                            </p>



                        </div>


                    </div>







                    <div className="flex justify-between items-center mb-8">


                        <p className="text-gray-500">

                            Visualize as respostas da avaliação.

                        </p>





                        <span
                            className="
                                bg-[#0291F7]/15
                                text-[#0291F7]
                                px-4
                                py-2
                                rounded-full
                                font-semibold
                            "
                        >

                            {respondidas}/{totalQuestoes} respondidas

                        </span>



                    </div>









                    <ManagementEvaluationTable

                        data={evaluation}

                        answers={answers}

                        onSelect={() => {}}

                        readonly={true}

                    />






                </div>


            </main>



        </>

    );

};