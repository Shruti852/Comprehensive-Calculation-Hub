let screen = document.querySelector('.screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

// Buttons Clicked Shown on Console ---- Displaying Input
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        // If User Click on "x" Button the Function Run "*/Multiplication" on screen
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.textContent = screenValue;
        }
        // Clear Screen Result
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.textContent = screenValue;
        }
        // This is for Equals or to show Final Result
        else if (buttonText == '=') {
            screen.textContent = eval(screenValue);
        }
        // Other Wise Show on Screen as Same what Click on Button by User
        else {
            screenValue += buttonText;
            screen.textContent = screenValue;
        }

    })
}
     