const url =
  "https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple";
document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const numQuesUrl = url + ev.target.number.value;

  fetch(numQuesUrl)
    .then((resp) => resp.json())
    .then(ques)
    .catch((err) => console.log(err));
});

const ques = (trivia) => {
  for (let i = 0; i < trivia.results.length; i++) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    article.append(h2);
    h2.textContent = `${trivia.results[i].category}`;
    const p = document.createElement("p");
    p.textContent = `${trivia.results[i].question}`;
    article.append(p);
    const button = document.createElement("button");
    button.textContent = "Reveal Answer";
    article.append(button);
    const pAnswer = document.createElement("p");
    pAnswer.textContent = `${trivia.results[i].correct_answer}`;
    article.append(pAnswer);
    pAnswer.classList.add("hidden");
    article.setAttribute("class", "card");

    document.querySelector("main").append(article);

    article.querySelector("button").addEventListener("click", () => {
      if (article.querySelector(".hidden").style.display === "block") {
        article.querySelector(".hidden").style.display = "none";
      } else {
        article.querySelector(".hidden").style.display = "block";
      }
    });
  }
};
