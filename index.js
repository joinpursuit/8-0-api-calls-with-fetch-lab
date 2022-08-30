let URL = "https://opentdb.com/api.php?amount=10&category=10"
//Not needed but it just looks cleaner to me

let main = document.querySelector("main")
let form = document.querySelector("form")
//calling from HTML

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    onSubmit()
})

//adding an event listener for my form that will catch on submit. 

function onSubmit(){
    //The onsubmit event is an event that occurs when you try to submit a form.
    fetch(URL)
    .then(res => res.json())
    .then(res => {res.results.forEach(trivia => {
        //creating elements to call from HTML
        let card = document.createElement("article")
        let category = document.createElement("h2")
        let question = document.createElement("p")
        let answer = document.createElement("p")
        let button = document.createElement("button")

        //setting attributes for card and answer
        card.setAttribute("class", "card")
        answer.setAttribute("class", "hidden")

        category.innerText = trivia.category
        question.innerText = trivia.question
        answer.innerText = trivia.correct_answer
        //Why does this work with Kabob and not camel case?
        button.innerText = "Show Answer"

        card.append(category, question, button, answer)
        main.append(card)

        //appending to insert into main and card. 

        button.addEventListener("click", () => {
            answer.removeAttribute("class")
        })
        // ask why don't we use onclick? 
    })
    })
    .catch((error) => {
        console.log(error)
    })
}
