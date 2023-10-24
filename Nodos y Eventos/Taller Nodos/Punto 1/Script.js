let h1 = document.createElement("h1");
h1.textContent = "My presentation";

let div = document.querySelector("div");
div.insertAdjacentElement("beforebegin", h1);