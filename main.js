const __API = 'https://jsonplaceholder.typicode.com/todos'

fetch(__API)
.then(res => res.json())
.then(data => {
    const search = document.getElementById('search')

    render(data)

    search.addEventListener('input', e => {
        let inputValue = e.target.value.toLowerCase()

        const result = data.filter(item => 
            item.title.toLowerCase().includes(inputValue)
        )

        render(result)
    })
})
.catch(err => console.log(err))
.finally(console.log("nima bogan taqdirda ham ishlidi"))

let row = document.querySelector('.row')

function render(array) {
    row.innerHTML = ""

    array.map(item => {
        let card = document.createElement('div')
        card.classList.add('card')

        let ID = document.createElement('h1')
        ID.textContent = `ID: ${item.id}`

        let userID = document.createElement('h3')
        userID.textContent = item.userId

        let title = document.createElement('p')
        title.textContent = `Title: 📒 ${item.title}`

        let badge = document.createElement('span')
        badge.classList.add('badge')
        if (item.completed) {
            badge.style.background = 'aqua'
        } else {
            badge.style.background = 'yellow'
        }
        badge.textContent = item.completed

        card.append(ID, userID, title, badge)

        row.append(card)
    })
}











function darkMode() {
    let body = document.querySelector('body')
    body.style.backgroundColor =  'black'

    let one = document.querySelector('.one')
    one.style.background = '#C4B5A5'

    let two = document.querySelector('.two')
    two.style.background = '#FA9021'
}

function lightMode() {
    console.log('lightModce')
    let body = document.querySelector('body')
    body.style.background =  'white'
    
    let one = document.querySelector('.one')
    one.style.background = 'orange'

    let two = document.querySelector('.two')
    two.style.background = 'black'
}
