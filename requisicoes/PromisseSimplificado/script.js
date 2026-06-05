// https://jsonplaceholder.typicode.com/posts

// Promisse = Promessa

async function clicou() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')

    let json = await response.json()

    alert(`Titulo do primeiro post: ${json[0].title}`)

}

async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
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
    let json = await response.json()

    console.log(json)
}

document.querySelector('#btn1').addEventListener('click', clicou);
document.querySelector('#btn2').addEventListener('click', inserir);