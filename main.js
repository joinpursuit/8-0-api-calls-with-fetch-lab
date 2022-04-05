const triviaURL = 'https://opentdb.com/api.php?amount=10';

const displayTrivia = ({ results }) => {
  for (let question of results) {
    const article = document.createElement('article');
    article.classList.add('card');
    const main = document.querySelector('main');
    main.append(article);

    const heading = document.createElement('h2');
    heading.innerText = question.category;
    article.append(heading);

    const questionSentence = document.createElement('p');
    questionSentence.innerText = question.question;
    article.append(questionSentence);

    const button = document.createElement('button');
    button.innerText = 'Show Answer';
    article.append(button);

    const answer = document.createElement('p');
    answer.classList.add('hidden');
    answer.innerText = question.correct_answer;
    article.append(answer);

    button.addEventListener('click', () => {
      answer.classList.remove('hidden');
    });
  }
};

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(triviaURL)
    .then((response) => {
      return response.json();
    })
    .then(displayTrivia)
    .catch(console.log);
});