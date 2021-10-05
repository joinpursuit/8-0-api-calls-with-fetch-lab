let main = document.querySelector("main");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("https://opentdb.com/api.php?amount=10&category=12")
.then(res => res.json())
.then((data) => {
    console.log(data);
    let triviaList = data.results;
    for(let trivia of triviaList){
        
        let articles = document.createElement("article");
        let categorys = document.createElement("h2");
        let questions = document.createElement("p");
        let buttons = document.createElement("button");
        let answers = document.createElement("p");

        articles.setAttribute("class", "card");
        answers.setAttribute("class", "hidden");

        categorys.innerHTML = trivia.category;
        questions.innerHTML = trivia.question;
        answers.innerHTML = trivia.correct_answer;
        buttons.innerHTML = "Show Answer";

        articles.append(categorys, questions, buttons, answers);
        main.append(articles);
    
        buttons.addEventListener("click", () => {
            answers.classList.toggle("hidden");
        })
    }
})
.catch((err) => {
    console.log(err);
});
});