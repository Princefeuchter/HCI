// buttons.js

import { disableButtons } from './table.js';

export function replaceButton() {
    // Clear the body and create new buttons
    document.body.innerHTML = "";
    createNewButtons();
}

function createNewButtons() {
    // Create new buttons dynamically
    const button1 = document.createElement("button");
    button1.innerText = "Prog1";
    button1.onclick = disableButtons;

    const button2 = document.createElement("button");
    button2.innerText = "GDS";
    button2.onclick = disableButtons;

    const button3 = document.createElement("button");
    button3.innerText = "HCI";
    button3.onclick = disableButtons;

    const button4 = document.createElement("button");
    button4.innerText = "Prog2";
    button4.onclick = disableButtons;

    // Append the buttons to the body
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);
    document.body.appendChild(button4);
}
