const BASE_URL = "https://opentdb.com/api.php";
const amountQueryParam = "amount";
const amountValue = 10;
const tenQuestions = document.querySelector("form");

// Add to form
tenQuestions.addEventListener("submit", (event) => {
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
      queryDis(response.results[i]);
    }
  }

  //Display Questions
  function queryDis(question) {
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
      difficulty.style.color = "lightblue";
    } else if (difficulty.innerText === "medium") {
      difficulty.style.color = "orange";
    } else if (difficulty.innerText === "hard") {
      difficulty.style.color = "red";
    }

    const p1 = document.createElement("p");
    const questionString = question.question
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'");
    p1.innerText = `${questionString}`;
    article.append(p1);

    const button = document.createElement("button");
    button.innerText = "Show Answer";
    article.append(button);

    button.addEventListener("click", (event) => {
      p2.classList.toggle("hidden");
    });

    const p2 = document.createElement("p");
    p2.setAttribute("class", "hidden");
    p2.innerText = `${question.correct_answer}`;
    article.append(p2);
  }

  function displayError(error) {
    console.log(error);
  }
});
