import outsideClick from './outsideclick.js';

// const menuMobile = '[data-menu="button"]', '[data-menu="list"]', 'click', 'touchstart';
// menuMobile.init();
export default class MenuMobile {
  constructor(menuButton, menuList, typeEvents, activeClass) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    this.typeEvents = (typeEvents === undefined) ? ['touchstart', 'click'] : typeEvents;
    this.activeClass = (activeClass === undefined) ? 'active' : activeClass;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.typeEvents, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.typeEvents.forEach(
      (event) => this.menuButton.addEventListener(event, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
