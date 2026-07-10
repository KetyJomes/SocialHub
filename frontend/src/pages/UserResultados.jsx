import { useState } from "react"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"


export const UserResultados = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="mt-[8vh]">
                 <div className="mb-8">

                    <h1 className="text-4xl font-bold text-gray-900">
                    Olá, Fulano! 👋
                    </h1>

                    <p className="text-gray-500 text-lg mt-2">
                    Acompanhe seu desempenho nas avaliações e continue evoluindo.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-4 gap-6 mb-8">

                    <SummaryCard
                    icon={<TrendingUp size={26} />}
                    title="Meu Desempenho Geral"
                    color="#2563EB"
                    value={75}
                    label="Muito bom"
                    variation="+10 p.p."
                    positive
                    />

                    <SummaryCard
                    icon={<Users size={26} />}
                    title="Desempenho 360°"
                    color="#7C3AED"
                    value={55}
                    label="Bom"
                    variation="-5 p.p."
                    />

                    <SummaryCard
                    icon={<UserCheck size={26} />}
                    title="Avaliação Gestão"
                    color="#10B981"
                    value={68}
                    label="Bom"
                    variation="+8 p.p."
                    positive
                    />

                    <RankingCard />
                </div>

                {/* Tabela */}

                <EvaluationTable evaluations={evaluations} />

                {/* Card inferior */}

                <div className="mt-8">
                    <ImprovementCard />
                </div>

            </main>
        </>
    )
}