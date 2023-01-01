const questionsForm = document.querySelector("form");

questionsForm.addEventListener( "submit", event => {
    event.preventDefault();

    const difficulty = document.querySelector("select").value;
    const BASE_URL = fetchURLBasedOnDifficulty(difficulty);

    displayTriviaCards(BASE_URL);
});

function displayTriviaCards( BASE_URL ){

  fetch(BASE_URL)
  .then( response => response.json() )
  .then(({results}) => {
        results.forEach( card => createCard(card) );
  }).catch(displayError);

};

function displayError(error){
    console.log(error);
};

function cardColorBasedOnDifficulty(cardDifficulty){
    return cardDifficulty === "hard" ? "#c50d66" : "#fdffab";
}

function fetchURLBasedOnDifficulty(difficulty){
  const BASE_URL = "https://opentdb.com/api.php?amount=10";

  if(difficulty === "any"){
    return BASE_URL;
  }else if(difficulty === "easy"){
    return `${BASE_URL}&difficulty=easy`;
  }else if(difficulty === "medium"){
    return `${BASE_URL}&difficulty=medium`;
  }else if (difficulty === "hard"){
    return `${BASE_URL}&difficulty=hard`;
  }

}
function createCard(card){

    const { category, difficulty, question, correct_answer } = card; 
    
    const article = document.createElement("article");
    article.classList.add("card");

    article.style.borderColor = cardColorBasedOnDifficulty(difficulty);

    const h2 = document.createElement("h2");
    h2.innerText = category;

    const questionElement = document.createElement("p");
    questionElement.innerText = question.replace(/&quot;/g, '"');
    questionElement.innerText = questionElement.innerText.replace(/&#039;/g, "'");
    questionElement.innerText = questionElement.innerText.replace(/&amp;/g, "&");


    const showAnsButton = document.createElement("button");
    showAnsButton.innerText = "Show Answer";

    showAnsButton.addEventListener("click", handleClick => {
      handleClick.target.parentNode.lastChild.classList.remove("hidden");
      console.log( handleClick.target.parentNode.lastChild)
    });

    const answerElement = document.createElement("p");
    answerElement.classList.add("hidden");
    answerElement.innerText = correct_answer;

    article.append(h2, questionElement, showAnsButton, answerElement);

    const mainSection = document.querySelector("main");
    mainSection.append(article);

};