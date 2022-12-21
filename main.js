const main = document.querySelector("main");
const button = document.querySelector("button");

const BASE_URL = "https://opentdb.com/api.php?amount=10";

fetch(BASE_URL)
  .then((res) => res.json())
  .then((response) => {
    response.results.map((question) => {
      let article = document.createElement("article");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let pAnswer = document.createElement("p");

      article.setAttribute("class", "card");
      h2.innerHTML = question.category;
      p.innerHTML = question.question;
      pAnswer.setAttribute("class", "hidden");

      let buttonAnswers = document.createElement("button");
      buttonAnswers.innerHTML = "Show Answer";

      buttonAnswers.addEventListener("click", () => {
        if ((question.difficulty === "medium")) {
          article.style.backgroundColor = "yellow";
          let subH3 = document.createElement('h3')
          subH3.innerHTML = question.difficulty
          article.appendChild(subH3)
        } else if (question.difficulty === "easy") {
            article.style.backgroundColor = "green";
          let subH3 = document.createElement('h3')
          subH3.innerHTML = question.difficulty
          article.appendChild(subH3)
        } else {
            article.style.backgroundColor = "red";
        }

        pAnswer.innerHTML = question.correct_answer;
        pAnswer.style.display = "inline";
        article.appendChild(pAnswer);
      });

      article.prepend(h2, p, buttonAnswers);
      main.append(article);
    });
  })
  .catch((err) => {
    console.log(err);
  });
