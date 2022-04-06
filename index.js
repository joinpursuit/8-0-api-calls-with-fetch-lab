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
        article.setAttribute('class', 'card');
        gnqButtonArea.append(article);

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
        questionCardsArea.append(article);
      });
    });
});
//document.querySelector("main")
//main.INNERHTML = ``;
