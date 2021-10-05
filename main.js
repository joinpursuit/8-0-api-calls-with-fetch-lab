let url =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";

//create main
let main = document.querySelector("main");
//create form
let form = document.querySelector("form");
//add submit button
form.addEventListener("submit", (e)=>{
    e.preventDefault()
fetch(url)
    .then(response => response.json())
    .then(trivia =>{
        //forEAch is a loop 
        trivia.results.forEach(q=>{
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

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));