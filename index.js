const TRIVIA_URL = `https://opentdb.com/api.php?amount=10`;
let gnqButtonArea = document.querySelector('form');
let questionCardsArea = document.querySelector('main');

gnqButtonArea.addEventListener('submit', (event) => {
  event.preventDefault();
  fetch(TRIVIA_URL)
    .then((response) => response.json())
    .then((trivia_questions) => {
      trivia_questions.results.forEach((trivia) => {
        const article = document.createElement('article');
        article.classList.add('card');
        questionCardsArea.append(article);

        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = trivia.category;
        article.append(categoryHeader);

        const mainParagraph = document.createElement('p');
        mainParagraph.textContent = trivia.question;
        article.append(mainParagraph);

        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        article.append(answerButton);

        const answerEntry = document.createElement('p');
        answerEntry.textContent = trivia.correct_answer;
        answerEntry.classList.add('hidden');
        article.append(answerEntry);

        answerButton.addEventListener('click', () => {
          answerEntry.classList.toggle('hidden');
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//document.querySelector("main") <- * My thoughts on the code needed to refresh the question when G.N.Q button is clicked. Will expand later.*
//main.INNERHTML = ``;
