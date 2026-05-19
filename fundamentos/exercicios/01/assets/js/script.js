// DOM = Document Object Model
// É uma interface que permite acessar e manipular o conteúdo de uma página HTML
// O DOM é uma representação em árvore da página HTML
// Cada elemento HTML é um nó no DOM
// Cada nó pode ter filhos e um nó pai
// O nó raiz é o documento HTML

// Selecionar elementos

// elementos
let input = document.querySelector('input')
const lista = document.querySelector('.lista')

// eventos
input.addEventListener('keyup', handleKeyUp)

// funções
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        let texto = input.value
        let newLi = document.createElement('li')
        newLi.innerHTML = texto
        lista.appendChild(newLi)
        input.value = ''
    }
}


