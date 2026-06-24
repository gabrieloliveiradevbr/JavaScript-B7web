// https://jsonplaceholder.typicode.com/posts

// Promisse = Promessa

function clicou() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log('Status:', response.status)
            return response.json()
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })
        .catch((error) => {
            alert('Deu errado!' + error)
        })
        .finally(() => {
            alert('Fim da requisição')
        })
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Conteudo de teste',
            userId: 2
        })
    })
        .then((response) => {
            console.log('Status:', response.status)
            return response.json()
        })
        .then((json) => {
            alert('Post adicionado!')
        })
        .catch((error) => {
            alert('Deu errado!' + error)
        })
        .finally(() => {
            alert('Fim da requisição')
        })
}

document.querySelector('#btn1').addEventListener('click', clicou);
document.querySelector('#btn2').addEventListener('click', inserir);