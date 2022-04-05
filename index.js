const BASE_URL = "https://opentdb.com/api.php?amount=10";
const main = document.querySelector("main");
const form = document.querySelector("form");
const section = document.querySelector("section");

fetch(BASE_URL)
  .then((response) => response.json())
  .then((questions) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      for (const ques of questions.results) {
        const article = document.createElement("article");
        article.setAttribute("class", "card");
        form.append(article);

        const h2 = document.createElement("h2");
        h2.textContent = ques.category;
        article.append(h2);

        const p1 = document.createElement("p");
        p1.innerHTML = ques.question;
        console.log(ques.question);
        article.append(p1);

        const p2 = document.createElement("p");
        p2.textContent = ques.correct_answer;
        p2.setAttribute("class", "hidden");
        article.append(p2);

        const showAnswer = document.createElement("button");
        showAnswer.textContent = "Show Answer";
        article.append(showAnswer);

        main.append(article);

        showAnswer.addEventListener("click", () => {
          p2.classList.remove("hidden");
          p2.innerHTML = ques.correct_answer;
        });

        // set colors of question border based on difficulty
        if (ques.difficulty === "hard") {
          article.setAttribute("style", "border: 3px solid red");
        } else if (ques.difficulty === "medium") {
          article.setAttribute("style", "border: 3px solid gold");
        } else {
          article.setAttribute("style", "border: 3px solid green");
        }
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
