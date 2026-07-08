import { Header } from "../components/Header";
import { CardNotificacaoAvaliacao } from "../components/CardNotificacaoAvaliacao";
import { GraficoPessoal } from "../components/GraficoPessoal";

import bars from "../assets/bars.png";

export const UserMain = () => {
    return (
        <main className="user-main">
            <Header />

            <div className="user-container p-10">
                <h1 className="font-bold text-3xl mb-8">
                    Bem-Vindo, Usuário!
                </h1>

                <div className="flex justify-center">
                    <CardNotificacaoAvaliacao />
                </div>

                <h1 className="font-bold text-3xl mb-8 mt-15">Meu Desempenho</h1>

                
                <div className="flex flex-row justify-around">

                    <section className="w-[40%]">

                        <div className="flex flex-row items-center gap-5">
                            <div className="p-2 bg-[#0291F7]/15 w-17 items-center flex justify-center rounded-xl">
                                <img src={bars} alt="" className="w-10"/>
                            </div>

                            <h1 className="font-bold text-xl">Desempenho Comparativo</h1>
                        </div>

                        <div className="flex flex-row">
                            <section>
                                <h1>Resultado Atual</h1>
                                <h1>90%</h1>
                            </section>

                            <GraficoPessoal />
                            
                        </div>


                    </section>

                    <section className="w-[40%]">

                        <div className="p-2 bg-[#0291F7]">
                            <img src={bars} alt="" className="w-10"/>
                        </div>

                        <GraficoPessoal />

                    </section>

                </div>
            </div>
        </main>
    );
};