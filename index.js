let form = document.querySelector('form');
let main = document.querySelector('main');

const BASE_URL = 'https://opentdb.com/api.php?amount=10';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch(BASE_URL)
    .then((result) => result.json())
    .then((json) => {
      json.results.forEach((obj) => {
        //Use the helper function to handle the json
        main.append(createCard(obj));
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//Create a helper function named createCard
const createCard = (obj) => {
  //Create article element
  const article = document.createElement('article');
  article.classList.add('card');

  //Create heading element
  const h2 = document.createElement('h2');
  h2.textContent = obj.category;

  //Create two paragraph elements
  const p1 = document.createElement('p');
  p1.textContent = obj.question;

  const p2 = document.createElement('p');
  p2.classList.add('hidden');
  p2.textContent = obj.correct_answer;

  //Create button element
  const button = document.createElement('button');
  button.textContent = 'Show Answer';
  button.addEventListener('click', () => {
    p2.classList.toggle('hidden');
  });

  //append all the above elements to article
  article.append(h2, p1, button, p2);
  return article;
};
