import { useState } from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { DashboardCard } from "../components/DashboardCard";
import { TabelaAvaliacoes } from "../components/TabelaAvaliacoes";
import { UserGraficoCompetencias } from "../components/UserGraficoCompetencias";

import { avaliacoes } from "../data/avaliacoes";

import {
    TrendingUp,
    Users,
    UserCog
} from "lucide-react";

export const UserResultados = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="min-h-screen bg-[#F7F8FC] p-10 mt-[8vh]">

                <div className="mx-auto pb-12">

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

                    {/* Tabela + Gráfico */}

                    <section className="flex gap-8 mt-10 items-center">

                        <div className="w-[70%]">

                            <TabelaAvaliacoes
                                avaliacoes={avaliacoes}
                            />

                        </div>

                        <div className="w-[30%] bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                Competências
                            </h2>

                            <UserGraficoCompetencias />

                        </div>

                    </section>

                </div>

            </main>

        </>
    );
};