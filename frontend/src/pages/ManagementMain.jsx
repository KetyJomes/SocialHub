import { useRef, useState } from "react";
import { Info, ClipboardCheck, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { CardTurma } from "../components/CardTurma";
import { CardAvaliacao } from "../components/CardAvaliacao";
import { CardAvaliacao360 } from "../components/CardAvaliacao360";
import { SidebarManagement } from "../components/SidebarManagement";


export const ManagementMain = () => {


    const navigate = useNavigate();


    const [isOpen, setIsOpen] = useState(false);

    const [turmaSelecionada, setTurmaSelecionada] = useState(null);

    const [turmaFiltroAvaliacao, setTurmaFiltroAvaliacao] = useState("");



    const listaTurmas = useRef();


    const turmas = [

        {
            nome: "Turma 1EM",
            alunos: 35,
            nota: 98
        },

        {
            nome: "Turma 9A",
            alunos: 32,
            nota: 96
        },

        {
            nome: "Turma 9B",
            alunos: 28,
            nota: 90
        },

        {
            nome: "Turma 5A",
            alunos: 29,
            nota: 86
        },

        {
            nome: "Turma 4A",
            alunos: 30,
            nota: 80
        },

        {
            nome: "Turma 3EM",
            alunos: 33,
            nota: 70
        },

        {
            nome: "Turma 8A",
            alunos: 27,
            nota: 68
        },

        {
            nome: "Turma 2EM",
            alunos: 30,
            nota: 59
        }

    ];



    // Avaliações Gestor → Aluno pendentes

    const alunosPendentes = [

        {
            id: 1,
            nome: "João Silva",
            turma: "Turma 9A",
            avaliacao: "1º Trimestre",
            avaliacaoId: 1,
            status: "Pendente"
        },


        {
            id: 2,
            nome: "Maria Souza",
            turma: "Turma 9A",
            avaliacao: "1º Trimestre",
            avaliacaoId: 1,
            status: "Pendente"
        },


        {
            id: 3,
            nome: "Pedro Oliveira",
            turma: "Turma 1EM",
            avaliacao: "1º Trimestre",
            avaliacaoId: 1,
            status: "Pendente"
        },


        {
            id: 4,
            nome: "Ana Costa",
            turma: "Turma 2EM",
            avaliacao: "2º Trimestre",
            avaliacaoId: 2,
            status: "Pendente"
        }

    ];



    // FILTRO DAS AVALIAÇÕES PENDENTES

    const alunosPendentesFiltrados =

        turmaFiltroAvaliacao === ""

            ?

            alunosPendentes

            :

            alunosPendentes.filter(
                (aluno) =>
                    aluno.turma === turmaFiltroAvaliacao
            );



    const avaliacoes360 = [

        {
            tipo: "Avaliação pelos Alunos",
            descricao: "Como os alunos avaliam o líder",
            status: "concluido"
        },


        {
            tipo: "Avaliação pelos Pares",
            descricao: "Como os pares avaliam o líder",
            status: "concluido"
        },


        {
            tipo: "Avaliação pelo Líder",
            descricao: "Autoavaliação do líder",
            status: "concluido"
        },


        {
            tipo: "Avaliação pela Equipe",
            descricao: "Como a equipe avalia o líder",
            status: "pendente"
        }

    ];



    function moverCards(direcao) {


        if(direcao === "direita") {

            listaTurmas.current.scrollLeft += 320;

        } else {

            listaTurmas.current.scrollLeft -= 320;

        }

    }
        return (

        <div>


            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />



            {
                isOpen && (

                    <div
                        className="
                            fixed
                            inset-0
                            bg-black/20
                            z-40
                        "
                        onClick={() => setIsOpen(false)}
                    />

                )
            }



            <main className="mt-[10vh]">


                <Header
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />



                <div className="p-10">



                    <h1 className="font-bold text-3xl">

                        Bem-vindo(a), Instrutor!

                    </h1>



                    <p className="text-gray-500">

                        Acompanhe o desempenho das suas turmas e alunos.

                    </p>




                    {/* TURMAS */}


                    <section className="mt-8">


                        <h2 className="text-xl font-bold mb-4">

                            Turmas

                        </h2>



                        <div className="relative">



                            <button
                                onClick={() => moverCards("esquerda")}
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    bg-white
                                    shadow-md
                                    rounded-full
                                    w-9
                                    h-9
                                    z-10
                                "
                            >

                                ‹

                            </button>





                            <div
                                ref={listaTurmas}
                                className="
                                    flex
                                    gap-5
                                    overflow-x-hidden
                                    px-3
                                    py-2
                                "
                            >


                                {
                                    turmas.map((turma,index)=>(


                                        <CardTurma

                                            key={index}

                                            turma={turma.nome}

                                            alunos={turma.alunos}

                                            nota={turma.nota}


                                            selecionado={
                                                turmaSelecionada === index
                                            }


                                            onClick={() =>
                                                setTurmaSelecionada(index)
                                            }

                                        />


                                    ))
                                }


                            </div>





                            <button
                                onClick={() => moverCards("direita")}
                                className="
                                    absolute
                                    -right-4
                                    top-1/2
                                    -translate-y-1/2
                                    bg-white
                                    shadow-md
                                    rounded-full
                                    w-9
                                    h-9
                                    z-10
                                "
                            >

                                ›

                            </button>



                        </div>


                    </section>







                    {/* CARDS INFERIORES */}


                    <section
                        className="
                            grid
                            grid-cols-2
                            gap-8
                            mt-10
                        "
                    >





                        {/* AVALIAÇÕES PENDENTES */}


                        <div
                            className="
                                bg-white
                                rounded-xl
                                border
                                border-gray-100
                                p-5
                                shadow-sm
                            "
                        >




                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-5
                                "
                            >



                                <div className="flex items-center gap-3">


                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#EAF4FF]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <ClipboardCheck
                                            size={20}
                                            className="text-[#0291F7]"
                                            strokeWidth={2}
                                        />

                                    </div>



                                    <h2 className="text-xl font-bold">

                                        Avaliações Pendentes

                                    </h2>


                                </div>





                                {/* FILTRO TURMA */}


                                <select
                                    value={turmaFiltroAvaliacao}

                                    onChange={(e)=>
                                        setTurmaFiltroAvaliacao(
                                            e.target.value
                                        )
                                    }

                                    className="
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-2
                                        text-gray-700
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#B8A4FF]
                                    "
                                >


                                    <option value="">

                                        Todas as turmas

                                    </option>



                                    {
                                        turmas.map((turma,index)=>(

                                            <option
                                                key={index}
                                                value={turma.nome}
                                            >

                                                {turma.nome}

                                            </option>

                                        ))
                                    }


                                </select>


                            </div>







                            <div
                                className="
                                    h-110
                                    space-y-3
                                    overflow-y-auto
                                    pr-2
                                "
                            >



                                {
                                    alunosPendentesFiltrados.length > 0

                                    ?

                                    (

                                        alunosPendentesFiltrados.map((aluno)=>(


                                            <div
                                                key={aluno.id}

                                                onClick={()=>

                                                    navigate(
                                                        `/management-perform-evaluation/${encodeURIComponent(aluno.turma)}/${encodeURIComponent(aluno.nome)}/${aluno.avaliacaoId}`
                                                    )

                                                }

                                                className="
                                                    cursor-pointer
                                                    rounded-lg
                                                    transition
                                                    hover:bg-[#0291F7]/5
                                                "
                                            >



                                                <CardAvaliacao

                                                    nome={`${aluno.avaliacao} - ${aluno.nome}`}

                                                    turma={aluno.turma}

                                                    tipo="Gestor → Aluno"

                                                    status={aluno.status}

                                                />



                                            </div>


                                        ))

                                    )


                                    :


                                    (

                                        <div
                                            className="
                                                flex
                                                justify-center
                                                items-center
                                                h-full
                                                text-gray-500
                                                text-sm
                                            "
                                        >

                                            Nenhuma avaliação pendente encontrada.

                                        </div>

                                    )

                                }


                            </div>



                        </div>
                                                {/* AVALIAÇÕES 360 */}


                        <div
                            className="
                                bg-white
                                rounded-xl
                                border
                                border-gray-100
                                p-5
                                shadow-sm
                            "
                        >



                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-5
                                "
                            >



                                <div className="flex items-center gap-3">


                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#F1EDFF]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >


                                        <RotateCcw
                                            size={20}
                                            className="text-[#B8A4FF]"
                                            strokeWidth={2}
                                        />


                                    </div>



                                    <h2 className="text-xl font-bold">

                                        Avaliações 360

                                    </h2>


                                </div>


                            </div>





                            <div
                                className="
                                    h-110
                                    space-y-3
                                    overflow-y-auto
                                    pr-2
                                "
                            >



                                {
                                    avaliacoes360.map((item,index)=>(


                                        <CardAvaliacao360

                                            key={index}

                                            tipo={item.tipo}

                                            descricao={item.descricao}

                                            status={item.status}

                                        />


                                    ))

                                }



                            </div>




                        </div>





                    </section>









                    {/* INFORMAÇÃO */}



                    <div
                        className="
                            flex
                            justify-center
                            mt-8
                        "
                    >



                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                bg-gray-50
                                border
                                border-gray-200
                                rounded-lg
                                px-6
                                py-3
                            "
                        >



                            <Info
                                size={18}
                                className="text-[#B8A4FF]"
                                strokeWidth={2}
                            />



                            <span className="text-sm text-gray-600">

                                Clique em uma avaliação pendente para iniciar a avaliação do aluno.

                            </span>



                        </div>



                    </div>





                </div>



            </main>


        </div>

    );

};