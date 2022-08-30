const BASE_URL = 'https://opentdb.com/api.php?amount=10';

const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener("submit", (event) => {
event.preventDefault()
    
fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        res.results.forEach((quest) => {
            console.log(quest)
            const article = document.createElement('article')
            const h2 = document.createElement('h2')
            const p1 = document.createElement('p')
            const button = document.createElement('button')
            const p2 = document.createElement('p')
                

            h2.textContent = quest.category
            p1.innerText = quest.question
            button.innerText = 'Show Answer'
            p2.innerText = quest.correct_answer
                
            article.setAttribute('class','card')
            p2.setAttribute('class','hidden')
            main.append(article)
            article.append(h2, p1, button, p2)

            button.addEventListener('click', () => {
            p2.removeAttribute('class')
            })
        })
    })
    .catch((err) => {
        console.log(err)
    })
});
    
