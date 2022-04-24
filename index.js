const API = "https://opentdb.com/api.php?amount=10";

fetch(API)
  .then((response) => response.json())
  .then((json) => {
    triviaCards(json);
  })
  .catch((error)=>console.log('ERROR'))

/*html
<article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article>
*/
const triviaCards = (cards) => {
  cards.results.forEach((card) => {
    console.log(card);
    const article = document.createElement("article");
    article.setAttribute("class", "card");
    // console.log(cards);
    const h2 = document.createElement("h2");
    h2.textContent = `${card.category}`;
    const p = document.createElement("p");
    p.textContent = `${card.question}`;

    const button = document.createElement("button");
    button.textContent = "Show Answer";

    const hidden = document.createElement("p");
    hidden.setAttribute("class", "hidden");
    article.append(h2, p, button, hidden);
    hidden.textContent = `${card.correct_answer}`;

    const main = document.querySelector("main");
    main.append(article);
  });
};

//For the tests to pass, each question needs the `.card` class.

//For each trivia question, then make it so that clicking on the button reveals the correct answer.

//Once you have completed the base requirements above, complete the following tasks _as time allows._

//- [ ] The API returns a "difficulty" key which categorizes the question based on how difficult it is. Display this difficult on the page through both text and CSS. For example, you may change the border color of the `.card` element to yellow if it is a medium difficulty question.

//- [ ] Add a dropdown to the form so that the user can select what category they'd like for their questions. When the form is submitted, update the API call so that only those types of questions are retrieved.

//- [ ] The multiple choice questions include a series of incorrect answers in addition to the correct answer. Update your web application so that all of the answers are displayed. Then, have the button click highlight the correct answer with CSS.
