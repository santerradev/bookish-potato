/* Sala PS | carregado no <head> de todas as telas, logo depois do Tailwind.
   1) protege as telas internas (sem login, volta para login.html)
   2) aplica o tema antes de desenhar a página, para não piscar
   3) configura as cores e a fonte da PS no Tailwind */
(function () {
  var raiz = document.documentElement;
  var pagina = raiz.dataset.pagina || '';
  var publica = ['login', 'cadastro', 'recuperar-senha', 'privacidade', '404'].indexOf(pagina) >= 0;

  var podeGuardar = true, sessao = null;
  try { sessao = JSON.parse(localStorage.getItem('sala-ps-v2') || 'null'); }
  catch (e) { podeGuardar = false; }

  if (!publica && podeGuardar && !(sessao && sessao.usuario)) {
    location.replace('login.html');
  }

  var tema = null;
  try { tema = localStorage.getItem('ps-tema'); } catch (e) {}
  var escuro = tema ? tema === 'escuro' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (escuro) raiz.classList.add('dark');

  /* Configurações de acessibilidade salvas */
  var cfg = (sessao && sessao.config) || {};
  if (cfg.fonte === 'grande') raiz.style.fontSize = '112.5%';
  if (cfg.reduzir) raiz.classList.add('reduzir');

  if (window.tailwind) {
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Montserrat', 'sans-serif'] },
          colors: {
            ps: {
              azul: '#00AFE3', claro: '#53CCF5', escuro: '#26323D', texto: '#007FA6',
              fundo: '#EEF3F6', suave: '#F2FAFD', linha: '#DCE6EC', cinza: '#4A5A68',
              noite: '#141C22', noite2: '#1C262E', noite3: '#2C3A46'
            }
          }
        }
      }
    };
  }
})();
