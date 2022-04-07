const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelectorAll('article').forEach(x => x.remove())
  getQuestions();
});


function getQuestions() {
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((response) => {
      const results = response.results;
      for (let i = 0; i < results.length; i++) {
        const article = document.createElement("article");
        article.classList.add("card");

        const h2 = document.createElement("h2");
        h2.textContent = `${results[i].category}`;

        const p1 = document.createElement("p");
        p1.textContent = `${results[i].question}`;

        const p2 = document.createElement("p");
        p2.textContent = `${results[i].correct_answer}`;

        p2.classList.add("hidden");

        const button = document.createElement("button");
        button.textContent = "SHOW ANSWER";
        button.addEventListener("click", (e) => {
          p2.classList.toggle("hidden");
        });

        article.append(h2, p1, button, p2);

        const centered = document.querySelector(".centered");
        centered.append(article);
      }
    });
}