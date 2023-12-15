// toggle for drop down
const toggleButton = document.querySelector(".toggle-button");
const toggleButtonIcon = document.querySelector(".toggle-button i");
const dropDownMenu = document.querySelector(".dropdown-nav");

toggleButton.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleButtonIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
};

// toggle hover icons

const hoverIcons = document.querySelector(".icons-contain");
const iconText = document.querySelector(".icons-contain div p");
const iconMain = document.querySelector(".icons-contain div i");

// Initially, hide iconText
iconText.style.display = "none";

// Add an event listener for mouseenter
iconMain.addEventListener("mouseenter", () => {
  // Show iconText on mouseenter
  iconText.style.display = "contents";
});

// Add an event listener for mouseleave
iconMain.addEventListener("mouseleave", () => {
  // Hide iconText on mouseleave
  iconText.style.display = "none";
});

// pop up modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var close = document.getElementById("closeModal");
btn.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
