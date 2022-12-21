/* <---------------Selectors--------------> */
const newQBtn = document.querySelector('button[type="submit"]')
const cardSection = document.querySelector("main.centered")

/* <---------------Event Listeners--------------> */
newQBtn.addEventListener("click", getQuestions)

/* <---------------Functions--------------> */

async function getQuestions(event){
    event.preventDefault()
    cardSection.innerHTML = ""

    const abc = await fetch("https://opentdb.com/api.php?amount=10");

    let response = await abc.json()

    let thisThat = response.results

    console.log(thisThat[0])

    
    thisThat.forEach((trivia) => {
        const category = document.createElement("h2")
        category.innerText = trivia.category

        const difficulty = document.createElement("p")
        difficulty.innerText = trivia.difficulty[0].toUpperCase() + trivia.difficulty.slice(1)
        
        const question = document.createElement("p")
        question.innerHTML = trivia.question

        const button = document.createElement("button")
        button.setAttribute("class", "revealAnswer")
        button.innerText = "Show Answer"
        button.addEventListener("click", reveal)

        const correctAnswer = document.createElement("p")
        correctAnswer.setAttribute("class", "hidden")
        correctAnswer.innerText = trivia.correct_answer

        const article = document.createElement("article")
        article.setAttribute("class", "card")
        if(trivia.difficulty != "easy"){
            article.setAttribute("class", `card ${trivia.difficulty}`)
        }

        article.append(category, difficulty, question, button, correctAnswer)
        cardSection.append(article)


    })

}


function reveal(event){
    const hidden = event.target.nextSibling

    hidden.classList.toggle("hidden")

    let buttonText = (hidden.classList.contains("hidden") ?  "Show Answer": "Hide Answer");
    event.target.innerText = buttonText
}

