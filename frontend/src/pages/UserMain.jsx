import { Header } from "../components/Header";
import { CardNotificacaoAvaliacao } from "../components/CardNotificacaoAvaliacao";
import { GraficoPessoal } from "../components/GraficoPessoal";

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

                <div className="w-[800px] h-[400px] mx-auto">
                    <GraficoPessoal />
                </div>
            </div>
        </main>
    );
};