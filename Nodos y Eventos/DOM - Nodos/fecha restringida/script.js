let dateInput = document.querySelector(".dateInput");
console.log(dateInput);
let hoy = new Date();
let tomorrow = new Date(hoy.getTime() + 86400000); 
let format = tomorrow.toISOString().split('T')[0];

dateInput.setAttribute("min",format);

dateInput.addEventListener("click", ()=>{
    
});
