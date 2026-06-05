// https://jsonplaceholder.typicode.com/posts

async function readPosts() {

    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if (json.length > 0) {
        postArea.innerHTML = ''

        for (let i in json) {
            let postHtml = `
            <div>
                <h1>${json[i].title}</h1>
                <p>${json[i].body}</p>
                <hr>
            </div>
            `
            postArea.innerHTML += postHtml
        }
    } else {
        postArea.innerHTML = 'Nenhum post foi encontrado'
    }

}

async function addNewPost(title, body) {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 2
        })
    })
    let json = await response.json()

    let postArea = document.querySelector('.posts')
    let postHtml = `
    <div>
        <h1>${json.title}</h1>
        <p>${json.body}</p>
        <hr>
    </div>
    `
    postArea.innerHTML = postHtml + postArea.innerHTML

    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''
}

document.querySelector('#insertButton').addEventListener('click', async () => {
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    if (title && body) {
        addNewPost(title, body)
    } else {
        alert('Preencha todos os campos')
    }
})


readPosts()