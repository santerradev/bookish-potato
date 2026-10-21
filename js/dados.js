/* Sala PS | conteúdo da demo
   Para editar: cada turma tem tópicos, e cada tópico tem itens.
   tipo: 'material' | 'tarefa' | 'quiz'
   prazo: 'AAAA-MM-DD' ou null (aparece como "[a definir]")
   pontos: valor da tarefa ou do quiz (padrão da demo: 10)
   No quiz, "c" é a posição da alternativa certa, começando em 0. */

var TURMAS = [
  {
    id: 'integracao', nome: 'Integração', secao: 'Trainee PSEL26/2', cor: '#26323D',
    instrutor: '[Instrutor(a)]', codigo: '[código]',
    mural: [
      { id: 'p-int-1', autor: 'Coordenação do Trainee', data: '[data]', texto: 'Bem-vindos ao Trainee PSEL26/2! Aqui vocês encontram os materiais, as atividades e os avisos de cada encontro.' },
      { id: 'p-int-2', autor: 'Coordenação do Trainee', data: '[data]', texto: '#SAVETHEDATE\nImersão de 16/12/2026 a 19/12/2026. Em breve, mais informações.' }
    ],
    topicos: [
      { nome: 'Cultura da PS', itens: [
        { id: 'i-cultura', tipo: 'material', titulo: 'Cultura da PS', descricao: 'Jeito PS, missão, valores e RNNs (Regras Não Negociáveis): os princípios que traduzem nossos valores e nossa missão em ações.' },
        { id: 'i-glossario', tipo: 'material', titulo: 'Glossário', descricao: 'Siglas e termos do dia a dia da PS, como RG (Reunião Geral) e PE (Planejamento Estratégico).' }
      ]},
      { nome: 'Planejamento Estratégico', itens: [
        { id: 'i-pe', tipo: 'material', titulo: 'PE da PS', descricao: 'Cuidados com o novo PE: revisões no meio do semestre, a cada troca de gestão e ao virar o ano, com acompanhamento mensal pelo(a) Diretor(a) Presidente.' },
        { id: 'i-quiz-pe', tipo: 'quiz', titulo: 'Quiz: PE da PS', descricao: 'Duas perguntas rápidas sobre o acompanhamento do PE.', perguntas: [
          { p: 'Quando o PE da PS deve ser revisado?', o: ['Apenas ao virar o ano', 'No meio do semestre, a cada troca de gestão e ao virar o ano', 'Somente quando um cliente pedir'], c: 1 },
          { p: 'Quem faz o acompanhamento mensal do PE?', o: ['Os trainees', 'O(a) Diretor(a) Presidente', 'A diretoria de Marketing'], c: 1 }
        ]}
      ]},
      { nome: 'Escopos da PS', itens: [
        { id: 'i-escopos', tipo: 'material', titulo: 'Escopos da PS Júnior', descricao: 'As 8 áreas de atuação: Viabilidade e Novos Negócios, Pesquisa, Recursos Humanos, Marketing, Plano Comercial, Finanças, Processos e Planejamento Estratégico.' }
      ]},
      { nome: 'Gente e RH', itens: [
        { id: 'i-momento-rh', tipo: 'material', titulo: 'Momento RH', descricao: '[Resumo do Momento RH]' },
        { id: 'i-dinamica-rh', tipo: 'tarefa', titulo: 'Dinâmica do RH', descricao: '[Instruções da dinâmica]', prazo: null },
        { id: 'i-roda', tipo: 'tarefa', titulo: 'Roda de estudos', descricao: 'Objetivo: criar cultura de estudos desde o início e formar uma bagagem comum de conhecimento.\n[Tema e formato da roda]', prazo: null }
      ]}
    ]
  },
  {
    id: 'gestao', nome: 'Gestão e Processos', secao: 'Trainee PSEL26/2', cor: '#007FA6',
    instrutor: '[Instrutor(a)]', codigo: '[código]',
    mural: [
      { id: 'p-ges-1', autor: '[Instrutor(a)]', data: '[data]', texto: 'Materiais e dinâmicas da turma publicados na aba Atividades.' }
    ],
    topicos: [
      { nome: 'Organização', itens: [
        { id: 'g-ferramentas', tipo: 'material', titulo: 'Ferramentas e métodos de organização', descricao: 'Como trabalhar de forma mais produtiva: Kanban, para organizar tarefas em quadros de forma visual, e Notion, para organização individual ou coletiva e planejamento de atividades.' }
      ]},
      { nome: 'Processos e POPs', itens: [
        { id: 'g-processos', tipo: 'material', titulo: 'Processos', descricao: 'Mapeamento de processos e construção de fluxogramas.' },
        { id: 'g-fluxograma', tipo: 'tarefa', titulo: 'Monte seu fluxograma', descricao: 'Acesse o Lucidchart, crie um novo diagrama e comece o seu fluxograma. Tempo sugerido: 5 minutos.', prazo: null },
        { id: 'g-pops', tipo: 'material', titulo: 'O que são POPs', descricao: 'Procedimento Operacional Padrão: roteiro estruturado e padronizado com todas as operações necessárias para realizar uma tarefa.\nElementos essenciais: nome do procedimento, local de aplicação, a que se aplica, materiais ou softwares envolvidos e passo a passo.' },
        { id: 'g-pop-sanduiche', tipo: 'tarefa', titulo: 'Dinâmica: POP do sanduíche', descricao: 'Em grupos, criem um POP de como fazer um sanduíche com pão de forma, margarina, queijo e presunto.', prazo: null }
      ]},
      { nome: 'Modelo de negócio e finanças', itens: [
        { id: 'g-bmc', tipo: 'material', titulo: 'Business Model Canvas', descricao: 'Os 9 blocos: parcerias chave, atividades chave, recursos chave, proposta de valor, relacionamento com cliente, canais, segmento de clientes, estrutura de custos e fontes de receita.' },
        { id: 'g-bmc-roteiro', tipo: 'tarefa', titulo: 'Roteiro de perguntas para o BMC', descricao: 'Em grupos, elaborem um roteiro de perguntas para uma reunião com um novo cliente, com o objetivo de coletar as informações necessárias para preencher o BMC.', prazo: null },
        { id: 'g-contas', tipo: 'material', titulo: 'Plano de Contas', descricao: 'Estrutura do plano de contas da PS, com grupos como as despesas de marketing.' },
        { id: 'g-indicadores', tipo: 'material', titulo: 'Indicadores e Gráficos', descricao: '[Resumo do conteúdo]' },
        { id: 'g-quiz', tipo: 'quiz', titulo: 'Quiz: ferramentas de gestão', descricao: 'Teste o que você aprendeu nesta turma.', perguntas: [
          { p: 'No 5W2H, o que o "How Much" responde?', o: ['Quem fará?', 'Quanto vai custar?', 'Quando será feito?'], c: 1 },
          { p: 'Para que serve o Kanban?', o: ['Organizar tarefas em quadros, de forma visual', 'Calcular o preço de um serviço', 'Definir a persona do cliente'], c: 0 },
          { p: 'Qual destes é um bloco do Business Model Canvas?', o: ['Proposta de valor', 'Matriz GUT', 'Taxa de abertura'], c: 0 }
        ]}
      ]}
    ]
  },
  {
    id: 'mercado', nome: 'Mercado e Clientes', secao: 'Trainee PSEL26/2', cor: '#0B4F6C',
    instrutor: '[Instrutor(a)]', codigo: '[código]',
    mural: [
      { id: 'p-mer-1', autor: '[Instrutor(a)]', data: '[data]', texto: 'Nesta turma vamos ver Persona e ICP, Pesquisa, Análise da Concorrência, Jornada do Cliente e Customer Success.' }
    ],
    topicos: [
      { nome: 'Público e mercado', itens: [
        { id: 'm-persona', tipo: 'material', titulo: 'Persona e ICP', descricao: 'O ICP foca na empresa, com dados objetivos e segmentados, e serve à estratégia de vendas. A Persona foca na pessoa, com dados comportamentais, e orienta conteúdo, abordagem e comunicação.' },
        { id: 'm-pesquisa', tipo: 'material', titulo: 'Pesquisa', descricao: 'A pesquisa, junto com a Análise da Concorrência, leva às Estratégias de Marketing e as torna mais assertivas para o cliente.' },
        { id: 'm-concorrencia', tipo: 'material', titulo: 'Análise da Concorrência', descricao: '[Resumo do conteúdo]' }
      ]},
      { nome: 'Relacionamento com o cliente', itens: [
        { id: 'm-jornada', tipo: 'material', titulo: 'Jornada do Cliente', descricao: 'Ferramenta que mostra a experiência completa do consumidor, desde o primeiro contato com a marca até o pós-venda.' },
        { id: 'm-cs', tipo: 'material', titulo: 'Customer Success', descricao: 'Da execução à conclusão do projeto: coleta de CSAT dos entregáveis, FeedMiddle, envio de boletos e cobranças e, na conclusão, coleta do NPS.' },
        { id: 'm-quiz', tipo: 'quiz', titulo: 'Quiz: mercado e clientes', descricao: 'Três perguntas sobre os conteúdos da turma.', perguntas: [
          { p: 'Qual é o foco do ICP?', o: ['A empresa', 'A pessoa', 'O concorrente'], c: 0 },
          { p: 'Em que momento do projeto é coletado o NPS?', o: ['Na negociação', 'Na execução', 'Na conclusão'], c: 2 },
          { p: 'O que a Jornada do Cliente mostra?', o: ['Só o momento da compra', 'A experiência do primeiro contato ao pós-venda', 'O fluxo de caixa da empresa'], c: 1 }
        ]}
      ]}
    ]
  },
  {
    id: 'comunicacao', nome: 'Comunicação e Apresentações', secao: 'Trainee PSEL26/2', cor: '#2E4A5C',
    instrutor: '[Instrutor(a)]', codigo: '[código]',
    mural: [
      { id: 'p-com-1', autor: '[Instrutor(a)]', data: '[data]', texto: 'Comunicar bem não é dom: é técnica, e técnica se treina. Confira os materiais de Oratória e Pitch.' }
    ],
    topicos: [
      { nome: 'Oratória', itens: [
        { id: 'c-oratoria', tipo: 'material', titulo: 'Treinamento de Oratória', descricao: '[Resumo do conteúdo]' },
        { id: 'c-storytelling', tipo: 'material', titulo: 'Storytelling', descricao: 'Treinamento sobre como contar histórias para comunicar melhor.\n[Resumo do conteúdo]' }
      ]},
      { nome: 'Pitch', itens: [
        { id: 'c-pitch', tipo: 'material', titulo: 'Pitch', descricao: 'Pontos-chave: domínio do conteúdo, saber a ordem dos slides e das falas do grupo, e participar da construção de todas as etapas da apresentação.' },
        { id: 'c-pitch-tarefa', tipo: 'tarefa', titulo: 'Apresente seu pitch', descricao: '[Enunciado, tempo máximo e critérios de avaliação]', prazo: null }
      ]}
    ]
  },
  {
    id: 'desafios', nome: 'Desafios do Trainee', secao: 'Trainee PSEL26/2', cor: '#00668A',
    instrutor: '[Instrutor(a)]', codigo: '[código]',
    mural: [
      { id: 'p-des-1', autor: '[Instrutor(a)]', data: '[data]', texto: 'Os desafios em grupo do trainee ficam nesta turma.' }
    ],
    topicos: [
      { nome: 'Dinâmicas em grupo', itens: [
        { id: 'd-torre', tipo: 'tarefa', titulo: 'Torre de Marshmallows', descricao: 'Em 5 grupos, cada um com um líder, vocês têm 30 minutos para construir a estrutura mais alta possível com o marshmallow inteiro no topo, apoiada apenas no tampo da mesa.\nAmassar, comer ou cortar o marshmallow desclassifica o time.', prazo: null }
      ]},
      { nome: 'Desafios', itens: [
        { id: 'd-ai', tipo: 'tarefa', titulo: 'Desafio AI', descricao: '[Enunciado do desafio]', prazo: null },
        { id: 'd-framework', tipo: 'tarefa', titulo: 'Desafio do Framework', descricao: '[Enunciado do desafio]', prazo: null }
      ]}
    ]
  }
];

/* Pontuação padrão da demo para tarefas e quizzes */
TURMAS.forEach(function (t) {
  t.topicos.forEach(function (tp) {
    tp.itens.forEach(function (i) { if (i.tipo !== 'material' && i.pontos == null) i.pontos = 10; });
  });
});

/* Eventos fixos da agenda (datas tiradas dos materiais) */
var EVENTOS = [
  { id: 'imersao', titulo: 'Imersão do Trainee', inicio: '2026-12-16', fim: '2026-12-19', descricao: '#SAVETHEDATE. Mais informações em breve.' }
];

/* Trainees de exemplo, só para mostrar a tela de correção.
   "entregou" simula quem já enviou a tarefa. */
var ALUNOS_EXEMPLO = [
  { id: 'ex2', nome: '[Trainee 2]', entregou: true },
  { id: 'ex3', nome: '[Trainee 3]', entregou: true },
  { id: 'ex4', nome: '[Trainee 4]', entregou: false }
];

var AREAS_PS = ['Planejamento Estratégico', 'Marketing', 'Plano Comercial', 'Finanças', 'Processos', 'Pesquisa', 'Recursos Humanos', 'Viabilidade e Novos Negócios'];

/* Trilhas: sequência de turmas (o admin pode criar outras) */
var TRILHAS = [
  { id: 'trilha-trainee', nome: 'Trilha do Trainee PSEL26/2', descricao: 'Todas as turmas do processo seletivo, na ordem sugerida.', turmas: ['integracao', 'gestao', 'mercado', 'comunicacao', 'desafios'] }
];

/* Usuários de exemplo da administração (nomes e e-mails a definir) */
var USUARIOS_BASE = [
  { id: 'inst1', nome: '[Instrutor(a)]', email: '[e-mail]', papel: 'instrutor', ativo: true },
  { id: 'ex2', nome: '[Trainee 2]', email: '[e-mail]', papel: 'trainee', ativo: true },
  { id: 'ex3', nome: '[Trainee 3]', email: '[e-mail]', papel: 'trainee', ativo: true },
  { id: 'ex4', nome: '[Trainee 4]', email: '[e-mail]', papel: 'trainee', ativo: true }
];

/* Cores disponíveis para o banner das turmas (variações da identidade da PS) */
var CORES_TURMA = ['#26323D', '#007FA6', '#0B4F6C', '#2E4A5C', '#00668A'];
