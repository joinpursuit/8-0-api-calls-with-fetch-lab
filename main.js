let URL = "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean"
let main = document.querySelector("main")
let inputForm = document.querySelector("form")


inputForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    fetch(URL)
    .then(result=> result.json())
    .then((trivia)=>{
        trivia.results.forEach(q => {
            let card = document.createElement("article")
            let category = document.createElement("h2")
            let question = document.createElement("p")
            let showAns = document.createElement("button")
            let correctAns = document.createElement("p")

                card.setAttribute("class", "card") // adding a class attribute to the element
                correctAns.setAttribute("class", "hidden")// adding a hidden attribute to correctAns

                category.textContent = q.category;
                question.textContent = q.question;
                correctAns.textContent = q.correct_answer;
                showAns.textContent = "Show Answer"
                
                card.append(category, question, showAns,correctAns);
                main.append(card)
                
                showAns.addEventListener("click", ()=>{
                    correctAns.removeAttribute("hidden")
                }
                )
    })
})

})

