//I need to create 10 questions inside the html
//I need to link this main.js to the html 
//".card" class (?) needs to be present in the question
//I need an event listener to proc when the button is clicked


const apiToken = 'd00e27c6422cef282503e7ca2d2bfc81b76f8ffed920a21c81317d55232c3fcd'

const baseURL = `https://opentdb.com/api.php?amount=10&token=${apiToken}`

const err = "Something went wrong!"

let main = document.querySelector('main')

function fetchQuestions(url) {
    fetch(url) 
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
    let questionResults = json.results
    for (let i = 0; i < questionResults.length; i++) {
    let question = questionResults[i]
    let article = document.createElement('article')
    article.classList.add('card')
    let h2 = document.createElement('h2')
    h2.textContent = question.category
    article.append(h2)
    let questionText = document.createElement('p')
    questionText.textContent = question.question
    article.append(questionText)
    let showAnswerButton = document.createElement('button')
    showAnswerButton.textContent = 'Show Answer'
    article.append(showAnswerButton)
    let hiddenAnswer = document.createElement('p')
    hiddenAnswer.classList.add('hidden')
    hiddenAnswer.textContent = question.correct_answer
    article.append(hiddenAnswer)
    main.append(article)
    }
    })
    .catch((err) => {
        console.log(err)
    })
}

let form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    fetchQuestions(baseURL)
})
    //for each question, build an article element w/ class card
fetchQuestions(baseURL)
