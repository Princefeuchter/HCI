
export function createTable() {
  // Create a table element
  //disableButtons();

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
  th2.innerText = "Description";
  headerRow.appendChild(th2);

  const th3 = document.createElement("th");
  th3.innerText = "Action";
  headerRow.appendChild(th3);

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
  td2.innerText = "This is the description for Group A.";
  row1.appendChild(td2);

  const td3 = document.createElement("td");
  const joinButton1 = document.createElement("button");
  joinButton1.innerText = "Join";
  joinButton1.onclick = function () {
  alert("You have joined Group A.");
  };
  td3.appendChild(joinButton1);
  row1.appendChild(td3);

  tbody.appendChild(row1);

  // Row 2: Group B
  const row2 = document.createElement("tr");
  const td4 = document.createElement("td");
  td4.innerText = "Group B";
  row2.appendChild(td4);

  const td5 = document.createElement("td");
  td5.innerText = "This is the description for Group B.";
  row2.appendChild(td5);

  const td6 = document.createElement("td");
  const joinButton2 = document.createElement("button");
  joinButton2.innerText = "Join";
  joinButton2.onclick = function () {
  alert("You have joined Group B.");
  };
  td6.appendChild(joinButton2);
  row2.appendChild(td6);

  tbody.appendChild(row2);

  table.appendChild(tbody);

  // Append the table to the body of the page
  document.body.appendChild(table);
}