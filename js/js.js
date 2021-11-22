
const btnCel = document.querySelector(".navCel__btn");
const nav = document.querySelector(".nav");
btnCel.addEventListener("click", () =>{
    nav.classList.toggle("activo")

});


const btnSubmenu = document.querySelector(".container__submenu");
const submenu = document.querySelector(".submenu")
btnSubmenu.addEventListener("click", () =>{
    submenu.classList.toggle("activo");
});