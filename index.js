const BASE_URL = "https://opentdb.com/api.php";

// Query Parameters for 10 Trivia Questions
const amountQueryParam = "amount";
const amountValue = 10;

// Selects form to get new Trivia Questions
const get10NewQuestionsButton = document.querySelector("form");

// Adds event listener to form
get10NewQuestionsButton.addEventListener("submit", (event) => {
  event.preventDefault();

  const allQuestions = document.querySelectorAll("article");
  allQuestions.forEach((question) => {
    question.remove();
  });

  let inputURL = `${BASE_URL}?${amountQueryParam}=${amountValue}`;
  fetch(inputURL)
    .then((response) => response.json())
    .then(displayQuestions)
    .catch(displayError);

  function displayQuestions(response) {
    console.log(response);
    for (let i = 0; i < response.results.length; i++) {
      displayQuestion(response.results[i]);
    }
  }

  function displayQuestion(question) {
    const main = document.querySelector("main");

    const article = document.createElement("article");
    article.setAttribute("class", "card");
    main.append(article);

    const heading = document.createElement("h2");
    heading.innerText = `${question.category}`;
    article.append(heading);

    const difficulty = document.createElement("p");
    difficulty.innerText = question.difficulty;
    article.append(difficulty);

    if (difficulty.innerText === "easy") {
      difficulty.style.color = "green";
    } else if (difficulty.innerText === "medium") {
      difficulty.style.color = "yellow";
    } else if (difficulty.innerText === "hard") {
      difficulty.style.color = "red";
    }

    const paragraph1 = document.createElement("p");
    const questionString = question.question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
    paragraph1.innerText = `${questionString}`;
    article.append(paragraph1);

    const button = document.createElement("button");
    button.innerText = "Show Answer";
    article.append(button);

    button.addEventListener("click", (event) => {
      paragraph2.classList.toggle("hidden");
    });

    const paragraph2 = document.createElement("p");
    paragraph2.setAttribute("class", "hidden");
    paragraph2.innerText = `${question.correct_answer}`;
    article.append(paragraph2);
  }

  function displayError(error) {
    console.log(error);
  }
});
