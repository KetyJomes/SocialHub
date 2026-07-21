import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    School,
    Users,
    UserCog
} from "lucide-react";


import { Header } from "../../components/Header";
import { SidebarAdmin } from "../../components/SidebarAdmin";



export const Admin = () => {


    const navigate = useNavigate();


    const [isOpen, setIsOpen] = useState(false);



    const dados = {

        turmas: 12,

        alunos: 356,

        usuarios: 87

    };



    return (

        <div className="min-h-screen bg-[#F7F8FC]">


            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            <SidebarAdmin
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />




            <main className="pt-[12vh] px-10 pb-10">



                <div className="flex justify-between items-center">


                    <div>

                        <h1 className="text-3xl font-bold text-gray-800">

                            Administração

                        </h1>


                        <p className="text-gray-500 mt-1">

                            Gerencie usuários, turmas e configurações.

                        </p>

                    </div>





                    <button


                        onClick={() => navigate("/adm-control-user")}


                        className="
                            bg-[#007BC0]
                            text-white
                            px-5
                            py-2.5
                            flex
                            items-center
                            gap-2
                            hover:bg-[#0067a3]
                            transition
                            cursor-pointer
                        "

                    >

                        <UserCog size={18}/>

                        Usuários

                    </button>


                </div>








                <div className="grid grid-cols-3 gap-5 mt-8">






                    <div className="
                        bg-white
                        shadow-sm
                        p-5
                        flex
                        items-center
                        gap-4
                    ">


                        <div className="
                            w-12
                            h-12
                            flex
                            items-center
                            justify-center
                        ">

                            <School
                                size={30}
                                className="text-[#007BC0]"
                            />

                        </div>




                        <div>


                            <h2 className="text-2xl font-bold">

                                {dados.turmas}

                            </h2>


                            <p className="text-sm text-gray-500">

                                Turmas

                            </p>


                        </div>


                    </div>


                    <div className="
                        bg-white
                        shadow-sm
                        p-5
                        flex
                        items-center
                        gap-4
                    ">


                        <div className="
                            w-12
                            h-12
                            flex
                            items-center
                            justify-center
                        ">

                            <Users
                                size={30}
                                className="text-green-600"
                            />

                        </div>




                        <div>


                            <h2 className="text-2xl font-bold">

                                {dados.alunos}

                            </h2>


                            <p className="text-sm text-gray-500">

                                Alunos

                            </p>


                        </div>


                    </div>









                    <div className="
                        bg-white
                        shadow-sm
                        p-5
                        flex
                        items-center
                        gap-4
                    ">


                        <div className="
                            w-12
                            h-12
                            flex
                            items-center
                            justify-center
                        ">


                            <UserCog
                                size={30}
                                className="text-purple-600"
                            />


                        </div>





                        <div>


                            <h2 className="text-2xl font-bold">

                                {dados.usuarios}

                            </h2>


                            <p className="text-sm text-gray-500">

                                Usuários

                            </p>


                        </div>



                    </div>




                </div>









                <div className="
                    bg-white
                    shadow-sm
                    mt-8
                    p-6 
                ">



                    <h2 className="text-xl font-bold text-gray-800">

                        Acessos rápidos

                    </h2>



                    <p className="text-gray-500 text-sm mt-1">

                        Acesse os principais módulos administrativos.

                    </p>






                    <div className="grid grid-cols-2 gap-4 mt-5">





                        <button


                            onClick={() => navigate("/admin/turmas")}


                            className="
                                border
                                border-gray-200
                                rounded-2xl
                                p-5
                                flex
                                items-center
                                gap-4
                                hover:bg-gray-50
                                transition
                                cursor-pointer
                                text-left
                            "

                        >


                            <div className="
                                w-11
                                h-11
                                rounded-xl
                                bg-blue-100
                                flex
                                items-center
                                justify-center
                            ">


                                <School
                                    size={22}
                                    className="text-[#007BC0]"
                                />


                            </div>





                            <div>


                                <h3 className="font-semibold">

                                    Gerenciar Turmas

                                </h3>



                                <p className="text-sm text-gray-500">

                                    Criar, editar e administrar alunos.

                                </p>


                            </div>



                        </button>







                        <button


                            onClick={() => navigate("/adm-control-user")}


                            className="
                                border
                                border-gray-200
                                rounded-2xl
                                p-5
                                flex
                                items-center
                                gap-4
                                hover:bg-gray-50
                                transition
                                cursor-pointer
                                text-left
                            "


                        >


                            <div className="
                                w-11
                                h-11
                                rounded-xl
                                bg-purple-100
                                flex
                                items-center
                                justify-center
                            ">


                                <UserCog
                                    size={22}
                                    className="text-purple-600"
                                />


                            </div>




                            <div>


                                <h3 className="font-semibold">

                                    Gerenciar Usuários

                                </h3>



                                <p className="text-sm text-gray-500">

                                    Controle usuários e permissões.

                                </p>


                            </div>



                        </button>



                    </div>




                </div>




            </main>


        </div>

    );

};