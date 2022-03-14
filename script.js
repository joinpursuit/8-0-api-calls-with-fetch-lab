const BASE_URL = "https://opentdb.com/api.php?amount=10";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelectorAll("article").forEach((card) => {
    card.remove();
  });

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((jsonObject) => {
      jsonObject.results.forEach((object) => {
        document.querySelector("main").append(createCard(object));
      });
    })
    .catch(console.log);
});

function createCard(object) {
  const article = document.createElement("article");
  article.classList.add("card");

  const category = document.createElement("h2");
  category.textContent = object.category;
  article.append(category);

  const question = document.createElement("p");
  question.textContent = object.question;
  article.append(question);

  const button = document.createElement("button");
  button.textContent = "Show Answer";
  article.append(button);

  button.addEventListener("click", (event) => {
    answer.classList.toggle("hidden");
  });

  const answer = document.createElement("p");
  answer.classList.add("hidden");
  answer.textContent = object.correct_answer;
  article.append(answer);

  return article;
}