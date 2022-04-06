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

        const h2 = document.createElement('h2');
        h2.textContent = trivia.category;
        article.append(h2);

        const p = document.createElement('p');
        p.textContent = trivia.question;
        article.append(p);

        questionCardsArea.append(article);
        // document.querySelector('.card').append(article);
      });
    });
});
