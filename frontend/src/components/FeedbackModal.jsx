import {
    X,
    Save
} from "lucide-react";


export const FeedbackModal = ({
    isOpen,
    fechar,
    feedback,
    setFeedback
}) => {


    if (!isOpen) return null;



    return (

        <div
            className="
                fixed
                inset-0
                bg-black/40
                flex
                items-center
                justify-center
                z-50
            "
        >


            <div

                className="
                    bg-white
                    w-[650px]
                    rounded-3xl
                    shadow-2xl
                    p-8
                "

            >



                {/* CABEÇALHO */}

                <div className="flex justify-between items-center mb-6">


                    <div>


                        <h2 className="text-2xl font-bold text-gray-900">

                            Feedback do Gestor

                        </h2>


                        <p className="text-gray-500 mt-1">

                            Registre um feedback construtivo baseado na avaliação.

                        </p>


                    </div>





                    <button

                        onClick={fechar}

                        className="
                            w-9
                            h-9
                            rounded-full
                            flex
                            items-center
                            justify-center
                            hover:bg-gray-100
                            transition
                        "

                    >

                        <X size={20}/>

                    </button>


                </div>





                {/* INFORMAÇÕES */}


                <div

                    className="
                        bg-[#F7F8FC]
                        rounded-2xl
                        p-5
                        mb-6
                    "

                >

                    <p className="text-sm text-gray-500">

                        Avaliado

                    </p>


                    <h3 className="font-bold text-lg">

                        Colaborador selecionado

                    </h3>


                </div>






                {/* CAMPO */}


                <textarea

                    value={feedback}

                    onChange={(e)=>setFeedback(e.target.value)}

                    rows={7}

                    placeholder="Digite o feedback..."

                    className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        p-4
                        resize-none
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#0291F7]
                    "

                />






                {/* BOTÕES */}


                <div className="flex justify-end gap-4 mt-6">


                    <button

                        onClick={fechar}

                        className="
                            px-5
                            py-3
                            rounded-xl
                            border
                            border-gray-300
                            font-semibold
                            hover:bg-gray-100
                        "

                    >

                        Cancelar

                    </button>





                    <button

                        className="
                            flex
                            items-center
                            gap-2
                            px-6
                            py-3
                            rounded-xl
                            bg-[#0291F7]
                            text-white
                            font-semibold
                            hover:bg-[#0278d2]
                        "

                    >

                        <Save size={18}/>

                        Salvar Feedback


                    </button>



                </div>





            </div>



        </div>


    );

};