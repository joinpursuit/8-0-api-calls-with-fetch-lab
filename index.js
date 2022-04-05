/* <article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article> */

const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  getTriviaData(); //run get data//which also make card
});

function getTriviaData() {
  //get info for the card.
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((json) => {
      const data = json.results;
      createCard(data); //makes the cards.
    })
    .catch((err) => {
      console.log(err);
    });
}
//another function that makes the card.

function createCard(data) {
  const main = document.querySelector(".centered");

  //loop so I can get 10 cards.
  for (let i = 0; i < data.length; i++) {
    const article = document.createElement("article");
    article.setAttribute("class", "card");
    const h2 = document.createElement("h2");
    h2.textContent = `${data[i].category}`;
    const p = document.createElement("p");
    p.textContent = `${data[i].question}`;
    const button = document.createElement("button");
    button.textContent = `Show Answer`;
    const rightAnswer = document.createElement("p");
    rightAnswer.setAttribute("class", "hidden");
    rightAnswer.textContent = `${data[i].correct_answer}`;

    //where they go
    article.append(h2, p, button, rightAnswer);
    main.append(article); //have everyhting inside main.


  button.addEventListener("click", (event)=>{//after clicking on the show answer button the answer show up. 
    rightAnswer.setAttribute("style", "display: block");//the style change and the block show up. 
    });

  }
}

//I need to make the answer come out after click on show asnwers.
//I need 10 box to come out - so the function needs to run 10 times. on the click.

