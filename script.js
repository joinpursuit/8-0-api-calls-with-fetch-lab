const url = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("main.centered").innerHTML = "";
  generateTriviaQuestions(url);
});

function generateTriviaQuestions(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let questions = json.results;
      for (let question of questions) {
        let questionCard = createQuestion(question);
        document.querySelector("main.centered").append(questionCard);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function createQuestion(question) {
  let article = document.createElement("article");
  article.classList.add("card");

  let difficulty = question.difficulty;
  let h4 = document.createElement("h4");
  article.append(h4);
  h4.textContent = `Difficulty : ${difficulty}`;
  article.classList.add(difficulty);

  let h2 = document.createElement("h2");
  article.append(h2);
  h2.textContent = question.category;

  let p = document.createElement("p");
  article.append(p);
  p.textContent = question.question;

  let correctAnswer = document.createElement("p");
  article.append(correctAnswer);
  correctAnswer.classList.add("hidden");
  correctAnswer.textContent = question.correct_answer;

  let button = document.createElement("button");
  correctAnswer.before(button);
  button.addEventListener("click", () => {
    correctAnswer.classList.toggle("hidden");
  });
  button.textContent = "Show Answer";

  return article;
}
