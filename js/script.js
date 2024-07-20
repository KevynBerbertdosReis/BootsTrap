function add() {
    let inputProduto = document.getElementById('inputProduto').value;
    let inputMarca = document.getElementById('inputMarca').value;
    let inputEstoque = document.getElementById('inputEstoque').value;
    let inputCusto = document.getElementById('inputCusto').value;
    let inputVendas = document.getElementById('inputVendas').value;

    const dataProduct = {
        id: Math.random(),
        produto: inputProduto,
        marca: inputMarca,
        estoque: inputEstoque,
        custo: inputCusto,
        vendas: inputVendas,
    }

    console.log(dataProduct);
}