let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', btnOrdenarPorPreco)

function btnOrdenarPorPreco() {
    let livrosOrdenados = livros.sort( (a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}