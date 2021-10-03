const anything = "https://opentdb.com/api.php?amount=10";

document.querySelector("form").addEventListener("click", (event) => {
  event.preventDefault();

  fetch(anything)
    .then((response) => response.json())
    .then(questions)
    .catch(console.log);
});

const questions = (obj) => {
  for (const question of obj.results) {
    const article = document.createElement("article");
    article.innerHTML = `
  <h2>${question.category}</h2>
  <p>${question.question}</p>
  <button>Show Answers</button>
  <p class="hidden">${question.correct_answer}</p>
  `;
    article.querySelector("button").addEventListener("click", (event) => {
      if (
        event.target.parentElement.querySelector(".hidden").style.display ===
        "block"
      ) {
        event.target.parentElement.querySelector(".hidden").style.display =
          "none";
      } else {
        event.target.parentElement.querySelector(".hidden").style.display =
          "block";
      }
    });

    document.querySelector(".centered").append(article);
  }
};
