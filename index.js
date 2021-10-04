const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
        event.preventDefault();
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((addQuestions))
        .catch(console.log("not working..."));
        event.target.reset();
});

const addQuestions = (questions) => {
    for (let question of questions.results){
        const article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = 
        `<h2>${question.category}</h2>
            <p>${question.question}</p>
                <button>Show Answer</button>
                    <p class="hidden">${question.correct_answer}</p>`
        document.querySelector("main").append(article);         
            const answer = document.querySelector(".card button");
            article.querySelector("button").addEventListener("click", (event) => {
                if (article.querySelector(".hidden").style.display === "block" ){
                    article.querySelector(".hidden").style.display = "none"
                } else {
                    article.querySelector(".hidden").style.display = "block" 
                }
            });
    };
};
            
                


