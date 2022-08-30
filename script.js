let form = document.querySelector('form');
let main = document.querySelector('main');

const BASE_URL = 'https://opentdb.com/api.php?amount=10';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((json) => {
        const results = json.results; 
      results.forEach((result) => {
        main.append(createCard(result));
      });
    })
    .catch((error) => {
      console.log(error);
    });
});


const createCard = (result) => {
  
  const article = document.createElement('article');
  article.classList.add('card');


  const h2 = document.createElement('h2');
  h2.textContent = result.category;

  
  const p1 = document.createElement('p');
  p1.innerText = result.question;

  const p2 = document.createElement('p');
  p2.classList.add('hidden');
  p2.innerText = result.correct_answer;

 
  const button = document.createElement('button');
  button.textContent = 'Show Answer';
  button.addEventListener('click', () => {
    p2.classList.toggle('hidden');
  });

  
  article.append(h2, p1, p2, button);
  return article;
};