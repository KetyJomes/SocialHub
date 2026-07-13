import { Header } from "../components/Header";
import { DashboardCard } from "../components/DashboardCard";
import { TabelaAvaliacoes } from "../components/TabelaAvaliacoes";

import { avaliacoes } from "../data/avaliacoes";

import {
    TrendingUp,
    Users,
    UserCog
} from "lucide-react";

export const UserResultados = () => {

    return (

        <main className="min-h-screen bg-[#F7F8FC] p-10">

            <Header />

            <div className="mx-auto pt-28 pb-12">

                {/* Saudação */}

                <div>

                    <h1 className="text-4xl font-bold text-gray-800">

                        Olá, Usuário!

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Acompanhe seu desempenho nas avaliações e continue evoluindo.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center mt-10">

                    <DashboardCard
                        titulo="Meu Desempenho Geral"
                        valor={75}
                        descricao="Muito bom"
                        cor="#2563EB"
                        variacao="+10 p.p."
                        positiva={true}
                        Icone={TrendingUp}
                    />

                    <DashboardCard
                        titulo="Desempenho 360°"
                        valor={55}
                        descricao="Bom"
                        cor="#7C3AED"
                        variacao="-5 p.p."
                        positiva={false}
                        Icone={Users}
                    />

                    <DashboardCard
                        titulo="Avaliação Gestão"
                        valor={68}
                        descricao="Bom"
                        cor="#10B981"
                        variacao="+8 p.p."
                        positiva={true}
                        Icone={UserCog}
                    />

                </div>

                {/* Tabela */}

                <section className="mt-10 flex justify-center">

                    <TabelaAvaliacoes
                        avaliacoes={avaliacoes}
                    />

                </section>

                {/* Card Final */}

            </div>

        </main>

    );

};