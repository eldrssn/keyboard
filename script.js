const display = document.querySelector('.display');
const clearButton = document.querySelector('.button-clear');
const buttons = document.querySelectorAll('.button');

for (const button of buttons) {

    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });

    document.addEventListener('keydown', (evt) => {
        if (evt.key === " ") {
            evt.preventDefault();
        }

        if (evt.key === button.textContent) {
            button.click();
            button.classList.add('button--clicked');
        }

        if (evt.key === "Backspace") {
            clearButton.classList.add('button--clicked');
            clearButton.click();
            display.textContent = '';
        }
    });
    document.addEventListener('keyup', (evt) => {

        if (evt.key === button.textContent) {
            button.classList.remove('button--clicked');
        }

        if (evt.key === "Backspace") {
            clearButton.classList.remove('button--clicked');
        }
    });
}

clearButton.addEventListener('click', () => {
    display.textContent = '';
});