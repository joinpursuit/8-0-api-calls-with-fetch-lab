const BASE_URL = 'https://opentdb.com/api.php';
const amountQueryParam = 'amount';
const amountValue = 10;
const CATEGORY_URL = 'https://opentdb.com/api_category.php';
const categoryQueryParam = 'category';
const categoryValue = null;

fetch(CATEGORY_URL)
  .then((response) => response.json())
  .then(renderCategories)
  .catch(renderError);


function renderCategories(results) {
  const categories = results.trivia_categories;
  const select = document.querySelector('select');

  for (c of categories) {
    const option = document.createElement('option');
    option.value = c.id;
    option.textContent = c.name;
    select.append(option);
  }
}


const getQuestionsButton = document.querySelector('form');
getQuestionsButton.addEventListener('submit', (event) => {
  event.preventDefault();

 
  const main = document.querySelector('main');
  console.log(main);
  main.querySelectorAll('*').forEach((node) => {
    node.remove();
  });

  let url = `${BASE_URL}?${amountQueryParam}=${amountValue}`;
  let categoryId = event.target.category.value;
  console.log(categoryId);

  url =
    categoryId !== 'none' ? `${url}&${categoryQueryParam}=${categoryId}` : url;


  fetch(url)
    .then((response) => response.json())
    .then(renderQuestions)
    .catch(renderError);
});


function renderQuestions(results) {
  const questions = results.results;

  
  for (let i = 0; i < questions.length; i++) {
    renderQuestion(questions[i], i);
  }
}

function renderQuestion(data, id) {
  const card = document.createElement('article');
  card.classList.add('card');
  const category = document.createElement('p');
  category.textContent = data.category;
  const question = document.createElement('p');
  question.textContent = data.question;
  const difficulty = document.createElement('p');
  let rating = data.difficulty;
  let difficultyCardClass = 'easy-card';
  let difficultyQuestionClass = 'easy';
  switch (rating) {
    case 'hard':
      difficultyQuestionClass = 'hard';
      difficultyCardClass = 'hard-card';
      break;
    case 'medium':
      difficultyQuestionClass = 'medium';
      difficultyCardClass = 'medium-card';
      break;
  }
  difficulty.classList.add(difficultyQuestionClass);
  card.classList.add(difficultyCardClass);
  difficulty.textContent = rating;
  const button = document.createElement('button');
  button.textContent = 'Show Answer';
  const correctAnswerObj = {
    answer: data.correct_answer,
    isCorrect: true,
  };

  
  card.append(category, question, difficulty, button);

  
  const incorrectAnswers = data.incorrect_answers;
  const len = incorrectAnswers.length;
  let answers = [];

  for (let i = 0; i < len; i++) {
    answers[i] = {
      answer: incorrectAnswers[i],
      isCorrect: false,
    };
  }

  answers.splice(Math.floor(Math.random() * (len + 1)), 0, correctAnswerObj);

  
  for (a of answers) {
    const answer = document.createElement('p');
    answer.textContent = a.answer;

   
    if (a.isCorrect) {
      answer.setAttribute('id', `correct-${id}`);
    }
    card.append(answer);
  }

  
  button.addEventListener('click', (event) => {
    const correctAnswer = document.getElementById(`correct-${id}`);
    console.log(correctAnswer);
    correctAnswer.classList.toggle('correct');
  });

  
  const main = document.querySelector('main');
  main.append(card);
}

function renderError(error) {
  console.log(error);
}
