// table.js

export function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
      button.disabled = true;
  });
  createTable();
}

function createTable() {
  // Create a table element
  const table = document.createElement("table");
  table.border = "1"; // Set the border of the table

  // Create the table header (thead)
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Create header cells (th)
  const th1 = document.createElement("th");
  th1.innerText = "Group Name";
  headerRow.appendChild(th1);

  const th2 = document.createElement("th");
  th2.innerText = "Action";
  headerRow.appendChild(th2);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body (tbody)
  const tbody = document.createElement("tbody");

  // Row 1: Group A
  const row1 = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = "Group A";
  row1.appendChild(td1);

  const td2 = document.createElement("td");
  const joinButton1 = document.createElement("button");
  joinButton1.innerText = "Join";
  joinButton1.onclick = function () {
      alert("You have joined Group A.");
  };
  td2.appendChild(joinButton1);
  row1.appendChild(td2);

  tbody.appendChild(row1);

  // Row 2: Group B
  const row2 = document.createElement("tr");
  const td3 = document.createElement("td");
  td3.innerText = "Group B";
  row2.appendChild(td3);

  const td4 = document.createElement("td");
  const joinButton2 = document.createElement("button");
  joinButton2.innerText = "Join";
  joinButton2.onclick = function () {
      alert("You have joined Group B.");
  };
  td4.appendChild(joinButton2);
  row2.appendChild(td4);

  tbody.appendChild(row2);

  table.appendChild(tbody);

  // Append the table to the body of the page
  document.body.appendChild(table);
}
