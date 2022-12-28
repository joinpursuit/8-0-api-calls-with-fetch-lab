const form = document.querySelector("form");
const URL_PAGE = `https://opentdb.com/api.php?amount=10`;
const questionsList =document.querySelector("main.centered");



const updatePage =(question) => {
    
    let article = document.createElement("article");
    article.classList.add("card");

    let category = document.createElement("h2");
    category.textContent = `${question.category}`;
    article.append(category);

    let questionText = document.createElement("p");
    questionText.textContent = `${question.question}`;
    article.append(questionText);

    let showAnswerButton = document.createElement("button");
    article.append(showAnswerButton);

    let answer = document.createElement("p");
    answer.classList.add("hidden");
    answer.textContent = `${question.correct_answer}`;
    article.append(answer);

    showAnswerButton.addEventListener("click", (event)=> {
        event.target.classList.toggle("hidden");
    });
    questionsList.append(article);

};

const showError = (error) => {
    console.log(error);
    let err =document.createElement("p");
    err.textContent = `${error}`;
    body.prepend(err);
};

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    fetch(URL_PAGE)
    .then((result) => result.json())
    .then((json) => {
        json.results.forEach((obj) => updatePage(obj));
    })
    .catch(showError);
});