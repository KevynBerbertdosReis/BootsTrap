localStorage.setItem('products', JSON.stringify(({ name: "gideao", })))

function listProduct(){
    
}
const colName = [
    "product_id",
    "product_name",
    "product_brand",
    "product_stock",
    "product_price_cost",
    "product_price",
];

const productsListTable = document.getElementById("products-list")

const tableBody = document.createElement("tbody");


const products = []

const tableRow = document.createElement("tr");

let id = 1;


function addProduct() {
    tableBody.innerHTML = "";

    const formAddProduct = document.getElementById("formAddProduct");
    const formData = new FormData(formAddProduct);
    formData.set("product_id", id);

    const productData = Object.fromEntries(formData);
    products.push(productData);
    localStorage.setItem('products', JSON.stringify(products));

    for (let x = 0; x <= products.length - 1; x++) {
        const produto = products[x];
        const row = document.createElement('tr');

        for (let i = 0; i < colName.length; i++) {
            const td = document.createElement("td");
            td.innerText = produto[colName[i]];
            row.appendChild(td);
        }

        tableBody.appendChild(row);
    }
    id++;
}
productsListTable.appendChild(tableBody);