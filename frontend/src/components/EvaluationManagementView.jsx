import { useNavigate } from "react-router-dom";

export const EvaluationManagementView = ({
    abaAtiva,
    setAbaAtiva
}) => {

    const navigate = useNavigate();

    return (

        <>
            {/* ABAS */}

            <section className="flex gap-8 border-b border-gray-300 mt-8">

                <button
                    onClick={() => setAbaAtiva("avaliacoes")}
                    className={`
                        px-2
                        py-3
                        text-lg
                        border-b-2
                        cursor-pointer

                        ${
                            abaAtiva === "avaliacoes"
                                ? "text-[#B8A4FF] border-[#B8A4FF] font-semibold"
                                : "text-gray-500 border-transparent"
                        }
                    `}
                >
                    Avaliações
                </button>

                <button
                    onClick={() => setAbaAtiva("modelos")}
                    className={`
                        px-2
                        py-3
                        text-lg
                        border-b-2
                        cursor-pointer

                        ${
                            abaAtiva === "modelos"
                                ? "text-[#B8A4FF] border-[#B8A4FF] font-semibold"
                                : "text-gray-500 border-transparent"
                        }
                    `}
                >
                    Modelos
                </button>

                <button
                    onClick={() => setAbaAtiva("agendamentos")}
                    className={`
                        px-2
                        py-3
                        text-lg
                        border-b-2
                        cursor-pointer

                        ${
                            abaAtiva === "agendamentos"
                                ? "text-[#B8A4FF] border-[#B8A4FF] font-semibold"
                                : "text-gray-500 border-transparent"
                        }
                    `}
                >
                    Agendamentos
                </button>

            </section>

            {/* CONTEÚDO DA ABA AVALIAÇÕES */}

            {
                abaAtiva === "avaliacoes" && (

                    <>

                        <section className="mt-8 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">
                                Avaliações
                            </h2>
                            <button
                                onClick={() => navigate("/management-evaluations/create")}
                                className="
                                    bg-[#B8A4FF]
                                    text-white
                                    px-5
                                    py-2.5
                                    rounded-lg
                                    hover:opacity-90
                                    transition
                                    font-medium
                                "
                            >
                                + Nova avaliação
                            </button>

                        </section>

                        <section className="mt-8">

                            <div className="text-gray-500">
                                Área das avaliações.
                            </div>

                        </section>

                    </>

                )
            }


            {/* CONTEÚDO DA ABA MODELOS */}

            {
                abaAtiva === "modelos" && (

                    <>

                        <section className="mt-8 flex justify-between items-center">

                            <h2 className="text-2xl font-bold">
                                Modelos
                            </h2>

                        </section>

                        <section className="mt-8">

                            <div className="text-gray-500">
                                Área dos modelos.
                            </div>

                        </section>

                    </>

                )
            }


            {/* CONTEÚDO DA ABA AGENDAMENTOS */}

            {
                abaAtiva === "agendamentos" && (

                    <>

                        <section className="mt-8 flex justify-between items-center">

                            <h2 className="text-2xl font-bold">
                                Agendamentos
                            </h2>

                        </section>

                        <section className="mt-8">

                            <div className="text-gray-500">
                                Área dos agendamentos.
                            </div>

                        </section>

                    </>

                )
            }

        </>

    );

};