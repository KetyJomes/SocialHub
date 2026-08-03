export const evaluationsCompleteMock = [
  {
    id: 1,

    nome: "Avaliação 360°",

    descricao: "Avaliação dos colaboradores",

    tipo: "Trimestral",

    perguntas: [
      {
        id: 1,

        titulo: "Comunicação",

        descricao: "Demonstra clareza ao transmitir informações e ideias.",

        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao:
              "Apresenta muita dificuldade para se comunicar de forma clara.",
          },

          {
            nome: "Abaixo",
            valor: 2,
            descricao:
              "Comunica-se, porém ainda apresenta dificuldades em alguns momentos.",
          },

          {
            nome: "Dentro",
            valor: 3,
            descricao: "Comunica-se de forma clara e adequada ao esperado.",
          },

          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Possui excelente comunicação e consegue influenciar positivamente outras pessoas.",
          },
        ],
      },

      {
        id: 2,

        titulo: "Trabalho em equipe",

        descricao:
          "Colabora com colegas e contribui para os resultados do grupo.",

        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao:
              "Apresenta dificuldade em colaborar e trabalhar com outras pessoas.",
          },

          {
            nome: "Abaixo",
            valor: 2,
            descricao:
              "Participa da equipe, mas precisa desenvolver colaboração.",
          },

          {
            nome: "Dentro",
            valor: 3,
            descricao:
              "Trabalha bem com a equipe e contribui para os objetivos.",
          },

          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Ajuda colegas, compartilha conhecimento e fortalece o time.",
          },
        ],
      },

      {
        id: 3,
        titulo: "Proatividade",
        descricao:
          "Age antecipadamente para resolver problemas e identificar oportunidades.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Aguarda instruções para executar suas atividades.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Demonstra iniciativa apenas em algumas situações.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Busca soluções e toma iniciativa quando necessário.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Antecipa problemas, propõe melhorias e inspira outras pessoas.",
          },
        ],
      },
      {
        id: 4,
        titulo: "Organização",
        descricao:
          "Planeja e executa atividades de forma organizada e eficiente.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao:
              "Apresenta dificuldades para organizar tarefas e cumprir prazos.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao:
              "Mantém alguma organização, mas precisa melhorar o planejamento.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao:
              "Organiza suas atividades e cumpre os prazos estabelecidos.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Gerencia prioridades com eficiência e otimiza processos.",
          },
        ],
      },

      {
        id: 5,
        titulo: "Comprometimento",
        descricao:
          "Demonstra responsabilidade e dedicação com as atividades e resultados.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao:
              "Não demonstra comprometimento com suas responsabilidades.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao:
              "Cumpre parte das responsabilidades, mas precisa de acompanhamento.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao:
              "Cumpre suas responsabilidades e entrega resultados esperados.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Supera expectativas e demonstra elevado senso de responsabilidade.",
          },
        ],
      },

      {
        id: 6,
        titulo: "Resolução de Problemas",
        descricao:
          "Analisa situações e encontra soluções eficientes para os desafios.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Tem dificuldade em identificar e resolver problemas.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao:
              "Resolve problemas simples, mas necessita de apoio em casos mais complexos.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Analisa situações e encontra soluções adequadas.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Resolve problemas complexos com rapidez e propõe melhorias.",
          },
        ],
      },
    ],
  },

  {
    id: 2,

    nome: "Avaliação Liderança",

    descricao: "Avaliação da liderança",

    tipo: "Trimestral",

    perguntas: [
      {
        id: 1,

        titulo: "Tomada de decisão",

        descricao: "Toma decisões de forma assertiva e responsável.",

        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Tem dificuldade para tomar decisões.",
          },

          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Necessita apoio frequente para decidir.",
          },

          {
            nome: "Dentro",
            valor: 3,
            descricao: "Toma decisões adequadas para o cargo.",
          },

          {
            nome: "Acima",
            valor: 4,
            descricao: "Decide com segurança e inspira confiança na equipe.",
          },
        ],
      },

      {
        id: 2,

        titulo: "Desenvolvimento da equipe",

        descricao:
          "Incentiva o crescimento e desenvolvimento dos colaboradores.",

        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Não incentiva o desenvolvimento da equipe.",
          },

          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Incentiva apenas ocasionalmente.",
          },

          {
            nome: "Dentro",
            valor: 3,
            descricao: "Apoia o desenvolvimento da equipe.",
          },

          {
            nome: "Acima",
            valor: 4,
            descricao: "É referência no desenvolvimento dos colaboradores.",
          },
        ],
      },

      {
        id: 3,
        titulo: "Delegação",
        descricao: "Distribui tarefas de forma equilibrada e eficiente.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Tem dificuldade em delegar responsabilidades.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao:
              "Delega parcialmente, mas acompanha de forma inadequada.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Delega tarefas conforme as competências da equipe.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao: "Delega estrategicamente e promove autonomia.",
          },
        ],
      },
      {
        id: 4,
        titulo: "Gestão de conflitos",
        descricao: "Lida com conflitos de forma imparcial e construtiva.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Evita ou agrava conflitos na equipe.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Resolve conflitos apenas com apoio.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Gerencia conflitos de forma adequada.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao: "Transforma conflitos em oportunidades de melhoria.",
          },
        ],
      },
      {
        id: 5,
        titulo: "Planejamento",
        descricao: "Planeja atividades, prioridades e acompanha resultados.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Não realiza planejamento das atividades.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Planeja parcialmente e precisa melhorar a organização.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Planeja e acompanha as atividades da equipe.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao: "Planeja estrategicamente e antecipa riscos.",
          },
        ],
      },
      {
        id: 6,
        titulo: "Gestão de resultados",
        descricao: "Acompanha indicadores e busca o alcance das metas.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Não acompanha resultados da equipe.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Acompanha resultados de forma inconsistente.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Monitora indicadores e alcança as metas estabelecidas.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Supera metas e promove melhoria contínua dos resultados.",
          },
        ],
      },
    ],
  },

  {
    id: 4,

    nome: "Avaliação Comportamental",

    descricao: "Avaliação de comportamento e relacionamento",

    tipo: "Trimestral",

    perguntas: [
      {
        id: 1,

        titulo: "Relacionamento interpessoal",

        descricao: "Mantém um bom relacionamento com colegas e líderes.",

        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Possui dificuldades de relacionamento.",
          },

          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Relaciona-se de forma limitada com a equipe.",
          },

          {
            nome: "Dentro",
            valor: 3,
            descricao: "Mantém um relacionamento saudável.",
          },

          {
            nome: "Acima",
            valor: 4,
            descricao: "Promove um excelente clima entre a equipe.",
          },
        ],
      },

      {
        id: 2,

        titulo: "Comprometimento",

        descricao: "Cumpre responsabilidades e demonstra dedicação.",

        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Não demonstra comprometimento.",
          },

          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Compromete-se apenas em algumas situações.",
          },

          {
            nome: "Dentro",
            valor: 3,
            descricao: "Cumpre suas responsabilidades conforme esperado.",
          },

          {
            nome: "Acima",
            valor: 4,
            descricao: "Supera expectativas e serve de exemplo para os demais.",
          },
        ],
      },

      {
        id: 3,
        titulo: "Proatividade",
        descricao: "Age com iniciativa na execução de suas atividades.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Aguarda instruções para realizar suas atividades.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Demonstra pouca iniciativa.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Toma iniciativa quando necessário.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Antecipa necessidades e propõe melhorias constantemente.",
          },
        ],
      },
      {
        id: 4,
        titulo: "Adaptabilidade",
        descricao: "Adapta-se a mudanças e novos desafios.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Resiste a mudanças e novas situações.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Apresenta dificuldades para se adaptar.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Adapta-se adequadamente às mudanças.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao:
              "Adapta-se rapidamente e incentiva outros durante mudanças.",
          },
        ],
      },
      {
        id: 5,
        titulo: "Ética profissional",
        descricao: "Age com integridade, respeito e responsabilidade.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao:
              "Apresenta comportamentos incompatíveis com os valores da organização.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Necessita melhorar sua postura ética.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao: "Age de forma ética e respeitosa.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao: "É referência em ética e profissionalismo.",
          },
        ],
      },
      {
        id: 6,
        titulo: "Inteligência emocional",
        descricao: "Controla suas emoções e reage de forma equilibrada.",
        niveis: [
          {
            nome: "Crítico",
            valor: 1,
            descricao: "Tem dificuldade em controlar emoções.",
          },
          {
            nome: "Abaixo",
            valor: 2,
            descricao: "Perde o equilíbrio em situações de pressão.",
          },
          {
            nome: "Dentro",
            valor: 3,
            descricao:
              "Mantém o equilíbrio emocional na maioria das situações.",
          },
          {
            nome: "Acima",
            valor: 4,
            descricao: "Lida com pressão e conflitos de forma exemplar.",
          },
        ],
      },
    ],
  },
];
