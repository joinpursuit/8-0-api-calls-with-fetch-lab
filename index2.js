const BASE_URL = "https://opentdb.com/api.php?amount=10";
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(BASE_URL)
    .then((response) => response.json())
    .then(questions);
});

const questions = (question) => {
  for (let i = 0; i < 10; i++) {
    const article = document.createElement("article");
    article.setAttribute("class", "card");
    article.innerHTML = `
   <h2>${question.results[i].category}</h2>
   <p>${question.results[i].question}</p>
   <button class="ans" type="submit">Show Answer</button>
   <p class="hidden">${question.results[i].correct_answer}</p>`;
    document.querySelector(".centered").append(article);
  }
};