BASE_URL = 'https://opentdb.com/api.php?amount=10'

const form = document.querySelector("form")
// console.log(form)
const main =document.querySelector('main')

form.addEventListener('submit', (event) => {
event.preventDefault()

fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        res.results.forEach((questions) => {
            console.log(questions)
            const card = document.createElement('article')
            const category = document.createElement('h2')
            const question = document.createElement('p')
            const button = document.createElement('button')
            const correct = document.createElement('p')


            category.innerText = questions.category
            question.innerText = questions.question
            button.innerText = 'Show Answer'
            correct.innerText = questions.correct_answer

            card.setAttribute('class','card')
            correct.setAttribute('class','hidden')
            main.append(card)
            card.append(category,question,button,correct)

            button.addEventListener('click', () => {
                correct.removeAttribute('class')
            })
            
        });
    })
    .catch((err) => {
        console.log(err)
    })
})