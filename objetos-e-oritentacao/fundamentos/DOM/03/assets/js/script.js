// DOM = Document Object Model
// É uma interface que permite acessar e manipular o conteúdo de uma página HTML
// O DOM é uma representação em árvore da página HTML
// Cada elemento HTML é um nó no DOM
// Cada nó pode ter filhos e um nó pai
// O nó raiz é o documento HTML

// Selecionar elementos

function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        botao.innerHTML = 'Mostrar senha'
    } else {
        input.setAttribute('type', 'text')
        botao.innerHTML = 'Esconder senha'
    }
}

