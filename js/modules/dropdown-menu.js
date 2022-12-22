export default function initDropdownMenu() {}

const dropDownMenu = document.querySelectorAll["data-dropdown"];
dropDownMenu.forEach((menu) => {
  ["touchstart", "handleClick"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
}

function outsideClick() {
  const html = document.documentElement;
  html.addEventListener("click", handleOutsideClick);
  function handleOutsideClick(event) {
    console.log("html");
  }
}
