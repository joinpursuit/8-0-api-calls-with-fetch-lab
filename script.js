const BASE_URL = "https://opentdb.com/api_config.php";
let form = document.querySelector("form");
let main = document.querySelector("main.centered");
form.addEventListener("submit", (event) => {
  event.preventDefault();

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
  return article;
}
