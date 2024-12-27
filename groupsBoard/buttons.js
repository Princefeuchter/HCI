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
//    button1.onclick = disableButtons;
    styleButton(button1);

    const button2 = document.createElement("button");
    button2.innerText = "GDS";
//    button2.onclick = disableButtons;
    styleButton(button2);

    const button3 = document.createElement("button");
    button3.innerText = "HCI";
//    button3.onclick = disableButtons;
    styleButton(button3);

    const button4 = document.createElement("button");
    button4.innerText = "Prog2";
  //  button4.onclick = disableButtons;
    styleButton(button4);

    // Append the buttons to the body
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);
    document.body.appendChild(button4);
}
// Function to apply styles to the button
function styleButton(button) {
    button.onclick = disableButtons;
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.margin = "10px";
    button.style.transition = "background-color 0.3s, transform 0.3s";

    button.addEventListener("mouseover", function() {
        //button.style.backgroundColor = "#45a049";
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#4CAF50";
        button.style.transform = "scale(1)";
    });
  // Handle button click to change background color of all buttons to grey permanently
  button.addEventListener("click", function() {
    // Get all buttons on the page
    const allButtons = document.querySelectorAll("button");

    // Change the background color of all buttons to grey
    allButtons.forEach(function(btn) {
      if (!btn.classList.contains("join-button")) { // If the button is not a "Join" button
          btn.style.backgroundColor = "grey";  // Turn other buttons grey
      } else {
          // Keep the clicked "Join" button's background color green (or another color of choice)
          btn.style.backgroundColor = "#4CAF50";  // Keep clicked button green
      }
  });
});
  }