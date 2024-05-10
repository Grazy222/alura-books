const elementoParainserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponivel = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponivel.innerHTML = ''
    elementoParainserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //---1--
        // let disponibilidade = verificarDisponibilidadeDoLivro(livro)
        // ---2---
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        
        // elemento no HTML no qual os livros são inseridos
        elementoParainserirLivros.innerHTML += `   
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" 
                alt="${livro.alt} " />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
      </div>

        `
    })

}
// ----1---
// function verificarDisponibilidadeDoLivro(livro) {
//     if (livro.quantidade > 0){
//         return 'livro__imagens'
//     }else{
//         return 'livro__imagens indisponivel'
//     }

// } 

//Essa função tem duas formas de fazer 1 = 2