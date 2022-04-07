let BASE_URL = "";
let form = document.querySelector("form");
let main = document.querySelector("main.centered");
let CATEGORY_URL = "https://opentdb.com/api_category.php";

let selectCategory = document.createElement("select");
form.append(selectCategory);

fetch(CATEGORY_URL)
  .then((response) => response.json())
  .then((json) => {
    json.trivia_categories.forEach((j) => {
      let opt = document.createElement("option");
      opt.textContent = j.name;
      selectCategory.append(opt);
    });
  })
  .catch((error) => {
    console.log(error);
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelectorAll("article").forEach((obj) => {
    obj.remove();
  });

  let num = document.getElementById("newQuestions").value;
  BASE_URL = `https://opentdb.com/api.php?amount=${num}`;
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      json.results.forEach((j) => {
        main.append(createTriviaCard(j));
      });
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("newQuestions").value = ""; //reset text input field to empty
});

function createTriviaCard(object) {
  const article = document.createElement("article");
  article.classList.add("card");
  const heading = document.createElement("h2");
  heading.textContent = object.category; //CATEGORY
  const para1 = document.createElement("p");
  para1.textContent = object.question; //QUESTION
  const para2 = document.createElement("p");
  para2.classList.add("hidden");
  para2.textContent = object.correct_answer; //CORRECT ANSWER
  const button = document.createElement("button");
  button.textContent = "Show Answer";
  button.addEventListener("click", () => {
    para2.classList.toggle("hidden");
  });
  article.append(heading, para1, button, para2);

  if (object.difficulty === "hard") {
    article.style.borderColor = "red";
  } else if (object.difficulty === "medium") {
    article.style.borderColor = "yellow";
  } else {
    article.style.borderColor = "green";
  }

  return article;
}
