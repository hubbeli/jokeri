const newRowButton = document.querySelector('#new-row-button');
const rowCountElement = document.querySelector('#row-count');
const jokerTable = document.querySelector('#joker-table');

let rowCount = 0;

const rows = [];

newRowButton.addEventListener('click', addJokerRow);

function addJokerRow() {
    let newRow = [];

    for (let i = 0; i < 7; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        newRow.push(randomNumber);
    }

    rows.push(newRow);

    jokerTable.innerHTML = '';

    rows.forEach((row) => {
        let tr = jokerTable.insertRow();
        row.forEach((cellValue) => {
            let cell = tr.insertCell();
            cell.innerHTML = cellValue;
        });
    });

    rowCount++;
    rowCountElement.textContent = `Valmiita rivejä ${rowCount}`;
}
