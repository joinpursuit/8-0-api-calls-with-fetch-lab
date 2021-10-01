const anything = "https://opentdb.com/api.php?amount=10/";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(anything)
    .then((response) => response.json())
    .then(questions)
    .catch(console.log);
});

const questions = (q) => {
  for (let i = 0; i < 10; i++) {
    const article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `<h2>${q.results[i].category}</h2>
    <p>${q.results[i].question}</p>
    <button class = "goodDay">Show Answer</button>
    <p class="hidden">${q.results[i].correct_answer}</p>`;

    document.querySelector(".centered").append(article);

    document.querySelector(".goodDay").addEventListener("click", (event) => {
      const hidden = document.querySelector(".hidden");
      event.target.parentElement.querySelector(".hidden").style.display =
        "block";
      hidden.textContent = q.results[i].correct_answer;
    });
  }
};
