let names = JSON.parse(localStorage.getItem("names")) || [];
let logs = JSON.parse(localStorage.getItem("logs")) || [];

const nameForm = document.querySelector("#name-form");
const logForm = document.querySelector('#log-form');
const nameInput = document.querySelector(".name-input");
const selectDropdown = document.querySelector("#horse-select");
const dateInput = document.querySelector('.log-date');
const categorySelect = document.querySelector('#log-category');
const typeSelect = document.querySelector('#log-type');
const minutesInput = document.querySelector('.log-minutes');
const notesInput = document.querySelector('.log-notes');
const saveLog = document.querySelector('.log-button');

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    if (!name) return;

    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));

        console.log(names);

    nameForm.reset();
});

    names.forEach(name => {
        let option = document.createElement('option')
        option.value = name;
        option.textContent = name;
        selectDropdown.appendChild(option);
    });



saveLog.addEventListener('click', () => {

    const newLog = {
        id: crypto.randomUUID(),
        horseId: selectDropdown.value,
        date: dateInput.value,
        category: categorySelect.value,
        type: typeSelect.value,
        minutes: minutesInput.value ? Number(minutesInput.value) : null,
        notes: notesInput.value.trim(),
        createdAt: new Date().toISOString(),
    };

    logs.push(newLog);
    localStorage.setItem("logs", JSON.stringify(names));

    console.log("Saved logs:", logs);

    logForm.reset();

});


