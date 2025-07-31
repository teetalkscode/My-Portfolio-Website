const toggleBtn = document.getElementsByClassName("my-toggle")[0];
const toggleMenu = document.getElementById("menu");
const contactForm = document.querySelector(".contact-form");
const contactbtn = document.querySelector (".contactform");
const closebtn = document.querySelector (".close-btn");
const projectpopup = document.querySelector (".project-popup");
const projectbtn = document.querySelector (".projectpage-popup");
const closebtn2 = document.querySelector (".close-btn2");

function respMenu () {
    toggleMenu.classList.toggle("open"); }
    toggleBtn.addEventListener("click", respMenu);

function contBtn () {
    contactForm.style.display = "block"; }
    contactbtn.addEventListener("click", contBtn);

function closeBtn () {
    contactForm.style.display = "none"; }
    closebtn.addEventListener("click", closeBtn);

function projbtn () {
    projectpopup.style.display = "block"; }
    projectbtn.addEventListener("click", projbtn);

function closeBtn2 () {
    projectpopup.style.display = "none"; }
    closebtn2.addEventListener("click", closeBtn2);