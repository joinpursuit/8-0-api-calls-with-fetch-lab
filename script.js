const BASE_URL = `https://opentdb.com/api.php?amount=10`

const main = document.querySelector("main")
const article = document.querySelector("article")

const questions = document.createElement("p")

//removes the 1st 
main.innerHTML = ""

function moreQuestions(wor) {
    const article = document.createElement("article")
    article.classList.add("card")
    main.append(article)

    const h2 = document.createElement("h2")
    article.append(h2)
    h2.textContent = wor.category

    const p = document.createElement("p")
    article.append(p)
    p.innerHTML = wor.question

    const button = document.createElement("button")
    article.append(button)
    button.textContent = "Show Answer"

    const p2 = document.createElement("p")
    p2.classList.add("hidden")
    article.append(p2)
    p2.innerHTML = wor.correct_answer
    // return article;

    button.addEventListener('click', () => {
        p2.classList.toggle("hidden")
    })
}

fetch(BASE_URL) 
    .then(response => response.json())
    .then(data =>  {
        data.results.forEach(words => {
            moreQuestions(words)
        })
        console.log(data)
    })
    .catch(console.log);
    
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault()
}) 





/** For the tests to pass, each question needs the `.card` class.

For each trivia question, then make it so that clicking on the button reveals the correct answer.

Once you have completed the base requirements above, complete the following tasks _as time allows._

-. */