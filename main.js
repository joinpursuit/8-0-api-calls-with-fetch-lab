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
  //card object and all it's pieces, ordered at the end
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
    rightAnswerChoice.classList.toggle("correct");
  });

  const answer = document.createElement("p");
  answer.classList.add("hidden");
  answer.innerHTML = object.correct_answer;
  //adding multiple choice selection

  const multipleChoice = document.createElement("ol");
  //   multipleChoice.type = "A";
  const rightAnswerChoice = document.createElement("li");
  // rightAnswerChoice.classList.add('correct')
  rightAnswerChoice.innerHTML = object.correct_answer;
  object.incorrect_answers.forEach((answer) => {
    const newChoice = document.createElement("li");
    newChoice.innerHTML = answer;
    multipleChoice.append(newChoice);
  });
  multipleChoice.append(rightAnswerChoice);
  //shuffle test
  let shuffle = document.createElement("ol");
  for (let i = multipleChoice.children.length; i > 0; i--) {
    shuffle.append(multipleChoice.children[(Math.random() * i) | 0]);
  }
  shuffle.type = "A";
  //adding everything to the article object
  //   article.append(difficulty);
  article.append(category);
  article.append(question);
  //   article.append(multipleChoice);
  article.append(shuffle);
  article.append(button);
  article.append(answer);
  return article;
}
//adding functionality to the get new questions button
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let requestURL = "https://opentdb.com/api.php?amount=";
  requestURL += event.target.trivia_amount.value;
  if (event.target.trivia_category.value !== "any") {
    requestURL += "&category=" + event.target.trivia_category.value;
  }
  if (event.target.trivia_difficulty.value !== "any") {
    requestURL += "&difficulty=" + event.target.trivia_difficulty.value;
  }
  console.log(requestURL);
  document.querySelectorAll("article").forEach((card) => card.remove());
  apiFetch(requestURL);
});
