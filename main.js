const baseURL = "https://opentdb.com/api.php?amount=10";
function apiFetch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      // console.log(makeCard(result.results[0]));
      result.results.forEach((object) => {
        document.querySelector("section").append(makeCard(object));
        console.log(object);
      });
    })
    .catch(console.log);
}
apiFetch(baseURL);
function makeCard(object) {
  const article = document.createElement("article");
  article.classList.add("card");
  article.classList.add(object.difficulty);
  const category = document.createElement("h2");
  category.textContent = object.category;
  const difficulty = document.createElement("h2");
  difficulty.textContent = object.difficulty;
  const question = document.createElement("p");
  question.innerHTML = object.question;
  const button = document.createElement("button");
  button.textContent = "Show Answer";
  button.addEventListener("click", (event) => {
    answer.classList.toggle("hidden");
  });
  const answer = document.createElement("p");
  answer.classList.add("hidden");
  answer.innerHTML = object.correct_answer;
  article.append(difficulty);
  article.append(category);
  article.append(question);
  article.append(button);
  article.append(answer);
  return article;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelectorAll("article").forEach((card) => card.remove());
  if (event.target.trivia_category.value !== "any") {
    apiFetch(baseURL + "&category=" + event.target.trivia_category.value);
  } else {
    apiFetch(baseURL);
  }
});
