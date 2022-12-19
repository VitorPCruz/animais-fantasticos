// #region Imports
import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
// #endregion

// #region Criacao de classes e variaveis
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');

const list = '[data-anime="accordion"] dt';
const accordion = new Accordion(list);

// #endregion

// #region Iniciliazação de Funcoes
initAnimacaoScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

scrollSuave.init();
accordion.init();
// #endregion
