/*
con el evento scroll hacer que aparezca 
el botón en la parte baja y al darle click al botón 
hacer que suba el menú y se oculta de nuevo el botón.
*/

let btn = document.querySelector("#myBtn");

window.addEventListener("scroll", (event)=>{
    if(window.scrollY > 200){
        btn.style.display = "block";
    }
});

btn.addEventListener("click", () =>{
    window.scrollTo(top);
    btn.style.display = "none";
});