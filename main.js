let URL = "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy"

let main = document.querySelector("main");
let form = document.querySelector("form");


    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        fetch(URL)
    .then(res => res.json())
    .then(trivia => {
        trivia.results.forEach(q =>{
            let card = document.createElement("article");
            let h2 = document.createElement("h2");
            let question = document.createElement("p");
            let answer = document.createElement("p");
            let button = document.createElement("button");


            card.setAttribute("class","card")
            answer.setAttribute("class", "hidden")

            h2.textContent = q.category
            question.textContent = q.question
            answer.textContent = q.correct_answer
            button.textContent = "Show Answer"


            card.append(h2, question, button, answer);
            main.append(card);


            button.addEventListener("click", (e)=>{
                e.preventDefault();
                answer.setAttribute("style", "display: block")
                })
        })
        
    })
})

