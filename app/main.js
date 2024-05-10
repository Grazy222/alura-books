let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
// const elementoParainserirLivros = document.getElementById('livros')
//inserindo livros que está dentro section index-html


// função buscar livros API asyncromi

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI) //realizando requisição como promessa
    livros = await res.json()
    let livrosComDescontos = aplicarDesconto(livros) //aplicando descontos nos livros
    exibirOsLivrosNaTela(livrosComDescontos) 

}



