// #region Imports
import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import TabNav from './modules/tabnav.js';
// #endregion

// #region Criacao de classes e variaveis
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');

const list = '[data-anime="accordion"] dt';
const accordion = new Accordion(list);

const tabMenu = '[data-tab="menu"] li';
const tabContent = '[data-tab="content"] section';
const tabNav = new TabNav(tabMenu, tabContent);

const botaoAbrir = '[data-modal="abrir"]';
const botaoFechar = '[data-modal="fechar"]';
const containerModal = '[data-modal="container"]';
const modal = new Modal(botaoAbrir, botaoFechar, containerModal);
// #endregion

// #region Iniciliazação de Funcoes
initAnimacaoScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();
// #endregion
