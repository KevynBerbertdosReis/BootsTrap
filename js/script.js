const productListTable = document.getElementById("products-list");
const tableBody = document.createElement("tbody");
const tableRow = document.createElement("tr");


const tableCellId = document.createElement("td");
tableCellId.innerText = 1;
tableRow.appendChild(tableCellId);

const tableCellProduct = document.createElement("td");
tableCellProduct.innerText = "tenis jordan air";
tableRow.appendChild(tableCellProduct);

const tableCellBrand = document.createElement("td");
tableCellBrand.innerText = "nike";
tableRow.appendChild(tableCellBrand);

const tableCellStock = document.createElement("td");
tableCellStock.innerText = 300;
tableRow.appendChild(tableCellStock);

const tableCellPriceCost = document.createElement("td");
tableCellPriceCost.innerText = 340.09;
tableRow.appendChild(tableCellPriceCost);

const tableCellPrice = document.createElement("td");
tableCellPrice.innerText = 1.999;
tableRow.appendChild(tableCellPrice);

const tableButton = document.createElement("button");
tableButton.innerText = "Ver";
tableRow.appendChild(tableButton);

const tableCellAction = document.createElement("td")

const tableEditButton = document.createElement("button");
tableEditButton.innerText = "Editar";
tableEditButton.className = "btn btn-primary"





const tableDelButton = document.createElement("button");
tableDelButton.innerText = "Deletar";
tableRow.appendChild(tableDelButton);
tableCellAction.append(tableEditButton);
tableRow.appendChild(tableCellAction);
tableBody.appendChild(tableRow);
productListTable.appendChild(tableBody);

console.log(tableBody);
