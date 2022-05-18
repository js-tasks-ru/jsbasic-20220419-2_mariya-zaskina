function highlight(table) {
  let rows = table.querySelectorAll("tr");
  for (let row of rows) {
    let cellStatus = row.cells[3];
    if (cellStatus.hasAttribute("data-available")) {
      if (cellStatus.dataset.available === "true") {
        row.classList.add('available');
      } else if (cellStatus.dataset.available === "false") {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', 'true');
    }
    let cellGender = row.cells[2];
    if (cellGender.textContent === "m") {
      row.classList.add('male');
    } else if (cellGender.textContent === "f") {
      row.classList.add('female');
    }
    let cellAge = row.cells[1];
    if (cellAge.textContent < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
