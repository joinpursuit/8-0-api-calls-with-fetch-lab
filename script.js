const BASE_URL ="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
const form = document.querySelector("form");
// a eventlister is add to the form
form.addEventListener("click", (e) => {
e.preventDefault();

fetch(BASE_URL)
.then(res => res.json())
.then(data => triviaArticle(data))
}) 
// update the Dom with element created below.
const triviaArticle = (data) => {
    data.results.forEach(question => {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const button = document.createElement("button");
        const p2 = document.createElement("p");
        
// to complete the updates all additons are appended
        article.classList.add("card");
        p2.classList.add("hidden")
        h2.textContent = question.category;
        p1.textContent = question.question;
        button.textContent = "Show Answer";
        p2.textContent = question.correct_answer;
        article.append(h2, p1, button, p2); 
        const main = document.querySelector("main");
        main.append(article);
        button.addEventListener("click", (e) =>{
            p2.style.display = 'block';
        })

    })

}