const openBtn = document.getElementById("open-log-modal");
const modal = document.getElementById("log-modal");
const cancelBtn = document.querySelector(".cancel-training-button");
const modalForm = document.getElementById("training-form");

let logs = JSON.parse(localStorage.getItem("logs")) || [];

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

cancelBtn.addEventListener("click", () => {
 modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if(e.target === modal) {
    modal.classList.remove("show");
  }
});

modalForm.addEventListener("submit", (e) => {

    //user inputs data


    //save info as an object


    //save to local storage 
    
});