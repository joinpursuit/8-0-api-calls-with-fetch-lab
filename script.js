const BASE_URL = `https://opentdb.com/api.php?amount=10`;

const main = document.querySelector(`main`);
const form = document.querySelector(`form`);

/* <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p> */


form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  
  fetch(`${BASE_URL}`) ///${id.value}
    .then((res) => res.json())
    .then((resJson) => {
     
        resJson.results.forEach(el => {
            //CARD
         
            const card = document.createElement(`article`);
            card.classList.add(`card`);
            const cardH2 = document.createElement(`h2`);
            cardH2.innerText = el.category
            cardQuestionP = document.createElement(`p`);
            cardQuestionP.innerText = el.question;
            const cardAnswerButton = document.createElement(`button`);
            cardAnswerButton.innerText = `Show Answer`;
            cardQuestionP.append(cardAnswerButton);
            const pAnswerHidden = document.createElement(`p`);
            pAnswerHidden.classList.add(`hidden`);
            pAnswerHidden.innerText = el.correct_answer;
            card.append(cardH2, cardQuestionP, cardAnswerButton, pAnswerHidden);
               main.append(card);

            // DOM 

            cardAnswerButton.addEventListener(`click`, () => {
                pAnswerHidden.classList.toggle(`hidden`);
            });
        }) 
    })
    .catch((err) => console.log(err));
});
