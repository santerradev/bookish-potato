/* Sala PS | barra superior, menu lateral, bloqueio por perfil e aviso rápido.
   Inserido em todas as telas internas, para não repetir o mesmo HTML em cada arquivo.
   Telas restritas declaram o perfil no <html>: data-papel="instrutor" ou "admin". */
(function () {
  var raiz = document.documentElement;
  var pag = raiz.dataset.pagina || '';
  var exige = raiz.dataset.papel || '';
  var ATIVO = 'bg-ps-suave text-ps-texto dark:bg-ps-noite3 dark:text-ps-claro';
  var NORMAL = 'hover:bg-ps-fundo dark:hover:bg-ps-noite3';
  var BASE = 'flex items-center gap-4 pl-6 pr-4 h-11 rounded-r-full text-[15px] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ps-azul ';
  var BOTAO_ICONE = 'relative h-11 w-11 rounded-full inline-flex items-center justify-center hover:bg-ps-fundo dark:hover:bg-ps-noite3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ps-azul';
  var MENU_ITEM = 'w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-ps-fundo dark:hover:bg-ps-noite3 focus:outline-none focus-visible:bg-ps-fundo dark:focus-visible:bg-ps-noite3';
  var TITULO_GRUPO = 'pl-6 pt-4 pb-1 text-xs font-bold tracking-wider text-ps-cinza dark:text-slate-400';

  function badge(expr) {
    return '<span x-show="' + expr + ' > 0" x-cloak class="min-w-[24px] h-6 px-2 rounded-full bg-ps-azul text-ps-escuro text-xs font-bold inline-flex items-center justify-center" x-text="' + expr + '"></span>';
  }
  function item(href, ids, icone, texto, extra) {
    var on = ids.split(' ').indexOf(pag) >= 0;
    return '<a href="' + href + '" @click="$store.ps.menu = false" class="' + BASE + (on ? ATIVO : NORMAL) + '"' + (on ? ' aria-current="page"' : '') + '>' +
      ic(icone) + '<span class="flex-1">' + texto + '</span>' + (extra || '') + '</a>';
  }
  function divisor() { return '<div class="my-2 ml-6 h-px bg-ps-linha dark:bg-ps-noite3"></div>'; }

  var topo = `
<a href="#conteudo" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-ps-azul focus:text-ps-escuro font-semibold">Pular para o conteúdo</a>

<header class="fixed top-0 inset-x-0 z-40 h-16 bg-white dark:bg-ps-noite2 border-b border-ps-linha dark:border-ps-noite3">
  <div class="h-full px-2 sm:px-4 flex items-center gap-1 sm:gap-2">
    <button type="button" @click="$store.ps.menu = !$store.ps.menu" class="lg:hidden ${BOTAO_ICONE}" aria-label="Abrir menu" :aria-expanded="$store.ps.menu.toString()">${ic('menu')}</button>

    <a href="index.html" class="flex items-center gap-2.5 px-2 shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ps-azul">
      <img src="img/logo-ps.png" alt="" width="133" height="180" class="h-7 w-auto">
      <span class="font-extrabold text-lg tracking-tight">Sala <span class="text-ps-texto dark:text-ps-claro">PS</span></span>
    </a>

    <div x-show="$store.ps.titulo" x-cloak class="hidden xl:flex items-center gap-2 min-w-0 text-ps-cinza dark:text-slate-400">
      ${ic('direita', '!w-4 !h-4')}
      <span class="truncate font-semibold text-ps-escuro dark:text-slate-100 max-w-[220px]" x-text="$store.ps.titulo"></span>
    </div>

    <form action="busca.html" method="get" role="search" class="hidden md:flex flex-1 max-w-md mx-auto items-center gap-2 h-11 px-4 rounded-full bg-ps-fundo dark:bg-ps-noite focus-within:ring-2 focus-within:ring-ps-azul">
      <span class="text-ps-cinza dark:text-slate-400">${ic('busca', '!w-4 !h-4')}</span>
      <label for="busca-topo" class="sr-only">Buscar na Sala PS</label>
      <input id="busca-topo" name="q" type="search" placeholder="Buscar turmas, materiais e atividades" class="flex-1 min-w-0 bg-transparent text-sm focus:outline-none" :value="$store.ps.pagina === 'busca' ? (param('q') || '') : ''">
    </form>

    <div class="ml-auto md:ml-0 flex items-center gap-0.5 sm:gap-1">
      <span x-show="$store.ps.instrutor()" x-cloak class="hidden 2xl:inline-flex items-center h-7 px-3 mr-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-400/15 dark:text-amber-200 text-xs font-bold" x-text="'Visão: ' + $store.ps.nomePapel()"></span>

      <a href="busca.html" class="md:hidden ${BOTAO_ICONE}" aria-label="Buscar">${ic('busca')}</a>

      <div class="relative hidden sm:block" x-data="{ aberto: false }" @keydown.escape.window="aberto = false">
        <button type="button" @click="aberto = !aberto" class="${BOTAO_ICONE}" aria-label="Criar ou participar de turma" :aria-expanded="aberto.toString()">${ic('mais', '!w-6 !h-6')}</button>
        <div x-show="aberto" x-cloak @click.outside="aberto = false" x-transition.origin.top.right class="absolute right-0 mt-2 w-60 rounded-xl bg-white dark:bg-ps-noite2 border border-ps-linha dark:border-ps-noite3 shadow-lg py-2 z-50">
          <a href="index.html#participar" @click="aberto = false" class="${MENU_ITEM}">Participar da turma</a>
          <a href="index.html#criar" @click="aberto = false" class="${MENU_ITEM}">Criar turma</a>
          <a x-show="$store.ps.instrutor()" href="criar-atividade.html" class="${MENU_ITEM}">Criar atividade</a>
          <a x-show="$store.ps.instrutor()" href="editor-quiz.html" class="${MENU_ITEM}">Criar quiz</a>
        </div>
      </div>

      <a href="notificacoes.html" class="${BOTAO_ICONE}" :aria-label="'Notificações' + ($store.ps.naoLidas() ? ', ' + $store.ps.naoLidas() + ' não lidas' : '')">
        ${ic('sino')}
        <span x-show="$store.ps.naoLidas() > 0" x-cloak class="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-ps-azul text-ps-escuro text-[10px] font-bold inline-flex items-center justify-center" x-text="$store.ps.naoLidas() > 9 ? '9+' : $store.ps.naoLidas()"></span>
      </a>

      <button type="button" @click="$store.ps.alternarTema()" class="hidden sm:inline-flex ${BOTAO_ICONE}" :aria-label="$store.ps.escuro ? 'Ativar modo claro' : 'Ativar modo escuro'">
        <span x-show="$store.ps.escuro" x-cloak>${ic('sol')}</span>
        <span x-show="!$store.ps.escuro">${ic('lua')}</span>
      </button>

      <div class="relative" x-data="{ aberto: false }" @keydown.escape.window="aberto = false">
        <button type="button" @click="aberto = !aberto" class="${BOTAO_ICONE}" aria-label="Menu da conta" :aria-expanded="aberto.toString()">
          <span class="h-9 w-9 rounded-full bg-ps-azul text-ps-escuro font-bold text-sm inline-flex items-center justify-center" x-text="$store.ps.iniciais()"></span>
        </button>
        <div x-show="aberto" x-cloak @click.outside="aberto = false" x-transition.origin.top.right class="absolute right-0 mt-2 w-72 rounded-xl bg-white dark:bg-ps-noite2 border border-ps-linha dark:border-ps-noite3 shadow-lg py-2 z-50">
          <div class="px-4 py-3 border-b border-ps-linha dark:border-ps-noite3">
            <p class="font-semibold truncate" x-text="$store.ps.usuario && $store.ps.usuario.nome"></p>
            <p class="text-xs text-ps-cinza dark:text-slate-400" x-text="$store.ps.nomePapel()"></p>
          </div>
          <div class="px-4 py-3 border-b border-ps-linha dark:border-ps-noite3">
            <p class="text-xs font-bold tracking-wider text-ps-cinza dark:text-slate-400">VER A DEMO COMO</p>
            <div class="mt-2 grid grid-cols-3 gap-1 p-1 rounded-xl bg-ps-fundo dark:bg-ps-noite" role="group" aria-label="Perfil da demo">
              <template x-for="p in ['trainee', 'instrutor', 'admin']" :key="p">
                <button type="button" @click="$store.ps.definirPapel(p)" :aria-pressed="($store.ps.papel() === p).toString()"
                        class="h-9 rounded-lg text-xs font-semibold"
                        :class="$store.ps.papel() === p ? 'bg-white dark:bg-ps-noite3 shadow-sm text-ps-texto dark:text-ps-claro' : 'text-ps-cinza dark:text-slate-400 hover:text-ps-escuro dark:hover:text-white'"
                        x-text="{ trainee: 'Trainee', instrutor: 'Instrutor', admin: 'Admin' }[p]"></button>
              </template>
            </div>
          </div>
          <a href="perfil.html" class="${MENU_ITEM}">${ic('perfil')}Meu perfil</a>
          <a href="configuracoes.html" class="${MENU_ITEM}">${ic('engrenagem')}Configurações</a>
          <a href="ajuda.html" class="${MENU_ITEM}">${ic('ajuda')}Ajuda</a>
          <button type="button" @click="$store.ps.sair()" class="${MENU_ITEM}">${ic('sair')}Sair</button>
        </div>
      </div>
    </div>
  </div>
</header>

<div x-show="$store.ps.menu" x-cloak x-transition.opacity @click="$store.ps.menu = false" class="lg:hidden fixed inset-0 top-16 z-30 bg-black/40" aria-hidden="true"></div>

<nav class="fixed top-16 bottom-0 left-0 z-30 w-72 bg-white dark:bg-ps-noite2 border-r border-ps-linha dark:border-ps-noite3 overflow-y-auto transition-transform duration-200 lg:translate-x-0"
     :class="$store.ps.menu ? 'translate-x-0' : '-translate-x-full'" aria-label="Navegação principal">
  <div class="py-3 pr-3">
    ${item('index.html', 'index', 'inicio', 'Início')}
    ${item('agenda.html', 'agenda', 'agenda', 'Agenda')}

    <div x-show="!$store.ps.instrutor()">
      ${item('pendencias.html', 'pendencias', 'pendencias', 'Pendências', badge('$store.ps.totalPendentes()'))}
      ${item('notas.html', 'notas', 'notas', 'Notas')}
      ${item('certificados.html', 'certificados', 'certificado', 'Certificados')}
    </div>

    <div x-show="$store.ps.instrutor()" x-cloak>
      <p class="${TITULO_GRUPO}">ENSINO</p>
      ${item('corrigir.html', 'corrigir entregas', 'corrigir', 'Corrigir', badge('$store.ps.paraCorrigir()'))}
      ${item('criar-atividade.html', 'criar-atividade editor-quiz', 'mais', 'Criar atividade')}
      ${item('livro-notas.html', 'livro-notas', 'tabela', 'Livro de notas')}
      ${item('desempenho.html', 'desempenho', 'grafico', 'Desempenho')}
    </div>

    <div x-show="$store.ps.admin()" x-cloak>
      <p class="${TITULO_GRUPO}">ADMINISTRAÇÃO</p>
      ${item('admin.html', 'admin', 'escudo', 'Painel')}
      ${item('admin-usuarios.html', 'admin-usuarios', 'pessoas', 'Usuários')}
      ${item('admin-turmas.html', 'admin-turmas', 'grade', 'Turmas')}
      ${item('admin-trilhas.html', 'admin-trilhas', 'camadas', 'Trilhas')}
    </div>

    ${divisor()}
    <p class="${TITULO_GRUPO}">MINHAS TURMAS</p>
    <template x-for="t in $store.ps.turmas()" :key="t.id">
      <a :href="'turma.html?t=' + t.id" @click="$store.ps.menu = false"
         class="flex items-center gap-4 pl-5 pr-4 h-14 rounded-r-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ps-azul"
         :class="$store.ps.turmaAtiva === t.id ? '${ATIVO}' : '${NORMAL}'"
         :aria-current="$store.ps.turmaAtiva === t.id ? 'page' : null">
        <span class="h-8 w-8 rounded-full text-white text-sm font-bold inline-flex items-center justify-center shrink-0" :style="'background:' + t.cor" x-text="t.nome.charAt(0)"></span>
        <span class="min-w-0">
          <span class="block text-sm font-semibold truncate" x-text="t.nome"></span>
          <span class="block text-xs text-ps-cinza dark:text-slate-400 truncate" x-text="t.secao"></span>
        </span>
      </a>
    </template>

    ${divisor()}
    ${item('perfil.html', 'perfil', 'perfil', 'Meu perfil')}
    ${item('configuracoes.html', 'configuracoes', 'engrenagem', 'Configurações')}
    ${item('ajuda.html', 'ajuda', 'ajuda', 'Ajuda')}
    <button type="button" @click="$store.ps.restaurar()" class="w-full ${BASE} font-medium text-sm text-ps-cinza dark:text-slate-400 ${NORMAL}">
      ${ic('restaurar')}<span class="flex-1 text-left">Restaurar demo</span>
    </button>
    <div class="pl-6 pr-4 pt-6 pb-4 flex flex-col gap-2 text-xs">
      <a href="privacidade.html" class="text-ps-cinza dark:text-slate-400 hover:underline w-fit">Privacidade e termos</a>
      <p class="font-bold tracking-[1.5px] text-ps-cinza dark:text-slate-500">PS JÚNIOR PSEL26/2</p>
    </div>
  </div>
</nav>`;

  /* Bloqueio para telas de instrutor ou admin */
  var bloqueio = exige ? `
<div x-show="!$store.ps.pode('${exige}')" x-cloak class="fixed inset-0 top-16 lg:left-72 z-20 bg-ps-fundo dark:bg-ps-noite flex items-center justify-center px-6">
  <div class="max-w-md text-center">
    <span class="mx-auto h-16 w-16 rounded-2xl bg-white dark:bg-ps-noite2 text-ps-texto dark:text-ps-claro inline-flex items-center justify-center">${ic('cadeado', '!w-8 !h-8')}</span>
    <h1 class="mt-5 text-2xl font-extrabold">Tela ${exige === 'admin' ? 'da administração' : 'do instrutor'}</h1>
    <p class="mt-2 text-[15px] text-ps-cinza dark:text-slate-400">Na demo, troque de perfil para ver esta tela.</p>
    <button type="button" @click="$store.ps.definirPapel('${exige}')" class="mt-6 h-12 px-6 rounded-full text-[15px] font-bold bg-ps-azul text-ps-escuro inline-flex items-center gap-2 hover:brightness-105">${ic('trocar', '!w-4 !h-4')}Ver como ${exige === 'admin' ? 'admin' : 'instrutor'}</button>
  </div>
</div>` : '';

  var aviso = `
<div x-show="$store.ps.toast" x-cloak x-transition class="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-[60] rounded-xl bg-ps-escuro text-white dark:bg-white dark:text-ps-escuro px-5 py-4 text-sm shadow-lg" role="status" aria-live="polite" x-text="$store.ps.toast"></div>`;

  document.body.insertAdjacentHTML('afterbegin', topo + bloqueio);
  document.body.insertAdjacentHTML('beforeend', aviso);
})();
