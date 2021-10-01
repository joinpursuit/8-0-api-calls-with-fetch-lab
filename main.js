const BASE_URL =
  "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple";
// returns a promise
fetch(BASE_URL)
  .then((api) => api.json())
  .then((trivia) => {
    let questions = trivia.results;
    // loop through all the questions
    for (const quest of questions) {
      // this creates a specific article tag
      const newCard = document.createElement("article");
      // this creates a new card
      newCard.setAttribute("class", "card");
      // this makes it dynamic
      newCard.innerHTML = `<h2>${quest.category}</h2>
        <p>${quest.question}</p>
        <button>Show Answer</button>
        <p class ='hidden'>${quest.correct_answer}</p>`;
      newCard.querySelector("button").addEventListener("click", (event) => {
        event.target.parentNode.querySelector(".hidden").style.display =
          "block";
      });
      document.querySelector("main").append(newCard);
    }
  });
