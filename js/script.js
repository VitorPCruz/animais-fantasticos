// #region Imports
import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import MenuMobile from './modules/menu-mobile.js';
import TabNav from './modules/tabnav.js';
import DropdownMenu from './modules/dropdown-menu.js';
import Funcionamento from './modules/funcionamento.js';

import fetchBitcoin from './modules/fetch-bitcoin.js';
import fetchAnimais from './modules/fetch-animais.js';
// #endregion

// #region Criacao de classes e variaveis
const SCROLL_SUAVE = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const ACCORDION = new Accordion('[data-anime="accordion"] dt');
const TABNAV = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
const MODAL = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
const TOOL_TIPS = new Tooltip('[data-tooltip]');
const SCROLL_ANIMA = new ScrollAnima('[data-anime="scroll"]');
const DROPDOWN_MENU = new DropdownMenu('[data-dropdown]');
const MENU_MOBILE = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
const FUNCIONAMENTO = new Funcionamento('[data-semana]');

fetchAnimais('../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
// #endregion

// #region Inits
SCROLL_SUAVE.init();
ACCORDION.init();
TABNAV.init();
TOOL_TIPS.init();
MODAL.init();
SCROLL_ANIMA.init();
DROPDOWN_MENU.init();
MENU_MOBILE.init();
FUNCIONAMENTO.init();
// #endregion
