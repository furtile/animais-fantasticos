import outsideClick from './outsideclick.js';

export default class initMenuMobile {
    constructor(menuButton, menuList, events) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'active';

        if (events === undefined) this.events = ['click', 'touchstart'];
        else this.events = events;

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.menuList.classList.add(this.activeClass);
        this.menuButton.classList.add(this.activeClass);
        outsideClick(this.menuList, this.events, () => {
            this.menuList.classList.remove(this.activeClass);
            this.menuButton.classList.remove(this.activeClass);
        });
    }

    addMenuMobileEvent() {
        this.events.forEach((evento) =>
            this.menuButton.addEventListener(evento, this.openMenu)
        );
    }

    init() {
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvent();
        }
        return this;
    }
}
