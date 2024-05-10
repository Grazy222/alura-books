// função de filtrar os livros

// const btnFiltrarLivrosDeFront = document.getElementById
// ('btnFiltrarLivrosFront')
// btnFiltrarLivrosDeFront.addEventListener('click',
// filtrarLivros)
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn =>btn.addEventListener('click', 
filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorCategoria() :livros.filter(livro => livro.categoria == categoria) 
    // Eu vou pegar o livro e vou fazer um filtro com base na quantidade maior do que zero. Senão, eu vou fazer um filtro com base na categoria que já tínhamos.
    exibirOsLivrosNaTela(livrosFiltrados) //responsável por mostrar os livros na tela
 
 if (categoria == 'dispovivel'){
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) // metudo Reduce
    
    exibirValoresTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
 }

function filtrarPorCategoria() {
    return livros.filter(livro.quantidade > 0)
}

 function exibirValoresTotalDosLivrosDisponiveisNaTela(){
    elementoComValorTotalDeLivrosDisponivel.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
 }
 // Limpa o conteúdo anterior
    // botoes.innerHTML = '';


