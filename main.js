const BASE_URL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector('form');
let main = document.querySelector('main');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

//create an article tag, must be done for each question // this is from the example
// <article class="card">
//   <h2>CATEGORY</h2>
//   <p>QUESTION</p>
//   <button>Show Answer</button>
//   <p class="hidden">CORRECT ANSWER</p>
// </article>

fetch(BASE_URL).then((response) => response.json()).then((questions) => {
questions.results.forEach((questionFormat) => {
    let article = document.createElement('article');
    article.classList.add('card');
    main.append(article);

    let category = document.createElement('h2');
    article.append(category);
    let question = document.createElement('p');
    article.append(question);
    let button = document.createElement('button')
    article.append(button);
    let answer = document.createElement('p');
    article.append(answer);

    answer.classList.add('hidden');
    category.textContent = questionFormat.category;
    question.textContent = questionFormat.question;
    button.textContent = `Show Answer`;
    answer.textContent = questionFormat.correct_answer;
    button.addEventListener('click',() =>{
        answer.classList.toggle('hidden')
      })
      main.append(article);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//-----------
//Use this to view info
// fetch(BASE_URL)
//   .then((res) => res.json())
//   .then((response) => {
//     response.results.map((question) => {
//       console.log(question);
      
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
