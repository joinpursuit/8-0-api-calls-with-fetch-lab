const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple';
// url for trivia api 

fetch(BASE_URL) //makes a promise
.then((response) => response.json())
.then((trivia) =>  { //dynamic var [placeholder]
let questions = trivia.results; //arr w/ 10 q's
      for(const quest of questions){ 
          //loop through q's and post to DOM
      const newCard = document.createElement('article');
      newCard.setAttribute('class', 'card');
      newCard.innerHTML = `<h2>${quest.category}</h2>
      <p>${quest.question}</p>
      <button>Show Answer</button>
      <p class="hidden">${quest.correct_answer}</p>`;
      //all going inside of <article>, displays question, category and answer button//
      newCard.querySelector('button').addEventListener('click', (event) => {
          event.target.parentNode.querySelector('.hidden').style.display='block';
      }); //when you click show answer, it displays the answer
      document.querySelector('main').append(newCard);
      //adding content into <main>
  }
})