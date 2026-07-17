import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { TabelaEvaluationsPending } from "../components/TabelaEvaluationsPending";

import { evaluationsPending } from "../data/evaluationsPending";


export const ManagementEvaluationsPending = () => {

    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

    }, []);


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


            <main className="min-h-screen bg-[#F7F8FC] p-10 mt-[8vh]">


                <div className="mx-auto pb-12">


                    <div>


                        <h1 className="text-4xl font-bold text-gray-800">

                            Avaliações Pendentes

                        </h1>


                        <p className="text-gray-500 mt-2">

                            Acompanhe as avaliações que precisam ser concluídas pelo instrutor.

                        </p>


                    </div>



                    <section className="mt-10">


                        <TabelaEvaluationsPending

                            avaliacoes={evaluationsPending}

                        />


                    </section>


                </div>


            </main>


        </>

    );

};