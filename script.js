const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
const main = document.querySelector(".centered");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((response) => {
      sugar = response.results;
      for (let i = 0; i < sugar.length; i++) {
        const article = document.createElement("article");
        const category = document.createElement("h2");
        const pquestion = document.createElement("p");
        const showAnswer = document.createElement("button");
        const answer = document.createElement("p");

        article.classList.add("card");
        category.textContent = `${sugar[i].category}`;
        pquestion.textContent = `${sugar[i].question}`;
        showAnswer.textContent = "Show Answer";
        answer.textContent = `${sugar[i].correct_answer}`;
        answer.classList.add("hidden");

        main.append(article);
        article.append(category);
        article.append(pquestion);
        article.append(showAnswer);
        article.append(answer);

        article.addEventListener("click", (event) => {
          event.preventDefault();
          answer.classList.remove("hidden");
        });
      }
    });
});
