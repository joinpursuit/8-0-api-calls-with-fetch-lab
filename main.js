fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
  .then((result) => {
    // console.log(makeCard(result.results[0])))
    result.results.forEach((object) => {
      document.querySelector("section").append(makeCard(object));
      console.log(object);
    });
  })
  .catch(console.log);

function makeCard(object) {
  const article = document.createElement("article");
  article.classList.add("card");
  const category = document.createElement("h2");
  category.textContent = object.category;
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
  article.append(category);
  article.append(question);
  article.append(button);
  article.append(answer);
  return article;
}
