const URL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  deleteOldQuestions();
  getData(URL);
});

const getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => createCard(data.results))
    .catch(console.log);
};

const createCard = (questions) => {
  for (let question of questions) {
    console.log(question);

    const card = `<article class="card">
    <h2>${question.category}</h2>
    <p>${question.question}</p>
    <button>Show Answer</button>
    <p class="hidden">${question.correct_answer}</p>
  </article>`;


    const h2 = document.createElement("h2");
    h2.textContent = question.category;


    const article = document.createElement("article");
    article.classList.add("card");

    const button = document.createElement("button");
    button.textContent = "Show Content";
    button.addEventListener("click", (event) => {
      event.target.nextElementSibling.classList.toggle("hidden");
    });

    const p = document.createElement("p");
    p.textContent = question.question;

    const p2 = document.createElement("p");
    p2.classList.add("hidden");
    p2.textContent = question.correct_answer;
    article.append(h2, p, button, p2);

    main.append(article);
  }
};

const deleteOldQuestions = () => {
  main.innerHTML = "";
};