const BASE_URL = 'https://opentdb.com/api.php?amount=10';

const form = document.querySelector('form');
const main = document.querySelector('main');

// article.setAttribute('class', 'card');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((resJson) => {
      const final = resJson.results;

      final.forEach((el) => {
        const article = document.createElement('article');
        article.classList.add('card');
        // console.log(e);
        main.append(article);

        const h2 = document.createElement('h2');
        h2.textContent = el.category;
        const paragraph = document.createElement('p');
        paragraph.innerText = el.question;
        const button = document.createElement('button');
        button.innerText = 'Show Answer';
        const paragraph2 = document.createElement('p');
        paragraph2.innerText = el.correct_answer;
        paragraph2.setAttribute('class', 'hidden');
        paragraph2.classList.add('hidden');

        article.append(h2, paragraph, button, paragraph2);
        main.append(article);

        button.addEventListener('click', () => {
          paragraph2.classList.toggle('hidden');
        });
      });
    })
    .catch((err) => console.log(err));
});
