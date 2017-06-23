export default function hamburger() {
  let hamburger = document.getElementById("hamburger");
  let hidedMenu = document.getElementById("js-hided");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    hidedMenu.classList.toggle("js-visible");
    hidedMenu.classList.toggle("js-hided");
  })
}