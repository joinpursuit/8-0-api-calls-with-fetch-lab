const category_url = "https://opentdb.com/api_category.php";
const base_url = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const select = document.querySelector("select");

//select the category
fetch(category_url)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    for (let category of json.trivia_categories) {
      let option = document.createElement("option");
      option.value = category.id;
      option.textContent = category.name;
      select.append(option);
    }
  })
  .catch((error) => {
    console.log(error);
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //remove all old questions
  document.querySelector("main.centered").innerHTML = "";
  //get the category num from the user input
  let categoryNum = document.getElementById("category").value;
  //use helper function generate and display 10 questions
  if (categoryNum === "random") {
    generateTriviaQuestions(base_url);
  } else {
    generateTriviaQuestions(base_url + `&category=${categoryNum}`);
  }
});

function generateTriviaQuestions(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let questions = json.results;
      //loop through questions array and generate question card for each question object
      for (let question of questions) {
        let questionCard = createQuestion(question);
        //display the question card
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

  //add difficulty behavior
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

  //generate multiple choices
  let choices = generateMultipleChoices(question);
  article.append(choices);

  //generate correct answer
  let correctAnswer = document.createElement("p");
  article.append(correctAnswer);
  correctAnswer.classList.add("hidden");
  correctAnswer.textContent = question.correct_answer;

  //create a button to display the correct answer and highlight the correct choice
  let button = document.createElement("button");
  correctAnswer.before(button);
  button.addEventListener("click", () => {
    //display the correct answer
    correctAnswer.classList.toggle("hidden");
    let labels = choices.querySelectorAll("label");
    //add correctAnswer or wrongAnswer class to the choices of current question
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

//use the question object to generate multiple choices
function generateMultipleChoices(question) {
  let correctAnswer = question.correct_answer;
  let wrongAnswers = question.incorrect_answers;

  //create an array to store multipe choices, array length is num of choices,
  //and use "" as placeholder
  let answers = [];
  let numOfQuestions = wrongAnswers.length + 1;
  for (let i = 0; i < numOfQuestions; i++) {
    answers.push("");
  }

  //Insert the correct answer at random postion of the array
  let randomIndex = Math.floor(Math.random() * numOfQuestions);
  answers[randomIndex] = correctAnswer;

  //fill the remaining place in the array with wrong choices
  for (let wrongAnswer of wrongAnswers) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === "") {
        answers[i] = wrongAnswer;
        break;
      }
    }
  }

  let div = document.createElement("div");

  //for each choice inside the array generate a html radio button for them
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
