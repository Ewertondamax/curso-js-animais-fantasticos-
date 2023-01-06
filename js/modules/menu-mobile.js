import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const evententos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add(active);
      menuButton.classList.add(active);
      outsideClick(menuList, evententos, () => {
        console.log("teste");

        menuList.classList.remove(active);
        menuButton.classList.remove(active);
      });
    }
    evententos.forEach((evento) =>
      menuButton.addEventListener(evento, openMenu)
    );
  }
}
