export default function initAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    function AnimaNumeros() {
        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 103);
            let start = 0;
            const timer = setInterval(() => {
                start += incremento;
                numero.innerText = start;
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 25);
        });
    }

    let observer;
    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            AnimaNumeros();
        }
    }
    observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector('.numeros');

    observer.observe(observerTarget, { attributes: true });
}
