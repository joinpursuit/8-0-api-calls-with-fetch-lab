let BASE_URL = "https://opentdb.com/api.php?amount=10";
const CATEGORIES_URL = "https://opentdb.com/api_category.php";
const main = document.querySelector("main");
const form = document.querySelector("form");
const section = document.querySelector("section");

// get categories from API
fetch(CATEGORIES_URL)
  .then((response) => response.json())
  .then((data) => {
    const categories = data.trivia_categories;
    const select = document.querySelector("#category");
    for (const category of categories) {
      const option = document.createElement("option");
      option.textContent = category.name;
      option.value = category.id;
      select.append(option);
    }
  })
  .catch((error) => console.log(error));

const choices = [];
for (const i = 1; i < choices.length; i++) {
  const select = document.querySelector("#category-select");
  const option = document.createElement("option");
  option.value = i;
  option.textContent = choices[i];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = document.querySelector("select").value;
  console.log(event);

  // add category to end of base url if specific category chosen
  if (value !== "any") {
    BASE_URL += `&category=${value}`;
  }

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((questions) => {
      for (const ques of questions.results) {
        const article = document.createElement("article");
        article.setAttribute("class", "card");
        form.append(article);

        const category = document.createElement("h2");
        category.textContent = ques.category;
        article.append(category);

        const question = document.createElement("p");
        // use innerHTML for question and answer as opposed to textContent to alleviate encoding/decoding issue
        // https://stackoverflow.com/questions/19030742/difference-between-innertext-innerhtml-and-value
        question.innerHTML = ques.question;
        article.append(question);

        const showAnswer = document.createElement("button");
        showAnswer.textContent = "Show Answer";
        showAnswer.setAttribute("class", "ui-element");
        article.append(showAnswer);

        const answer = document.createElement("p");
        answer.textContent = ques.correct_answer;
        answer.setAttribute("class", "hidden");
        article.append(answer);

        main.append(article);

        showAnswer.addEventListener("click", () => {
          answer.classList.remove("hidden");
          answer.innerHTML = ques.correct_answer;
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
});
