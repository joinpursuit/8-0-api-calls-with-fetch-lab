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
    console.log(questions);
    for (let question of questions.results){
        const article = document.createElement("article");
        document.querySelector("main").prepend(article);         
        article.classList.add("card");
        article.innerHTML = `<h2>${question.category}</h2>
        <p>${question.question}</p>
        <button>Show Answer</button>
        <p class="hidden">${question.correct_answer}</p>`
        const answer = document.querySelector(".card button");
        answer.addEventListener("click", (event) => {
            event.target.parentNode.querySelector(".hidden").style.display = "block" ;
        });
    };
};

// event.preventDefault();
// const paragraph = document.querySelector(".hidden")
// const paragraph = document.createElement("p")
// paragraph.textContent = question.correct_answer
// event.target.after(paragraph)