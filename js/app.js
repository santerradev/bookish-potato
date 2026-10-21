/* Sala PS | estado compartilhado entre todas as telas.
   Tudo o que a pessoa faz (entregas, notas, quizzes, avisos) fica salvo
   no navegador dela (localStorage), na chave SALA_CHAVE. */

var SALA_CHAVE = 'sala-ps-v2';
var SALA_CAMPOS = ['usuario', 'feitos', 'entregas', 'rascunhos', 'correcoes', 'quizzes', 'posts', 'comentarios', 'privados', 'eventos', 'turmasCriadas', 'perfil',
  'atividadesCriadas', 'ajustesTurma', 'arquivadas', 'convites', 'usuariosExtras', 'usuariosEdit', 'trilhas', 'lidas', 'config'];
var CONFIG_PADRAO = { fonte: 'normal', reduzir: false, perfilVisivel: true, notif: { avisos: true, notas: true, comentarios: true, agenda: true, email: false } };
var CORES_NOVAS = ['#26323D', '#007FA6', '#0B4F6C', '#2E4A5C', '#00668A'];

/* Ícones no estilo Lucide */
var ICONES = {
  inicio: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  agenda: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  pendencias: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  notas: '<path d="M3 3v18h18"/><path d="M7 16v-4M12 16V8M17 16v-7"/>',
  corrigir: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  perfil: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  pessoas: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  sair: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
  trocar: '<path d="m17 3 4 4-4 4"/><path d="M3 11V9a2 2 0 0 1 2-2h16"/><path d="m7 21-4-4 4-4"/><path d="M21 13v2a2 2 0 0 1-2 2H3"/>',
  restaurar: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  mais: '<path d="M12 5v14M5 12h14"/>',
  sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  lua: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  direita: '<path d="m9 18 6-6-6-6"/>',
  esquerda: '<path d="m15 18-6-6 6-6"/>',
  voltar: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  material: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  tarefa: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/>',
  quiz: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCirculo: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  arquivo: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  enviar: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  relogio: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  cadeado: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  olho: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  olhoFechado: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><path d="m2 2 20 20"/>',
  mensagem: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  clipe: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  lixo: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  calendarioMais: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M12 14v4M10 16h4"/>',
  sino: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  busca: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  engrenagem: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  ajuda: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
  certificado: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  escudo: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  grafico: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
  tabela: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
  camadas: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  grade: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  editar: '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.38 2.63a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
  cima: '<path d="m18 15-6-6-6 6"/>',
  baixo: '<path d="m6 9 6 6 6-6"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  impressora: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  email: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  copiar: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  caixa: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  usuarioMais: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>',
  estrela: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
};

function ic(nome, cls) {
  return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONES[nome] || '') + '</svg>';
}
function param(nome) {
  try { return new URLSearchParams(location.search).get(nome); } catch (e) { return null; }
}
function lerSala() {
  try { return JSON.parse(localStorage.getItem(SALA_CHAVE) || 'null') || {}; } catch (e) { return {}; }
}
function agoraTexto() {
  var d = new Date();
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }) + ', ' +
         d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}
function hojeISO() {
  var d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function dataCurta(iso) {
  if (!iso) return '';
  var p = iso.split('-');
  return p[2] + '/' + p[1] + '/' + p[0];
}
function copia(o) { return JSON.parse(JSON.stringify(o)); }

document.addEventListener('alpine:init', function () {
  var s = lerSala();

  Alpine.store('ps', {
    /* ---------- dados salvos ---------- */
    usuario: s.usuario || null,          // { nome, papel: 'trainee' | 'instrutor' }
    feitos: s.feitos || {},              // materiais vistos
    entregas: s.entregas || {},          // tarefas entregues: { anexos, data }
    rascunhos: s.rascunhos || {},        // anexos ainda não entregues
    correcoes: s.correcoes || {},        // 'idTarefa|aluno': { nota, feedback, data }
    quizzes: s.quizzes || {},            // quizzes respondidos
    posts: s.posts || {},                // avisos novos por turma
    comentarios: s.comentarios || {},    // comentários do mural
    privados: s.privados || {},          // comentários particulares por tarefa e aluno
    eventos: s.eventos || [],            // eventos criados na agenda
    turmasCriadas: s.turmasCriadas || [],
    perfil: s.perfil || { area: '' },
    atividadesCriadas: s.atividadesCriadas || {}, // turma -> [{ topico, item }]
    ajustesTurma: s.ajustesTurma || {},           // turma -> { nome, secao, cor, codigo, instrutor }
    arquivadas: s.arquivadas || {},
    convites: s.convites || {},                   // turma -> [e-mails]
    usuariosExtras: s.usuariosExtras || [],
    usuariosEdit: s.usuariosEdit || {},           // id -> { papel, ativo }
    trilhas: s.trilhas || copia(TRILHAS),
    lidas: s.lidas || {},                         // notificações lidas
    config: Object.assign(copia(CONFIG_PADRAO), s.config || {}),

    /* ---------- interface ---------- */
    escuro: document.documentElement.classList.contains('dark'),
    menu: false, toast: '', _tt: null, titulo: '',
    pagina: document.documentElement.dataset.pagina || '',
    turmaAtiva: param('t'),

    salvar() {
      var o = {}, self = this;
      SALA_CAMPOS.forEach(function (k) { o[k] = self[k]; });
      try { localStorage.setItem(SALA_CHAVE, JSON.stringify(o)); } catch (e) {}
    },

    /* ---------- conta ---------- */
    entrar(nome, papel) {
      this.usuario = { nome: nome || 'Trainee demo', papel: papel || 'trainee' };
      this.salvar();
    },
    sair() {
      this.usuario = null; this.salvar();
      location.href = 'login.html';
    },
    papel() { return (this.usuario && this.usuario.papel) || 'trainee'; },
    /* instrutor() vale para instrutor e admin: os dois veem as ferramentas de ensino */
    instrutor() { return this.papel() === 'instrutor' || this.papel() === 'admin'; },
    admin() { return this.papel() === 'admin'; },
    pode(p) { return !p || p === 'trainee' || (p === 'instrutor' && this.instrutor()) || (p === 'admin' && this.admin()); },
    nomePapel(p) { return { trainee: 'Trainee', instrutor: 'Instrutor(a)', admin: 'Administrador(a)' }[p || this.papel()]; },
    definirPapel(p) {
      if (!this.usuario || this.usuario.papel === p) return;
      this.usuario.papel = p;
      this.salvar();
      this.avisar('Agora você está na visão: ' + this.nomePapel(p) + '.');
    },
    trocarPapel() { this.definirPapel(this.instrutor() ? 'trainee' : 'instrutor'); },
    iniciais(nome) {
      var n = (nome || (this.usuario && this.usuario.nome) || '?').replace(/\(.*?\)/g, '').replace(/[^\p{L}\p{N}\s]/gu, '').trim() || '?';
      var p = n.split(/\s+/);
      return ((p[0] || '?').charAt(0) + (p.length > 1 ? p[p.length - 1].charAt(0) : '')).toUpperCase();
    },

    /* ---------- turmas e itens ---------- */
    /* Junta a turma original com os ajustes e as atividades criadas pelo instrutor */
    montarTurma(t) {
      var extras = this.atividadesCriadas[t.id] || [];
      var topicos = t.topicos.map(function (tp) { return { nome: tp.nome, itens: tp.itens.slice() }; });
      extras.forEach(function (e) {
        var tp = topicos.find(function (x) { return x.nome === e.topico; });
        if (!tp) { tp = { nome: e.topico, itens: [] }; topicos.push(tp); }
        tp.itens.push(e.item);
      });
      return Object.assign({}, t, this.ajustesTurma[t.id] || {}, { topicos: topicos, arquivada: !!this.arquivadas[t.id] });
    },
    turmas(comArquivadas) {
      var self = this;
      return TURMAS.concat(this.turmasCriadas)
        .map(function (t) { return self.montarTurma(t); })
        .filter(function (t) { return comArquivadas || !t.arquivada; });
    },
    turma(id) { return this.turmas(true).find(function (t) { return t.id === id; }) || null; },
    itens(t) {
      var out = [];
      (t ? t.topicos : []).forEach(function (tp) { tp.itens.forEach(function (i) { out.push(i); }); });
      return out;
    },
    achar(id) {
      var ts = this.turmas(true);
      for (var a = 0; a < ts.length; a++)
        for (var b = 0; b < ts[a].topicos.length; b++)
          for (var c = 0; c < ts[a].topicos[b].itens.length; c++)
            if (ts[a].topicos[b].itens[c].id === id) return { turma: ts[a], topico: ts[a].topicos[b], item: ts[a].topicos[b].itens[c] };
      return null;
    },
    urlItem(tid, it) {
      var pag = { material: 'material.html', tarefa: 'atividade.html', quiz: 'quiz.html' }[it.tipo];
      return pag + '?t=' + encodeURIComponent(tid) + '&id=' + encodeURIComponent(it.id);
    },
    rotulo(tipo) { return { material: 'Material', tarefa: 'Tarefa', quiz: 'Quiz' }[tipo]; },
    icone(nome, cls) { return ic(nome, cls); },
    corTipo(tipo) {
      return {
        material: 'bg-ps-suave text-ps-texto dark:bg-ps-noite3 dark:text-ps-claro',
        tarefa: 'bg-ps-escuro text-white dark:bg-ps-claro dark:text-ps-escuro',
        quiz: 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300'
      }[tipo];
    },
    textoPrazo(it) { return it.prazo ? dataCurta(it.prazo) : '[a definir]'; },
    fmt(n) { return String(n).replace('.', ','); },

    /* ---------- situação do trainee ---------- */
    concluido(it) {
      if (it.tipo === 'material') return !!this.feitos[it.id];
      if (it.tipo === 'tarefa') return !!this.entregas[it.id];
      return !!this.quizzes[it.id];
    },
    pendentes(t) {
      var self = this;
      return this.itens(t).filter(function (i) { return i.tipo !== 'material' && !self.concluido(i); });
    },
    progresso(t) {
      var lista = this.itens(t), self = this;
      if (!lista.length) return 0;
      return Math.round(lista.filter(function (i) { return self.concluido(i); }).length * 100 / lista.length);
    },
    totalPendentes() {
      var self = this;
      return this.turmas().reduce(function (s, t) { return s + self.pendentes(t).length; }, 0);
    },
    correcao(id, aluno) { return this.correcoes[id + '|' + (aluno || 'voce')] || null; },
    nota(it) {
      if (it.tipo === 'quiz') {
        var q = this.quizzes[it.id];
        return q ? Math.round(q.acertos / q.total * it.pontos * 10) / 10 : null;
      }
      if (it.tipo === 'tarefa') { var c = this.correcao(it.id); return c ? c.nota : null; }
      return null;
    },
    status(it) {
      if (it.tipo === 'material') return this.feitos[it.id] ? 'Visto' : 'Não visto';
      if (it.tipo === 'quiz') return this.quizzes[it.id] ? 'Concluído' : 'Pendente';
      if (this.correcao(it.id)) return 'Avaliada';
      return this.entregas[it.id] ? 'Entregue' : 'Atribuída';
    },
    resumo(it) {
      if (it.tipo === 'material') return this.feitos[it.id] ? 'Visto' : '';
      var n = this.nota(it);
      if (n !== null) return this.fmt(n) + '/' + it.pontos;
      if (it.tipo === 'tarefa' && this.entregas[it.id]) return 'Entregue';
      return 'Prazo: ' + this.textoPrazo(it);
    },

    /* ---------- ações do trainee ---------- */
    alternarVisto(id) {
      if (this.feitos[id]) delete this.feitos[id];
      else { this.feitos[id] = true; this.avisar('Material marcado como visto.'); }
    },
    anexar(id, anexo) { this.rascunhos[id] = (this.rascunhos[id] || []).concat([anexo]); },
    removerAnexo(id, i) {
      var l = (this.rascunhos[id] || []).slice(); l.splice(i, 1); this.rascunhos[id] = l;
    },
    entregar(id) {
      this.entregas[id] = { anexos: this.rascunhos[id] || [], data: agoraTexto() };
      delete this.rascunhos[id];
      this.avisar('Tarefa entregue.');
    },
    cancelarEntrega(id) {
      var e = this.entregas[id];
      if (!e) return;
      this.rascunhos[id] = e.anexos || [];
      delete this.entregas[id];
      this.avisar('Entrega cancelada. Você pode alterar e entregar de novo.');
    },
    enviarQuiz(it, respostas) {
      var acertos = 0;
      it.perguntas.forEach(function (q, i) { if (respostas[i] === q.c) acertos++; });
      this.quizzes[it.id] = { acertos: acertos, total: it.perguntas.length, respostas: respostas.slice(), data: agoraTexto() };
      return acertos;
    },
    refazerQuiz(id) { delete this.quizzes[id]; },

    /* ---------- mural e comentários ---------- */
    mural(t) { return (this.posts[t.id] || []).concat(t.mural || []); },
    publicar(tid, texto) {
      if (!texto || !texto.trim()) return;
      var novo = { id: 'u-' + Date.now(), autor: this.usuario.nome, meu: true, data: agoraTexto(), texto: texto.trim() };
      this.posts[tid] = [novo].concat(this.posts[tid] || []);
      this.avisar('Aviso publicado.');
    },
    comentar(postId, texto) {
      if (!texto || !texto.trim()) return;
      this.comentarios[postId] = (this.comentarios[postId] || []).concat([{ autor: this.usuario.nome, texto: texto.trim(), data: agoraTexto() }]);
    },
    conversa(id, aluno) { return this.privados[id + '|' + (aluno || 'voce')] || []; },
    comentarPrivado(id, aluno, texto) {
      if (!texto || !texto.trim()) return;
      var k = id + '|' + (aluno || 'voce');
      var autor = this.instrutor() ? 'Instrutor(a)' : this.usuario.nome;
      this.privados[k] = (this.privados[k] || []).concat([{ autor: autor, instrutor: this.instrutor(), texto: texto.trim(), data: agoraTexto() }]);
    },

    /* ---------- instrutor ---------- */
    entregaDe(id, aluno) {
      if (aluno === 'voce') return this.entregas[id] || null;
      var ex = ALUNOS_EXEMPLO.find(function (a) { return a.id === aluno; });
      return ex && ex.entregou ? { anexos: [{ tipo: 'arquivo', nome: '[arquivo de exemplo]' }], data: '[data]', exemplo: true } : null;
    },
    paraCorrigir(t) {
      var self = this, n = 0;
      (t ? [t] : this.turmas()).forEach(function (tu) {
        self.itens(tu).forEach(function (i) {
          if (i.tipo !== 'tarefa') return;
          ['voce'].concat(ALUNOS_EXEMPLO.map(function (a) { return a.id; })).forEach(function (al) {
            if (self.entregaDe(i.id, al) && !self.correcao(i.id, al)) n++;
          });
        });
      });
      return n;
    },
    devolver(id, aluno, nota, feedback) {
      this.correcoes[id + '|' + aluno] = { nota: nota, feedback: (feedback || '').trim(), data: agoraTexto() };
      this.avisar('Nota devolvida ao trainee.');
    },

    /* ---------- turmas criadas ---------- */
    criarTurma(nome, secao) {
      var id = 'nova-' + Date.now();
      this.turmasCriadas = this.turmasCriadas.concat([{
        id: id, nome: nome, secao: secao || 'Sem seção',
        cor: CORES_NOVAS[this.turmasCriadas.length % CORES_NOVAS.length],
        instrutor: this.usuario ? this.usuario.nome : '[Instrutor(a)]', codigo: '[código]', topicos: [],
        mural: [{ id: 'm-' + id, autor: 'Sala PS', data: agoraTexto(), texto: 'Turma criada. Use o mural para os avisos da turma.' }]
      }]);
      this.salvar();
      return id;
    },

    /* ---------- instrutor: criar e ajustar ---------- */
    topicosDe(tid) { var t = this.turma(tid); return t ? t.topicos.map(function (x) { return x.nome; }) : []; },
    criarAtividade(tid, topico, item) {
      item.id = 'a-' + Date.now();
      if (item.tipo !== 'material' && !item.pontos) item.pontos = 10;
      this.atividadesCriadas[tid] = (this.atividadesCriadas[tid] || []).concat([{ topico: topico, item: item }]);
      return item.id;
    },
    excluirAtividade(tid, id) {
      this.atividadesCriadas[tid] = (this.atividadesCriadas[tid] || []).filter(function (e) { return e.item.id !== id; });
    },
    criada(tid, id) { return (this.atividadesCriadas[tid] || []).some(function (e) { return e.item.id === id; }); },
    ajustarTurma(tid, dados) { this.ajustesTurma[tid] = Object.assign({}, this.ajustesTurma[tid] || {}, dados); },
    arquivar(tid, sim) {
      if (sim) this.arquivadas[tid] = true; else delete this.arquivadas[tid];
      this.avisar(sim ? 'Turma arquivada.' : 'Turma restaurada.');
    },
    convidar(tid, email) { this.convites[tid] = (this.convites[tid] || []).concat([email]); },
    alunosDe() { return [{ id: 'voce', nome: (this.usuario && this.usuario.nome) || 'Você' }].concat(ALUNOS_EXEMPLO); },

    /* ---------- administração ---------- */
    usuarios() {
      var self = this, eu = this.usuario || { nome: 'Você', papel: 'trainee' };
      var base = [{ id: 'voce', nome: eu.nome + ' (você)', email: '[e-mail da PS]', papel: eu.papel, ativo: true, voce: true }]
        .concat(USUARIOS_BASE).concat(this.usuariosExtras);
      return base.map(function (u) { return u.voce ? u : Object.assign({}, u, self.usuariosEdit[u.id] || {}); });
    },
    editarUsuario(id, dados) { this.usuariosEdit[id] = Object.assign({}, this.usuariosEdit[id] || {}, dados); },
    criarUsuario(u) {
      u.id = 'u-' + Date.now(); u.ativo = true;
      this.usuariosExtras = this.usuariosExtras.concat([u]);
    },
    progressoTrilha(tr) {
      var self = this, ts = tr.turmas.map(function (id) { return self.turma(id); }).filter(Boolean);
      if (!ts.length) return 0;
      return Math.round(ts.reduce(function (s, t) { return s + self.progresso(t); }, 0) / ts.length);
    },

    /* ---------- notificações ---------- */
    notificacoes() {
      var s = this, out = [], cfg = this.config.notif;
      // Novidades geradas pelo uso da demo (as mais recentes primeiro)
      var din = [];
      Object.keys(this.correcoes).forEach(function (k) {
        var p = k.split('|'); if (p[1] !== 'voce' || s.instrutor()) return;
        var a = s.achar(p[0]); if (!a) return;
        din.push({ id: 'n-nota-' + k + s.correcoes[k].data, tipo: 'notas', icone: 'notas', titulo: 'Nota devolvida: ' + a.item.titulo,
          texto: s.fmt(s.correcoes[k].nota) + '/' + a.item.pontos + (s.correcoes[k].feedback ? '. ' + s.correcoes[k].feedback : ''), data: s.correcoes[k].data, link: s.urlItem(a.turma.id, a.item) });
      });
      Object.keys(this.privados).forEach(function (k) {
        var p = k.split('|'), a = s.achar(p[0]); if (!a) return;
        s.privados[k].forEach(function (c, i) {
          var meu = s.instrutor() ? c.instrutor : !c.instrutor; if (meu) return;
          din.push({ id: 'n-priv-' + k + '-' + i, tipo: 'comentarios', icone: 'mensagem', titulo: (c.instrutor ? 'Comentário do instrutor em ' : 'Comentário de trainee em ') + a.item.titulo,
            texto: c.texto, data: c.data, link: s.instrutor() ? 'corrigir.html?t=' + a.turma.id + '&id=' + a.item.id : s.urlItem(a.turma.id, a.item) });
        });
      });
      if (this.instrutor()) Object.keys(this.entregas).forEach(function (id) {
        var a = s.achar(id); if (!a) return;
        din.push({ id: 'n-ent-' + id + s.entregas[id].data, tipo: 'avisos', icone: 'tarefa', titulo: 'Nova entrega: ' + a.item.titulo, texto: 'Sua entrega (demo) está esperando correção.', data: s.entregas[id].data, link: 'corrigir.html?t=' + a.turma.id + '&id=' + id });
      });
      Object.keys(this.atividadesCriadas).forEach(function (tid) {
        var t = s.turma(tid); if (!t) return;
        s.atividadesCriadas[tid].forEach(function (e) {
          din.push({ id: 'n-nova-' + e.item.id, tipo: 'avisos', icone: e.item.tipo, titulo: 'Nova atividade em ' + t.nome, texto: e.item.titulo, data: 'Agora há pouco', link: s.urlItem(tid, e.item) });
        });
      });
      out = din.reverse();
      // Avisos fixos da demo
      EVENTOS.forEach(function (e) {
        out.push({ id: 'n-ev-' + e.id, tipo: 'agenda', icone: 'agenda', titulo: e.titulo, texto: dataCurta(e.inicio) + ' a ' + dataCurta(e.fim) + '. ' + e.descricao, data: '', link: 'agenda.html' });
      });
      this.turmas().forEach(function (t) {
        (t.mural || []).forEach(function (p) {
          out.push({ id: 'n-post-' + p.id, tipo: 'avisos', icone: 'mensagem', titulo: 'Aviso em ' + t.nome, texto: p.texto, data: p.data, link: 'turma.html?t=' + t.id });
        });
      });
      out.push({ id: 'n-boas', tipo: 'avisos', icone: 'estrela', titulo: 'Bem-vindo à Sala PS', texto: 'Faça o tour rápido para conhecer a plataforma.', data: '', link: 'boas-vindas.html' });
      return out.filter(function (n) { return cfg[n.tipo] !== false; });
    },
    naoLidas() { var l = this.lidas; return this.notificacoes().filter(function (n) { return !l[n.id]; }).length; },
    marcarLida(id) { this.lidas[id] = true; },
    marcarTodasLidas() { var self = this; this.notificacoes().forEach(function (n) { self.lidas[n.id] = true; }); },

    /* ---------- busca ---------- */
    buscar(q) {
      q = (q || '').trim().toLowerCase();
      if (q.length < 2) return [];
      var s = this, out = [];
      function bate(txt) { return (txt || '').toLowerCase().indexOf(q) >= 0; }
      this.turmas().forEach(function (t) {
        if (bate(t.nome) || bate(t.secao)) out.push({ tipo: 'Turma', icone: 'grade', titulo: t.nome, sub: t.secao, link: 'turma.html?t=' + t.id });
        t.topicos.forEach(function (tp) {
          tp.itens.forEach(function (i) {
            if (bate(i.titulo) || bate(i.descricao)) out.push({ tipo: s.rotulo(i.tipo), icone: i.tipo, titulo: i.titulo, sub: t.nome + ' · ' + tp.nome, link: s.urlItem(t.id, i), trecho: i.descricao });
          });
        });
        s.mural(t).forEach(function (p) {
          if (bate(p.texto)) out.push({ tipo: 'Aviso', icone: 'mensagem', titulo: 'Aviso em ' + t.nome, sub: p.autor, link: 'turma.html?t=' + t.id, trecho: p.texto });
        });
      });
      EVENTOS.concat(this.eventos).forEach(function (e) {
        if (bate(e.titulo) || bate(e.descricao)) out.push({ tipo: 'Evento', icone: 'agenda', titulo: e.titulo, sub: dataCurta(e.inicio), link: 'agenda.html' });
      });
      return out;
    },

    /* ---------- tema e acessibilidade ---------- */
    temaEscolhido() { var t = null; try { t = localStorage.getItem('ps-tema'); } catch (e) {} return t || 'sistema'; },
    definirTema(v) {
      try { if (v === 'sistema') localStorage.removeItem('ps-tema'); else localStorage.setItem('ps-tema', v); } catch (e) {}
      this.escuro = v === 'sistema' ? window.matchMedia('(prefers-color-scheme: dark)').matches : v === 'escuro';
    },

    /* ---------- interface ---------- */
    alternarTema() {
      this.escuro = !this.escuro;
      try { localStorage.setItem('ps-tema', this.escuro ? 'escuro' : 'claro'); } catch (e) {}
    },
    avisar(msg) {
      var self = this;
      this.toast = msg;
      clearTimeout(this._tt);
      this._tt = setTimeout(function () { self.toast = ''; }, 3200);
    },
    restaurar() {
      if (!confirm('Restaurar a demo? Entregas, notas, quizzes, avisos, eventos e turmas criadas serão apagados deste navegador.')) return;
      var self = this;
      ['feitos', 'entregas', 'rascunhos', 'correcoes', 'quizzes', 'posts', 'comentarios', 'privados'].forEach(function (k) { self[k] = {}; });
      ['atividadesCriadas', 'ajustesTurma', 'arquivadas', 'convites', 'usuariosEdit', 'lidas'].forEach(function (k) { self[k] = {}; });
      this.eventos = []; this.turmasCriadas = []; this.usuariosExtras = []; this.perfil = { area: '' };
      this.trilhas = copia(TRILHAS); this.config = copia(CONFIG_PADRAO);
      this.salvar();
      location.href = 'index.html';
    }
  });

  /* Salva sozinho sempre que algo muda */
  Alpine.effect(function () { Alpine.store('ps').salvar(); });
  /* Texto maior e menos animação (Configurações) */
  Alpine.effect(function () {
    var c = Alpine.store('ps').config;
    document.documentElement.style.fontSize = c.fonte === 'grande' ? '112.5%' : '';
    document.documentElement.classList.toggle('reduzir', !!c.reduzir);
  });
  /* Aplica o tema */
  Alpine.effect(function () {
    document.documentElement.classList.toggle('dark', Alpine.store('ps').escuro);
  });
  /* Segue o tema do sistema enquanto a pessoa não escolher */
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  if (mq.addEventListener) mq.addEventListener('change', function (e) {
    var t = null; try { t = localStorage.getItem('ps-tema'); } catch (err) {}
    if (!t) Alpine.store('ps').escuro = e.matches;
  });
});
