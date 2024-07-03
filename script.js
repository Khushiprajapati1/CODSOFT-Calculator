let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenText = '';

for (const item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screenText += buttonText;
            screen.value = screenText;
        }
        else if (buttonText == 'AC') {
            screenText = '';
            screen.value = screenText;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenText);
        }
        else {
            screenText += buttonText;
            screen.value = screenText;
        }
    })
}
