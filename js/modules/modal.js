export default class Modal {
    constructor(abrir, fechar, container) {
        this.botaoAbrir = document.querySelector(abrir);
        this.botaoFechar = document.querySelector(fechar);
        this.containerModal = document.querySelector(container);

        // Bind this ao callback para
        // fazer referencia ao objeto
        // da classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    // Abre ou fecha o modal
    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    // Adiciona o evento de toggle ao modal
    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    //  Fecha o modal ao clicar do lado de fora
    cliqueForaModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal();
        }
    }

    // Adiciona os eventos aos elementos do modal
    addEventModal() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addEventModal();
        }
        return this;
    }
}
