let names = JSON.parse(localStorage.getItem("names")) || [];

const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector(".name-input");
const selectDropdown = document.querySelector("#horse-select");

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    if (!name) return;

    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));

    names.forEach(name => {
    let option = document.createElement('option')
    option.value = name;
    option.textContent = name;
    selectDropdown.appendChild(option);
    });

    console.log(names);

    nameForm.reset();
});





