import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, typeEvents) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    this.typeEvents = (typeEvents === undefined) ? ['touchstart', 'click'] : typeEvents;

    this.typeEvents = ['touchstart', 'click'];
    this.activeDrodownMenu = this.activeDrodownMenu.bind(this);
  }

  activeDrodownMenu(event) {
    const ELEMENT = event.currentTarget;

    event.preventDefault();
    ELEMENT.classList.add(this.activeClass);

    outsideClick(event.currentTarget, this.typeEvents, () => {
      ELEMENT.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.typeEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDrodownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }

    return this;
  }
}
