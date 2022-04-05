const BASE_URL = "https://opentdb.com/api.php?amount=10";

let main = document.querySelector("main");
//create form
let form = document.querySelector("form");
//add submit button
form.addEventListener("submit", (e) => {
    e.preventDefault()
fetch(BASE_URL)
    .then(response => response.json())
    .then(trivia => {
        //forEach is a loop 
        trivia.results.forEach(q => {
            // create elements
            let card = document.createElement("article");
            let category= document.createElement("h2");
            let question = document.createElement("p");    
            let answer = document.createElement("p");
            let button = document.createElement("button");

            answer.setAttribute("class", "hidden");
            card.setAttribute("class", "card");

                category.textContent = q.category;
                question.textContent = q.question;
                answer.textContent = q.correct_answer;
                button.textContent = "Show Answer";

                answer.removeAttribute("class");
                card.append(category, question, button, answer);
                main.append(card);


    })

})

})