const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
 
if(bar){
    bar.addEventListener('click',() => {
     nav.classList.add('active');
    })
}
  
if(close){
    close.addEventListener('click',() => {
     nav.classList.remove('active');
    })
}
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const lightIcon = document.getElementById("lighticon");
    const darkIcon = document.getElementById("darkicon");

    darkIcon.addEventListener("click", function () {
        body.classList.add("dark-mode");
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
    });

    lightIcon.addEventListener("click", function () {
        body.classList.remove("dark-mode");
        lightIcon.classList.add("hidden");
        darkIcon.classList.remove("hidden");
    });
});