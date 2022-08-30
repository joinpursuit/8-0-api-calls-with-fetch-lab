const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");

const centered = document.querySelector("main.centered");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);

      res.results.forEach((ele) => {
        const article = document.createElement("article");
        article.setAttribute("class", "card");
        centered.append(article);

        const h2 = document.createElement("h2");
        h2.innerHTML = ele.category;
        article.append(h2);

        const question = document.createElement("p");
        question.innerHTML = ele.question;
        article.append(question);

        const button = document.createElement("button");
        button.textContent = "show answer";
        article.append(button);

        const answer = document.createElement("p");
        answer.setAttribute("class", "hidden");
        answer.innerHTML = ele.correct_answer;
        article.append(answer);

        button.addEventListener("click", () => {
          article.append(answer.innerText);
        });
      });
    })
    .catch((err) => console.log(err));
});
