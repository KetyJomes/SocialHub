import { useNavigate } from "react-router-dom";

export const AbaAvaliacoes = ({
    avaliacoes,
    modoVisualizacao = false
}) => {

    const navigate = useNavigate();

    const acessarAvaliacao = (avaliacao) => {

        /*
        =====================================================
        AVALIAÇÃO JÁ RESPONDIDA
        =====================================================
        */

        if (modoVisualizacao) {

            navigate(
                `/realizar-avaliacao?id=${avaliacao.id}&visualizar=true`
            );

            return;

        }

        /*
        =====================================================
        AVALIAÇÃO 360°
        =====================================================
        */

        if (
            avaliacao.nome === "Avaliação 360°"
        ) {

            navigate(
                `/360`
            );

            return;

        }

        /*
        =====================================================
        OUTRAS AVALIAÇÕES
        =====================================================
        */

        navigate(
            `/realizar-avaliacao?id=${avaliacao.id}`
        );

    };

    return (

        <div className="grid gap-5">

            {

                avaliacoes.map((avaliacao) => (

                    <div
                        key={avaliacao.id}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                    >

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <div
                                    className={`
                                        w-14
                                        h-14
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        ${avaliacao.bgIcon}
                                    `}
                                >

                                    <img
                                        src={avaliacao.icon}
                                        alt=""
                                        className="w-8 h-8"
                                    />

                                </div>

                                <div>

                                    <h2 className="text-xl font-bold text-gray-800">
                                        {avaliacao.nome}
                                    </h2>

                                    <p className="text-gray-500">
                                        {avaliacao.descricao}
                                    </p>

                                    <p className="text-sm text-gray-400 mt-1">
                                        {avaliacao.tipo}
                                    </p>

                                </div>

                            </div>

                            <button
                                onClick={() => acessarAvaliacao(avaliacao)}
                                className="
                                    px-6
                                    py-3
                                    rounded-xl
                                    bg-[#2563EB]
                                    text-white
                                    hover:bg-blue-700
                                    transition
                                "

                                    ${

                                        modoVisualizacao

                                            ?

                                            "bg-gray-100 text-gray-700 hover:bg-gray-200"

                                            :

                                            "bg-[#0291F7] text-white hover:bg-blue-700"

                                    }

                                `}

                            >
                                {modoVisualizacao
                                    ? "Visualizar"
                                    : avaliacao.acao}
                            </button>

                        </div>

                    </div>

                ))

            }

        </div>

    );

};