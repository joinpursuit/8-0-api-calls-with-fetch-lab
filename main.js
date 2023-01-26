const BASE_URL = "https://opentdb.com/api.php?amount=10";

    const form = document.querySelector("form")
    form.addEventListener("submit", event => {
        event.preventDefault()
        fetch(BASE_URL)
        
.then ((response) => response.json())
.then (({results}) => {
    const cards = results
    cards.forEach(card => {
        const main = document.querySelector("main")
        const article = document.createElement("article")
        article.classList.add("card")
        const h2 = document.createElement("h2")
        const pQuestion = document.createElement("p")
        const answerButton = document.createElement("button")
        const pAnswer = document.createElement("p")

        h2.textContent = `${card.category}`

        pQuestion.textContent = `${card.question}`
        
        answerButton.textContent = `Show Answer`
        answerButton.classList.add("answer")
        answerButton.addEventListener("click", event => {
            pAnswer.classList.toggle("hidden")
        })

        pAnswer.textContent = `${card.correct_answer}`
        pAnswer.classList.add("hidden")

        article.append(h2, pQuestion, answerButton, pAnswer)
        main.append(article)
    });
    })
})