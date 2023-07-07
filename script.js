const menu = document.querySelector(".menu-hamb");
const nav = document.querySelector(".border-menu");
menu.addEventListener('click', () => {
    nav.classList.toggle("menu-visible")
})