	// Banco de questões 
	const questionBank = [
	  {
		question: "Qual é o principal objetivo da Governança de TI?",
		options: [
		  "Reduzir custos de TI",
		  "Alinhar TI com os objetivos de negócio",
		  "Implementar novas tecnologias",
		  "Contratar mais profissionais de TI"
		],
		answer: 1
	  },
	  {
		question: "Qual destes NÃO é um benefício da Governança de TI?",
		options: [
		  "Melhor alinhamento entre TI e negócios",
		  "Maior controle sobre investimentos em TI",
		  "Redução da necessidade de treinamento",
		  "Melhor gerenciamento de riscos"
		],
		answer: 3
	  },
	  {
	  question: "O que significa o termo 'TI como habilitadora de negócios'?",
	  options: [
		"TI deve funcionar independentemente do negócio",
		"TI deve suportar e impulsionar os objetivos do negócio",
		"TI deve controlar todas as operações do negócio",
		"TI deve ter prioridade sobre outras áreas"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes NÃO é um componente típico de um framework de Governança de TI?",
	  options: [
		"Processos",
		"Estruturas organizacionais",
		"Princípios",
		"Hardware específico"
	  ],
	  answer: 3
	},
	{
	  question: "Qual é a relação entre Governança de TI e Governança Corporativa?",
	  options: [
		"São conceitos completamente independentes",
		"Governança de TI é um subconjunto da Governança Corporativa",
		"Governança Corporativa é um subconjunto da Governança de TI",
		"São exatamente a mesma coisa"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes é um indicador comum de desempenho em Governança de TI?",
	  options: [
		"Número de computadores na empresa",
		"Percentual de projetos alinhados com estratégia de negócios",
		"Quantidade de softwares instalados",
		"Velocidade da conexão de internet"
	  ],
	  answer: 1
	},
	{
	  question: "O que significa o princípio 'value delivery' na Governança de TI?",
	  options: [
		"Entregar projetos dentro do prazo",
		"Garantir que a TI gere valor para o negócio",
		"Reduzir custos a qualquer custo",
		"Implementar sempre as tecnologias mais novas"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes NÃO é um desafio comum na implementação da Governança de TI?",
	  options: [
		"Resistência à mudança",
		"Falta de apoio da alta administração",
		"Excesso de alinhamento com o negócio",
		"Dificuldade em medir resultados"
	  ],
	  answer: 2
	},
	{
	  question: "Qual é o papel do CIO (Chief Information Officer) na Governança de TI?",
	  options: [
		"Gerenciar apenas a infraestrutura técnica",
		"Ser o principal elo entre TI e estratégia de negócios",
		"Supervisionar apenas o desenvolvimento de software",
		"Controlar todos os aspectos financeiros da empresa"
	  ],
	  answer: 1
	},
	{
	  question: "Qual organização desenvolveu o framework COBIT?",
	  options: [
		"ISO",
		"ITIL",
		"ISACA",
		"PMI"
	  ],
	  answer: 2
	},
	{
	  question: "Qual é a versão mais recente do COBIT?",
	  options: [
		"COBIT 4.1",
		"COBIT 5",
		"COBIT 2019",
		"COBIT 2022"
	  ],
	  answer: 2
	},
	{
	  question: "Quantos domínios de processo existem no COBIT 2019?",
	  options: [
		"3",
		"5",
		"7",
		"10"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes NÃO é um domínio do COBIT?",
	  options: [
		"Avaliar, Dirigir e Monitorar (EDM)",
		"Alinhar, Planejar e Organizar (APO)",
		"Construir, Adquirir e Implementar (BAI)",
		"Testar, Validar e Certificar (TV)"
	  ],
	  answer: 3
	},
	{
	  question: "Quantos processos possui o COBIT 2019?",
	  options: [
		"25",
		"37",
		"40",
		"45"
	  ],
	  answer: 2
	},
	{
	  question: "Qual destes é um objetivo principal do COBIT?",
	  options: [
		"Substituir todos os outros frameworks",
		"Fornecer um modelo genérico para governança de TI",
		"Vender produtos de software específicos",
		"Reduzir a necessidade de profissionais de TI"
	  ],
	  answer: 1
	},
	{
	  question: "O que significa a sigla EDM no COBIT?",
	  options: [
		"Evaluate, Direct and Monitor",
		"Enterprise Data Management",
		"Electronic Document Management",
		"Executive Decision Making"
	  ],
	  answer: 0
	},
	{
	  question: "Qual destes conceitos foi introduzido no COBIT 2019?",
	  options: [
		"Fatores de design (design factors)",
		"Modelo em cascata",
		"Programação estruturada",
		"Diagramas de classe"
	  ],
	  answer: 0
	},
	{
	  question: "Qual destes NÃO é um componente do COBIT?",
	  options: [
		"Framework",
		"Processos",
		"Objetivos de controle",
		"Linguagem de programação específica"
	  ],
	  answer: 3
	},
	{
	  question: "Como o COBIT se relaciona com outros frameworks como ITIL e ISO 27001?",
	  options: [
		"Substitui todos eles",
		"É incompatível com eles",
		"Pode ser integrado e complementá-los",
		"Foi desenvolvido antes deles e está obsoleto"
	  ],
	  answer: 2
	},
	{
	  question: "O que significa a sigla ITIL?",
	  options: [
		"Information Technology Infrastructure Library",
		"International Technology Integration List",
		"Information Technology Integration Layer",
		"International Technical Infrastructure License"
	  ],
	  answer: 0
	},
	{
	  question: "Qual é a versão mais recente do ITIL?",
	  options: [
		"ITIL v3",
		"ITIL 2011",
		"ITIL 4",
		"ITIL 2020"
	  ],
	  answer: 2
	},
	{
	  question: "Quantos volumes tinha o ITIL v3?",
	  options: [
		"3",
		"5",
		"7",
		"9"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes NÃO era um dos volumes do ITIL v3?",
	  options: [
		"Estratégia de Serviço",
		"Desenho de Serviço",
		"Operação de Serviço",
		"Programação de Serviço"
	  ],
	  answer: 3
	},
	{
	  question: "Qual conceito novo foi introduzido no ITIL 4?",
	  options: [
		"Sistema de Valor de Serviço",
		"Modelo OSI",
		"Programação estruturada",
		"Diagramas de Gantt"
	  ],
	  answer: 0
	},
	{
	  question: "Quantas práticas o ITIL 4 define?",
	  options: [
		"26",
		"34",
		"42",
		"50"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes é um dos grupos de práticas do ITIL 4?",
	  options: [
		"Práticas de Gerenciamento Geral",
		"Práticas de Desenvolvimento Ágil",
		"Práticas de Programação Extrema",
		"Práticas de Modelagem de Dados"
	  ],
	  answer: 0
	},
	{
	  question: "O que é a Cadeia de Valor de Serviço no ITIL 4?",
	  options: [
		"Um conjunto de atividades para criar valor",
		"Um modelo de precificação de serviços",
		"Uma lista de fornecedores de TI",
		"Um método de avaliação de hardware"
	  ],
	  answer: 0
	},
	{
	  question: "Qual destes processos foi renomeado no ITIL 4?",
	  options: [
		"Gerenciamento de Incidentes (agora Prática de Gerenciamento de Incidentes)",
		"Gerenciamento de Projetos",
		"Desenvolvimento Ágil",
		"Modelagem de Processos"
	  ],
	  answer: 0
	},
	{
	  question: "Qual é o objetivo principal do Gerenciamento de Incidentes no ITIL?",
	  options: [
		"Encontrar a causa raiz dos problemas",
		"Restaurar o serviço normal o mais rápido possível",
		"Planejar novos serviços",
		"Gerenciar o orçamento de TI"
	  ],
	  answer: 1
	},
	{
	  question: "Qual organização desenvolve as normas ISO?",
	  options: [
		"International Organization for Standardization",
		"Internet Security Organization",
		"Information Systems Organization",
		"International Security Office"
	  ],
	  answer: 0
	},
	{
	  question: "Qual é o foco principal da ISO 27001?",
	  options: [
		"Gerenciamento de serviços de TI",
		"Segurança da informação",
		"Governança corporativa",
		"Desenvolvimento de software"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes NÃO é um domínio da ISO 27001:2022?",
	  options: [
		"Pessoas",
		"Organizacional",
		"Tecnológico",
		"Marketing"
	  ],
	  answer: 3
	},
	{
	  question: "Quantos controles tem o Anexo A da ISO 27001:2022?",
	  options: [
		"93",
		"114",
		"65",
		"128"
	  ],
	  answer: 0
	},
	{
	  question: "Qual é o ciclo de melhoria contínua usado na ISO 27001?",
	  options: [
		"PDCA (Plan-Do-Check-Act)",
		"SDLC (Software Development Life Cycle)",
		"ITIL (Information Technology Infrastructure Library)",
		"COBIT (Control Objectives for Information and Related Technologies)"
	  ],
	  answer: 0
	},
	{
	  question: "Qual destes é um benefício da certificação ISO 27001?",
	  options: [
		"Maior velocidade de internet",
		"Melhor conformidade com leis de proteção de dados",
		"Redução do número de funcionários necessários",
		"Eliminação completa de todos os riscos"
	  ],
	  answer: 1
	},
	{
	  question: "Qual é o tempo médio para implementar a ISO 27001 em uma organização média?",
	  options: [
		"1-2 meses",
		"6-12 meses",
		"3-5 anos",
		"Mais de 5 anos"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes é um requisito obrigatório para a certificação ISO 27001?",
	  options: [
		"Implementar todos os 93 controles",
		"Realizar uma avaliação de riscos",
		"Ter um firewall de última geração",
		"Contratar uma equipe externa de segurança"
	  ],
	  answer: 1
	},
	{
	  question: "Qual é a validade de uma certificação ISO 27001?",
	  options: [
		"1 ano",
		"3 anos",
		"5 anos",
		"Permanentemente"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes NÃO é um princípio da segurança da informação na ISO 27001?",
	  options: [
		"Confidencialidade",
		"Integridade",
		"Disponibilidade",
		"Complexidade"
	  ],
	  answer: 3
	},
	{
	  question: "Quem desenvolveu o conceito de Balanced Scorecard?",
	  options: [
		"Kaplan e Norton",
		"Deming e Juran",
		"Taylor e Ford",
		"Gates e Jobs"
	  ],
	  answer: 0
	},
	{
	  question: "Quantas perspectivas tradicionais tem o Balanced Scorecard?",
	  options: [
		"3",
		"4",
		"5",
		"6"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes NÃO é uma perspectiva tradicional do BSC?",
	  options: [
		"Financeira",
		"Clientes",
		"Processos Internos",
		"Tecnológica"
	  ],
	  answer: 3
	},
	{
	  question: "Qual é o principal objetivo de um Mapa Estratégico no BSC?",
	  options: [
		"Mostrar a localização física das lojas",
		"Visualizar as relações causa-efeito entre objetivos",
		"Desenhar a arquitetura de rede",
		"Planejar as férias dos funcionários"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes é um exemplo de KPI para a perspectiva Financeira no BSC de TI?",
	  options: [
		"ROI de projetos de TI",
		"Satisfação do usuário",
		"Tempo de treinamento",
		"Número de linguagens de programação usadas"
	  ],
	  answer: 0
	},
	{
	  question: "Como o BSC pode ser aplicado à Governança de TI?",
	  options: [
		"Medindo apenas custos de TI",
		"Alinhando métricas de TI com objetivos de negócio",
		"Focando apenas em tecnologia",
		"Ignorando aspectos financeiros"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes é um benefício do BSC para TI?",
	  options: [
		"Foco exclusivo em tecnologia",
		"Visão equilibrada de diferentes aspectos do desempenho",
		"Redução da necessidade de métricas",
		"Eliminação da necessidade de alinhamento com o negócio"
	  ],
	  answer: 1
	},
	{
	  question: "Qual é a sequência correta de implementação do BSC?",
	  options: [
		"Definir KPIs → Criar mapa estratégico → Estabelecer metas",
		"Criar mapa estratégico → Definir KPIs → Estabelecer metas",
		"Estabelecer metas → Criar mapa estratégico → Definir KPIs",
		"Contratar consultores → Comprar software → Ignorar métricas"
	  ],
	  answer: 1
	},
	{
	  question: "Qual destes é um exemplo de KPI para a perspectiva 'Aprendizado e Crescimento' no BSC de TI?",
	  options: [
		"Número de certificações da equipe",
		"Lucro por funcionário",
		"Número de servidores",
		"Velocidade da rede"
	  ],
	  answer: 0
	},
	{
	  question: "Como o BSC se relaciona com outros frameworks como COBIT e ITIL?",
	  options: [
		"Substitui todos eles",
		"Pode ser usado para medir sua eficácia",
		"É incompatível com eles",
		"Foi desenvolvido apenas para áreas não-TI"
	  ],
	  answer: 1
	}
	  
	];

	// Função para selecionar 10 questões aleatórias
	function getRandomQuestions(bank, num) {
	  const shuffled = [...bank].sort(() => 0.5 - Math.random());
	  return shuffled.slice(0, num);
	}

	const quizQuestions = getRandomQuestions(questionBank, 10);