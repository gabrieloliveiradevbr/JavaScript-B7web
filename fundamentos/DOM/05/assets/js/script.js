// DOM = Document Object Model
// É uma interface que permite acessar e manipular o conteúdo de uma página HTML
// O DOM é uma representação em árvore da página HTML
// Cada elemento HTML é um nó no DOM
// Cada nó pode ter filhos e um nó pai
// O nó raiz é o documento HTML

// Selecionar elementos

function clicou() {
    const botao = document.querySelector('button')
    
    console.log(botao.classList)

    if(botao.classList.contains('azul')) {
        botao.classList.replace('azul', 'verde')
    } else {
        botao.classList.replace('verde', 'azul')
    }

    // Toggle = Alternar
    // botao.classList.toggle('azul')

    // Replace = Substituir
    // botao.classList.replace('azul', 'verde')

    console.log(botao.classList)
}

