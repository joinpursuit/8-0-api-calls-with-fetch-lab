let URL = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"

let main = document.querySelector("main")
let form = document.querySelector("form")
form.addEventListener("submit", (evt)=>{
    evt.preventDefault()
fetch(URL)
.then(res => res.json())
.then(trivia =>{
    trivia.results.forEach(q=>{
        let card = document.createElement("article")
        card.setAttribute("class", "card")
        let category= document.createElement("h2")
        let question = document.createElement("p")    
        let answer = document.createElement("p")
        answer.setAttribute("class", "hidden")
        let button = document.createElement("button")
        
        category.textContent = q.category
        question.textContent = q.question
        answer.textContent = q.correct_answer
        button.textContent = "Show Answer"
        answer.removeAttribute("class");

        card.append(category, question, button, answer)
        main.append(card)
        
        
   })
    
})

});