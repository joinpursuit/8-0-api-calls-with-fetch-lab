const URL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const main = document.querySelector("main");

//Fetching api with error handle
const fetchData = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => card(data.results))
    .catch((error) => {
        console.log(error)
    });
};

//Making form with error handle
form.addEventListener("submit", (error) => {
    error.preventDefault();
    fetchData(URL);
  });

  //Making loop of question cards with interpolation
const card = (questions) => {
  for (let question of questions) {
    const card = 
    `<article class="card">
    <h2>${question.category}</h2>
    <p>${question.question}</p>
    <button>Show_Answer</button>
    <p class="hidden">${question.correct_answer}</p>
  </article>`;

    const article = document.createElement("article");
    article.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = question.category;

    const p = document.createElement("p");
    p.textContent = question.question;

    const button = document.createElement("button");
    button.textContent = "Show Answer";
    button.addEventListener("click", (event) => {
      event.target.nextElementSibling.classList.toggle("hidden");
    });

    const p2 = document.createElement("p");
    p2.classList.add("hidden");
    p2.textContent = question.correct_answer;
    
    article.append(h2, p, button, p2);
    main.append(article);
  }
};


