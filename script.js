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
  //this decode method is from Oscar's resource
  p.textContent = he.decode(question.question);

  let choices = generateMultipleChoices(
    question.correct_answer,
    question.incorrect_answers,
    question
  );
  article.append(choices);

  let correctAnswer = document.createElement("p");
  article.append(correctAnswer);
  correctAnswer.classList.add("hidden");
  correctAnswer.textContent = question.correct_answer;

  let button = document.createElement("button");
  correctAnswer.before(button);
  button.addEventListener("click", () => {
    correctAnswer.classList.toggle("hidden");
    let labels = choices.querySelectorAll("label");
    labels.forEach((label) => {
      if (label.textContent === question.correct_answer) {
        label.classList.toggle("correctAnswer");
      } else {
        label.classList.toggle("wrongAnswer");
      }
    });
  });
  button.textContent = "Show Answer";

  return article;
}

function generateMultipleChoices(correctAnswer, wrongAnswers, question) {
  let answers = [];
  let numOfQuestions = wrongAnswers.length + 1;
  for (let i = 0; i < numOfQuestions; i++) {
    answers.push("");
  }

  let randomIndex = Math.floor(Math.random() * numOfQuestions);
  answers[randomIndex] = correctAnswer;

  for (let wrongAnswer of wrongAnswers) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === "") {
        answers[i] = wrongAnswer;
        break;
      }
    }
  }

  let div = document.createElement("div");

  for (let answer of answers) {
    let label = document.createElement("label");
    label.textContent = answer;

    let input = document.createElement("input");
    input.type = "radio";
    input.name = question.question;

    label.prepend(input);
    div.append(label);
    div.append(document.createElement("br"));
  }

  return div;
}
