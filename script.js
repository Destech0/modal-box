// grab the button body elements
const bodyEl = document.body;
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", toggleDrkMode);

function toggleDrkMode() {
    bodyEl.classList.toggle("dark");
    if(btnEl.innerHTML === "DARK") {
        btnEl.innerHTML = "LIGHT";
        btnEl.setAttribute("style", "background-color: #fff; color: #000");
    } else {
        btnEl.innerHTML = "DARK";
        btnEl.setAttribute("style", "background-color: #000; color: #fff");
    }
}

const modalPageEl = document.getElementById("modal-overlay");

// display modal function
function displayModal() {
    modalPageEl.style.display = "block";
}

// class modal function
function closeModal() {
    modalPageEl.style.display = "none";
}