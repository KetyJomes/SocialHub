import { useNavigate } from "react-router-dom";

import notify_icon from "../assets/notification-icon.png";
import arrow from "../assets/right-arrow.png";

export const CardNotificacaoAvaliacao = () => {

    const navigate = useNavigate();

    return (

        <div
            className="
                w-full
                max-w-4xl
                bg-white
                rounded-3xl
                border-2
                border-gray-100
                shadow-sm
                px-6
                py-5
                flex
                items-center
                justify-between
                cursor-pointer
                transition-all
                duration-200
                hover:shadow-md
                hover:-translate-y-1
                hover:border-[#0291F7]
                "
        >

            <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-[#EEF4FF] flex items-center justify-center shrink-0">

                    <img
                        src={notify_icon}
                        alt="Notificação"
                        className="w-7 h-7 object-contain"
                    />

                </div>

                <div>

                    <h2 className="font-bold text-2xl text-gray-900">

                        Atenção!

                    </h2>

                    <p className="text-gray-500">

                        Você possui uma avaliação trimestral disponível.

                    </p>

                </div>

            </div>

            <button
                onClick={() => navigate('/user-avaliacoes')}
                className="
                    flex
                    items-center
                    gap-2
                    bg-[#2563EB]
                    hover:bg-bg-blue-700
                    transition
                    text-white
                    font-semibold
                    px-5
                    py-3
                    rounded-xl
                    "
            >

                Acessar

                <img
                    src={arrow}
                    alt=""
                    className="w-4 h-4"
                />

            </button>

        </div>

    );

};