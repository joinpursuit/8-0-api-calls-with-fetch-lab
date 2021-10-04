//create our BASE_URL
const BASE_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('main').innerHTML = '';
  getQuestions(
    BASE_URL + event.target.catOpt.value + event.target.diffOpt.value
  );
});

//fetch api data using URL from the form and turn it into a javascript object; (makes a promise)
const getQuestions = (url) => {
  fetch(url)
    .then((api) => api.json())
    //take the result from that (dynamic) and put it in a variable
    .then((trivia) => {
      let questions = trivia.results;
      //loop through the questions and dynamically post them to the DOM;
      if (!questions.length) {
        const noQ = document.createElement('div');
        noQ.textContent = 'No questions found.';
        document.querySelector('main').append(noQ);
      } else {
        for (const quest of questions) {
          const newCard = document.createElement('article');
          newCard.setAttribute('class', 'card');
          newCard.setAttribute('id', quest.difficulty);
          newCard.innerHTML = `<h2>${quest.category}</h2>
                <p> Difficulty: ${quest.difficulty[0].toUpperCase()}${quest.difficulty.slice(
            1
          )}</p>
                <p>${quest.question}</p>
                <ul></ul>
                <button>Show Answer</button>
                <p class="hidden">${quest.correct_answer}</p>`;
          newCard.querySelector('button').addEventListener('click', (event) => {
            event.target.parentNode.querySelector('.hidden').style.display =
              'block';
          });
          document.querySelector('main').append(newCard);
        }
      }
    });
};
// default form button refreshes the page, and reloads api data.
