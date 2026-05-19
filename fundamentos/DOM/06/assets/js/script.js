// DOM = Document Object Model
// É uma interface que permite acessar e manipular o conteúdo de uma página HTML
// O DOM é uma representação em árvore da página HTML
// Cada elemento HTML é um nó no DOM
// Cada nó pode ter filhos e um nó pai
// O nó raiz é o documento HTML

// Selecionar elementos

function soltou(e) {
    console.log(`Você soltou a tecla: ${e.key}`)
    console.log(`Shift foi pressionado: ${e.shiftKey}`)
    console.log('---')
}


const input = document.querySelector('input')
input.addEventListener('keyup', soltou)
