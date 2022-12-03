function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add("ativo");

    function activeTab(index) {
      tabConteudo.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabConteudo[index].classList.add("ativo");
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAcordo() {
  const acordoLista = document.querySelectorAll(".js-acordo dt");
  const activoClass = "ativo";
  if (acordoLista.length) {
    acordoLista[0].classList.add(activoClass);
    acordoLista[0].nextElementSibling.classList.add(activoClass);

    function activeAcordo() {
      this.classList.toggle("activoClass");
      this.nextElementSibling.classList.toggle(activoClass);
    }
    acordoLista.forEach((item) => {
      item.addEventListener("click", activeAcordo);
    });
  }
}
initAcordo();

function initiScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollTosection(event) {
    event.preventDefault();
    const href = event.correntTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollTosection);
    });
  }
}
initiScrollSuave();
