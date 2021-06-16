import outsideClick from './outsideclick.js';

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        // Define touchstart e click como argumento padrão
        // de events caso o usuário não defina
        if (events === undefined) this.events = ['touchstart', 'click'];
        else this.events = events;

        this.activeClass = 'active';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    // Ativa o dropdown menu e adiciona
    // a função que observa o click fora dele
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, ['touchstart', 'click'], () => {
            element.classList.remove(this.activeClass);
        });
    }

    // Adiciona os eventos ao dropdown menu
    addDropdownMenuEvent() {
        this.dropdownMenus.forEach((menu) => {
            ['touchstart', 'click'].forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
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
