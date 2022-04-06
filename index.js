const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((questions) => {
      questions.results.forEach((element) => {
        const main = document.querySelector("main.centered");
        const article = document.createElement("article");
        article.setAttribute("class", "card");

        const h2 = document.createElement("h2");
        h2.textContent = element.category;

        const p = document.createElement("p");
        p.textContent = element.question;

        const p2 = document.createElement("p");
        p2.textContent = "Correct Answer";

        const button = document.createElement("button");
        button.textContent = "Show Answer";

        main.append(article);
        article.append(h2, p, button, p2);

        button.addEventListener("click", () => {
          p2.classList.toggle("hidden");
          p2.textContent = element.correct_answer;
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
