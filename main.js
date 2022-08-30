const BASE_URL = "https://opentdb.com/api.php?amount=10"

const main = document.querySelector('main, form')

main.addEventListener('submit', (e) => {
// console.log("this button has been clicked")
e.preventDefault()

    fetch(`${BASE_URL}`)
        .then((res) => res.json())
        .then((res) => {
        console.log(res)    
        res.results.forEach(el => { 
            const article = document.createElement('article')
main.append(article)
article.classList.add('card')
// console.log(article)

const h2 = document.createElement('h2')
article.append(h2)
h2.textContent = 'CATEGORY'

const p = document.createElement('p')
article.append(p)
p.textContent = el.category

const button = document.createElement('button')
article.append(button)
button.textContent = 'Show Answer'

const p2 = document.createElement('p')
p2.classList.add('hidden')
article.append(p2)
p2.textContent = el.correct_answer

button.addEventListener('click', () => {
    p2.classList.toggle('hidden')
})
        });

        })
        .catch((err) => console.log(err))
})


