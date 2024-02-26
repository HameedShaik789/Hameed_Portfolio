let menu = document.querySelector(".menu");
let butt = document.querySelector(".button")

butt.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    butt.classList.toggle("text-white")
})