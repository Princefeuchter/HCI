import{createTable} from './table.js';
export function replaceButton() {
    // This will clear the entire body of the page.
    document.body.innerHTML = "";
//
    createNewButtons();
  }
  export function createNewButtons() {

    // Create new buttons dynamically
    const button1 = document.createElement("button");
    button1.innerText = "Prog1";
    button1.onclick = function () {
      createTable();
    };

    const button2 = document.createElement("button");
    button2.innerText = "GDS";
    button2.onclick = function () {
      createTable();
    };

    const button3 = document.createElement("button");
    button3.innerText = "HCI";
    button3.onclick = function () {
      createTable();
    };

    const button4 = document.createElement("button");
    button4.innerText = "Prog2";
    button4.onclick = function () {
      createTable();
    };

    // Append the buttons to the body
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);
    document.body.appendChild(button4);
     // Disable all buttons after one is clicked
  /*
    function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.disabled = true;
    });
  
  }*/  
  }