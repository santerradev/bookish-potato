# Sala PS | Demo completa (31 telas)

Demo de ambiente virtual de aprendizagem (AVA) da PS Júnior Consultoria, no estilo do Google Classroom, com os conteúdos do Trainee PSEL26/2. É um site estático: não tem servidor nem banco de dados. Tudo o que a pessoa faz fica salvo só no navegador dela.

A demo tem três perfis: **Trainee**, **Instrutor** e **Admin**. Para trocar, use o menu da conta (canto superior direito) em "Ver a demo como". O menu lateral muda conforme o perfil, e as telas restritas pedem a troca de perfil.

## Telas

### Acesso
| Arquivo | Tela |
|---|---|
| `login.html` | Entrar com e-mail e senha, ou direto como Trainee, Instrutor ou Admin |
| `cadastro.html` | Criar conta, com validação e força da senha |
| `recuperar-senha.html` | Pedir o link de nova senha |
| `boas-vindas.html` | Tour de primeiro acesso em 4 passos |

### Trainee
| Arquivo | Tela |
|---|---|
| `index.html` | Início com os cards das turmas, criar turma e participar com código |
| `turma.html` | Turma com Mural, Atividades e Pessoas |
| `atividade.html` | Tarefa: anexos, entrega, nota e comentários particulares |
| `material.html` | Material com visualizador e navegação anterior/próximo |
| `quiz.html` | Quiz com uma pergunta por vez, resultado e revisão |
| `pendencias.html` | Tarefas e quizzes pendentes e concluídos |
| `notas.html` | Notas, feedbacks e aproveitamento |
| `agenda.html` | Calendário, prazos das tarefas e eventos |
| `notificacoes.html` | Avisos, notas devolvidas, comentários e eventos |
| `certificados.html` | Certificado por turma concluída, para imprimir ou salvar em PDF |
| `perfil.html` | Dados, área de interesse e números do trainee |
| `configuracoes.html` | Tema, texto maior, menos animação, notificações e dados (LGPD) |
| `busca.html` | Busca em turmas, materiais, atividades, avisos e eventos |

### Instrutor
| Arquivo | Tela |
|---|---|
| `turma-config.html` | Nome, seção, cor, instrutor, código, convites e arquivar |
| `criar-atividade.html` | Publicar material ou tarefa, com prévia |
| `editor-quiz.html` | Montar quiz: perguntas, alternativas e resposta certa |
| `entregas.html` | Quem entregou cada tarefa, com filtros |
| `corrigir.html` | Nota, feedback e conversa com o trainee |
| `livro-notas.html` | Todas as notas da turma numa tabela, com exportação em CSV |
| `desempenho.html` | Indicadores e gráficos de entregas, com opção de tabela |

### Administração
| Arquivo | Tela |
|---|---|
| `admin.html` | Painel com indicadores e atalhos |
| `admin-usuarios.html` | Cadastrar usuários, trocar perfil e ativar ou desativar |
| `admin-turmas.html` | Turmas ativas e arquivadas |
| `admin-trilhas.html` | Criar e ordenar trilhas de turmas |

### Sistema
| Arquivo | Tela |
|---|---|
| `ajuda.html` | Perguntas frequentes com busca e contato |
| `privacidade.html` | Modelo de política de privacidade e termos (para revisão) |
| `404.html` | Página não encontrada (o GitHub Pages usa sozinho) |

## Roteiro para apresentar (5 minutos)

1. **Acesso:** abra `cadastro.html`, crie uma conta e passe pelo tour.
2. **Trainee:** abra uma tarefa, anexe um link, entregue e mande um comentário particular. Faça um quiz.
3. **Instrutor:** troque o perfil. Crie uma tarefa com prazo (ela aparece na Agenda) e monte um quiz no editor.
4. **Correção:** em Corrigir, dê nota e feedback à "Sua entrega". Veja o Livro de notas e o Desempenho.
5. **Trainee de novo:** veja a nota em Notas e a notificação no sino.
6. **Admin:** veja o Painel, cadastre um usuário e organize uma trilha.

O botão **Restaurar demo** apaga tudo e volta ao início.

## Estrutura

```
*.html          as 31 telas
js/tw.js        protege as telas internas, aplica tema e acessibilidade e configura as cores no Tailwind
js/dados.js     turmas, atividades, quizzes, eventos, trilhas e usuários de exemplo
js/app.js       estado compartilhado (progresso, entregas, notas, notificações, busca), salvo no navegador
js/layout.js    barra superior, menu lateral por perfil e bloqueio das telas restritas
css/sala.css    estilos que o Tailwind não cobre (ícones, impressão do certificado)
img/            logo e foto da equipe
```

Tecnologias, todas via CDN e sem build: **Tailwind CSS**, **Alpine.js** e a fonte **Montserrat**.

## Como editar o conteúdo

Tudo fica em `js/dados.js`:

- **Turmas, tópicos e atividades:** em `TURMAS`.
  - Tipo da atividade: `material`, `tarefa` ou `quiz`.
  - Prazo: `'AAAA-MM-DD'`.
  - Quiz: `c` é a posição da alternativa certa, começando em 0.
- **Eventos fixos da agenda:** em `EVENTOS`.
- **Trilhas:** em `TRILHAS`.
- **Usuários de exemplo:** em `USUARIOS_BASE` e `ALUNOS_EXEMPLO`.

## Como publicar no GitHub Pages

1. Crie um repositório público (exemplo: `sala-ps`).
2. Envie **todo o conteúdo** desta pasta para a raiz do repositório, mantendo as pastas `js`, `css` e `img`.
3. Em **Settings > Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e clique em **Save**.
4. Em alguns minutos, o site estará em `https://[seu-usuario].github.io/sala-ps/`.

## Campos em aberto

- [Instrutor(a)], [código], [data] e [link do material]
- [carga horária], [Diretor(a) Presidente] e [código] de verificação no certificado
- [e-mail da PS], [e-mail de suporte] e nomes e e-mails dos usuários (hoje [Trainee 2], [Trainee 3], [Trainee 4] e [Instrutor(a)], só de exemplo)
- Política de privacidade: [CNPJ], encarregado de dados, base legal e revisão do texto pela PS
- Resumos e enunciados que não estão nos materiais do trainee
- Pontuação: tarefas e quizzes valem 10 pontos por padrão na demo
