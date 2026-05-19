// DOM = Document Object Model
// É uma interface que permite acessar e manipular o conteúdo de uma página HTML
// O DOM é uma representação em árvore da página HTML
// Cada elemento HTML é um nó no DOM
// Cada nó pode ter filhos e um nó pai
// O nó raiz é o documento HTML

// Selecionar elementos

function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    // ul.innerHTML += "<li>Item adicionado</li>"

    let novoLi = document.createElement('li')
    novoLi.innerHTML = 'Item adicionado'

    ul.appendChild(novoLi)
}


