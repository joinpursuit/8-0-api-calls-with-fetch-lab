const BASE_URL = "https://opentdb.com/api.php?amount=10";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(BASE_URL)
    .then((response) => response.json())
    .then(addTrivia)
    .catch(console.log);
});

const addTrivia = (trivia) => {
  for (let i = 0; i < 10; i++) {
    const article = document.createElement("article");
    article.classList.add("card");

    const main = document.querySelector("main.centered");
    main.append(article);

    article.innerHTML = `
    <h2>${trivia.results[i].category}</h2>
    <p>${trivia.results[i].question}</p>
    <button>Show Answer</button>
    <p class="hidden">CORRECT ANSWER</p>
    `;

    const button = document.querySelector(".card button");
    button.addEventListener("click", () => {
        const hidden = document.querySelector("p.hidden");
        hidden.style.display = 'block'
        hidden.textContent = trivia.results[i].correct_answer;
        
    });

    main.append(article)
  }
};
