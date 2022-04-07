const BASE_URL = 'https://opentdb.com/api.php?amount=10';
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch(BASE_URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.results.forEach((result) => {
        let main = document.querySelector('main.centered');
        let article = document.createElement('article');
        article.classList.add('card');
        main.append(article);
        let h2 = document.createElement('h2');
        h2.textContent = result.category;
        let p = document.createElement('p');
        p.textContent = result.question;
        let p2 = document.createElement('p');
        p2.classList.add('hidden');
        p2.textContent = result.correct_answer;
        let button = document.createElement('button');
        button.textContent = 'Show Answer';
        article.append(h2, p, button, p2);
        button.addEventListener('click', () => {
          p2.classList.toggle('hidden');
        });
      });

      
    })
    .catch((ERROR) => {
      console.log(ERROR);
    });
});
