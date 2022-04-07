TRIVIA_URL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getQuestions(TRIVIA_URL);
});

getQuestions = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      result.results.forEach((result) => {
        const article = document.createElement("article");
        article.setAttribute("class", "card");
        main.append(article);

        const h2 = document.createElement("h2");
        h2.innerHTML = result.category;
        article.append(h2);

        const p = document.createElement("p");
        p.innerHTML = result.question;
        article.append(p);

        const button = document.createElement("button");
        button.textContent = "Show Answer";
        article.append(button);
        button.addEventListener("click", () => {
          p2.classList.remove("hidden");
        });

        const p2 = document.createElement("p");
        p2.setAttribute("class", "hidden");
        p2.innerHTML = result.correct_answer;
        article.append(p2);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
