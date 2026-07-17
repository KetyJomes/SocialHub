// usado na main

import notify_icon from "../assets/notification-icon.png";
import arrow from "../assets/right-arrow.png";

export const CardNotificacaoAvaliacao = () => {
    return (
        <div className="w-[50vw] h-[15vh] rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 flex items-center justify-between px-6 ">
            <div className="flex items-center gap-3">
                <img
                    src={notify_icon}
                    alt="Notificação"
                    className="h-20 w-20 object-contain shrink-0"
                />

                <div className="flex flex-col text-2xl ml-5">
                    <h1 className="font-bold">Atenção!</h1>
                    <p>Avaliação Trimestral disponível</p>
                </div>
            </div>

            <button className="p-3 bg-[#0291F7] flex items-center gap-5 rounded-3xl px-7 text-white font-bold text-xl">
                <span>
                    Acessar Avaliação
                </span>
                <img src={arrow} alt="" className="w-5 h-5" />
            </button>
        </div>
    );
};