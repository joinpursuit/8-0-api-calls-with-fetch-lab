const form = document.querySelector('form');
const main = document.querySelector('main');

const BASE_URL = 'https://opentdb.com/api.php?amount=10';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch(BASE_URL)
    .then((result) => result.json())
    .then((json) => {
      json.results.forEach((obj) => {
        
        main.append(createCard(obj));
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//new helper function
const createCard = (obj) => {
  
  const article = document.createElement('article');
  article.classList.add('card');

  const head2 = document.createElement('h2');
  head2.textContent = obj.category;
  
  const para1 = document.createElement('p');
  para1.textContent = obj.question;

  const para2 = document.createElement('p');
  para2.classList.add('hidden');
  para2.textContent = obj.correct_answer;

  const button = document.createElement('button');
  button.textContent = 'Show Answer';
  button.addEventListener('click', () => {
    para2.classList.toggle('hidden');
  });

  article.append(head2, para1, button, para2);
  return article;
};