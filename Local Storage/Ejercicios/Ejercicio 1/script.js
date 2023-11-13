let clientInput = document.querySelector(".client");
let productInput = document.querySelector(".product");
let priceInput = document.querySelector(".price");
let imageInput = document.querySelector(".image");
let descriptionInput = document.querySelector(".description");
let btnSave = document.querySelector(".btn-save");
let table = document.querySelector(".table tbody");

document.addEventListener("DOMContentLoaded", () => {
    cleanTable();
    extractData();
});

btnSave.addEventListener("click", () => {
    let data = formValidation();
    if (data != null) {
        dataSave(data);
    }
    cleanTable();
    extractData();
});

// Data validation function
function formValidation() {
    let formData;
    if (clientInput.value == "" ||
        productInput.value == "" ||
        priceInput.value == "") {
        alert("Todos los campos del formulario son obligatorios");
    } else {
        formData = {
            "client": clientInput.value,
            "product": productInput.value,
            "price": priceInput.value,
            "image": imageInput.value,
            "description": descriptionInput.value
        }
    }

    console.log(formData);
    clientInput.value = "";
    productInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    descriptionInput.value = "";

    return formData;
};

const variable = "orders";


// local storage save function
function dataSave(data) {

    let orders = [];

    let olderOrders = JSON.parse(localStorage.getItem(variable));

    if (olderOrders != null) {
        orders = olderOrders;
    }


    orders.push(data);

    localStorage.setItem(variable, JSON.stringify(orders));
    alert("order save successfuly");


}


// Clean table function
function cleanTable() {
    let rows = document.querySelectorAll("table tbody tr");
    rows.forEach(row => {
        row.remove();
    });
}


// Extract data function
function extractData() {
    let orders = [];
    let olderOrders = JSON.parse(localStorage.getItem(variable));
    if (olderOrders != null) {
        orders = olderOrders;
    }

    orders.forEach((order, i) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td> ${(i + 1)} </td>
            <td> ${order.client} </td>
            <td> ${order.product} </td>
            <td> ${order.price} </td>
            <td><img src="${order.image}" width="50%"></td>
            <td> ${order.description} </td>
            <td>
                <span class="btn-edit btn btn-warning" onclick= "updateData(${i})" > 📝 </span> 
                <span class="btn-delete btn btn-danger" onclick= "deleteData(${i})" > ❌ </span> 
            </td>        
        `;
        table.appendChild(row);
    });
}


// delete order function
function deleteData(pos) {
    let orders = [];
    let olderOrders = JSON.parse(localStorage.getItem(variable));
    if (olderOrders != null) {
        orders = olderOrders;
    }

    let clientName = orders[pos].client;

    let confirmation = confirm(`Do you want to delete the order for client: ${clientName} ?`);

    if (confirmation) {
        orders.splice(pos, 1);
        alert(clientName + "'s order deleted");
        localStorage.setItem(variable, JSON.stringify(orders));
        cleanTable();
        extractData();
    }

}


// Update order function
function updateData(pos) {
    let orders = [];
    let olderOrders = JSON.parse(localStorage.getItem(variable));
    if (olderOrders != null) {
        orders = olderOrders;
    }

    clientInput.value = orders[pos].client;
    productInput.value = orders[pos].product;
    priceInput.value = orders[pos].price;
    imageInput.value = orders[pos].image;
    descriptionInput.value = orders[pos].description;

    let btnUpdate = document.querySelector(".btn-update");
    btnUpdate.classList.toggle("d-none");
    btnSave.classList.toggle("d-none");

    btnUpdate.addEventListener("click", () => {
        if (clientInput.value != "") {
            orders[pos].client = clientInput.value;
        }

        if (productInput.value != "") {
            orders[pos].product = productInput.value;
        }

        if (priceInput.value != "") {
            orders[pos].price = priceInput.value;
        }

        if (imageInput.value != "") {
            orders[pos].image = imageInput.value;
        }

        if (descriptionInput.value != "") {
            orders[pos].description = descriptionInput.value;
        }

        localStorage.setItem(variable, JSON.stringify(orders));
        alert("Update order success");

        clientInput.value = "";
        productInput.value = "";
        priceInput.value = "";
        imageInput.value = "";
        descriptionInput.value = "";

        cleanTable();
        extractData();

        btnUpdate.classList.toggle("d-none");
        btnSave.classList.toggle("d-none");
    });
}