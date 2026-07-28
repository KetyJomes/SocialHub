import { FileText } from "lucide-react";

export const evaluationsMock = [

    {
        id: 1,

        nome: "Avaliação 360°",

        descricao: "Avaliação dos colaboradores",

        tipo: "Trimestral",

        disponibilizada: "01/07/2026",

        infoDisponibilizada: "Disponível",

        prazo: "20/07/2026",

        infoPrazo: "10 dias restantes",

        status: "Pendente",

        acao: "Responder",

        icon: FileText,

        bgIcon: "bg-[#EAF4FF]"
    },

    {
        id: 2,

        nome: "Avaliação Liderança",

        descricao: "Avaliação da liderança",

        tipo: "Semestral",

        disponibilizada: "01/01/2026",

        infoDisponibilizada: "Disponível",

        prazo: "30/01/2026",

        infoPrazo: "Vencido",

        status: "Em atraso",

        acao: "Responder",

        icon: FileText,

        bgIcon: "bg-red-100"
    },

    {
        id: 3,

        nome: "Avaliação Técnica",

        descricao: "Avaliação de competências",

        tipo: "Anual",

        disponibilizada: "01/03/2026",

        infoDisponibilizada: "Finalizada",

        prazo: "20/03/2026",

        infoPrazo: "Pendente",

        status: "Respondida",

        acao: "Visualizar",

        icon: FileText,

        bgIcon: "bg-green-100"
    },

    {
        id: 4,

        nome: "Avaliação Comportamental",

        descricao: "Avaliação de comportamento e relacionamento",

        tipo: "Trimestral",

        disponibilizada: "10/04/2026",

        infoDisponibilizada: "Disponível",

        prazo: "25/04/2026",

        infoPrazo: "Pendente",

        status: "Respondida",

        acao: "Responder",

        icon: FileText,

        bgIcon: "bg-green-100"
    },

    {
        id: 5,

        nome: "Avaliação de Clima Organizacional",

        descricao: "Pesquisa sobre o ambiente de trabalho",

        tipo: "Anual",

        disponibilizada: "15/07/2026",

        infoDisponibilizada: "Disponível",

        prazo: "30/07/2026",

        infoPrazo: "7 dias restantes",

        status: "Pendente",

        acao: "Responder",

        icon: FileText,

        bgIcon: "bg-yellow-100"
    }

];