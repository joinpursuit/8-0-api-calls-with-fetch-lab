/* <---------------Selectors--------------> */
const newQBtn = document.querySelector('button[type="submit"]')
const cardSection = document.querySelector("main.centered");
const select = document.querySelector("select")

/* <---------------Event Listeners--------------> */
document.addEventListener("DOMContentLoaded", addCategories)
newQBtn.addEventListener("click", getQuestions)

/* <---------------Functions--------------> */
async function loadCategories(){
    const fetched = await fetch("https://opentdb.com/api_category.php")

    const jsonResponse =  await fetched.json()

    return jsonResponse
}

async function addCategories(){
    let info = await loadCategories()

    let option = document.createElement("option")
    option.setAttribute("value", `All`)
    option.innerText = "All"
    select.append(option)

    info.trivia_categories.forEach(category => {
        let option = document.createElement("option")
        option.setAttribute("value", `${category.name}`)
        option.innerText = category.name
        select.append(option)
    })
}

async function getQuestions(event){
    event.preventDefault()
    cardSection.innerHTML = ""

    const urlToFetch ="https://opentdb.com/api.php?amount=10"
    const category = select.value
    let endpoint = ""

    if(category !== "All"){
        let info = await loadCategories()

        let value = info.trivia_categories.find(element => element.name == category)

        endpoint = `&category=${value.id}`
    }

    const fetched = await fetch(urlToFetch + endpoint);

    let jsonResponse = await fetched.json()

    let responseResults = jsonResponse.results
    
    responseResults.forEach((trivia) => {
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