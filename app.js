const togglebtn = document.getElementById("togglebutton");
const mobileview = document.getElementById("mobile_view");
const icon = document.getElementById("nav_icon");
const iconame = "fa fa-times";
togglebtn.addEventListener("click", () => {
    mobileview.classList.toggle("show");
    icon.classList.remove("fa-bars")
    var togglestatus = icon.classList.toggle("fa-times");
    if(!togglestatus){
        icon.classList.toggle("fa-bars");   
    }
});

const mobilelink = document.getElementById("mlink");
const mv = document.getElementById("mvlink");
const mm = document.getElementById("mnlink");
const ms = document.getElementById("mslink");

mobilelink.addEventListener("click", () => {

    mobileview.classList.toggle("show");
    icon.classList.remove("fa-bars")
    var togglestatus = icon.classList.toggle("fa-times");
    if (!togglestatus) {
        icon.classList.toggle("fa-bars");
    }
});

mv.addEventListener("click", () => {

    mobileview.classList.toggle("show");
    icon.classList.remove("fa-bars")
    var togglestatus = icon.classList.toggle("fa-times");
    if (!togglestatus) {
        icon.classList.toggle("fa-bars");
    }
});
mm.addEventListener("click", () => {

    mobileview.classList.toggle("show");
    icon.classList.remove("fa-bars")
    var togglestatus = icon.classList.toggle("fa-times");
    if (!togglestatus) {
        icon.classList.toggle("fa-bars");
    }
});
ms.addEventListener("click", () => {

    mobileview.classList.toggle("show");
    icon.classList.remove("fa-bars")
    var togglestatus = icon.classList.toggle("fa-times");
    if (!togglestatus) {
        icon.classList.toggle("fa-bars");
    }
})