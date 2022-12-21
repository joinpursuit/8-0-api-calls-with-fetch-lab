const BASE_URL = "https://opentdb.com/api.php?amount=10";

const questionsForm = document.querySelector("form");

questionsForm.addEventListener( "submit", event => {
    event.preventDefault();
    displayTriviaCards(BASE_URL);
});

function displayTriviaCards( BASE_URL ){

    const BASE_URL_RESPONSE = fetch(BASE_URL);
    const responseAction = BASE_URL_RESPONSE.then( response => response.json() );

    responseAction.then(({results}) => {

        const cards = results;
        
        for(let card of cards){
            createCard(card);
        }
    }).catch(displayError);
};

function displayError(error){
    console.log(error);
};

function cardColorBasedOnDifficulty(cardDifficulty){
    return cardDifficulty === "hard" ? "#c50d66" : "#fdffab";
}

function createCard(card){
    const { category, difficulty, question, correct_answer } = card; 

    const mainSection = document.querySelector("main")
    const article = document.createElement("article");
    article.classList.add("card");

    article.style.borderColor = cardColorBasedOnDifficulty(difficulty);

    const h2 = document.createElement("h2");
    h2.innerText = category;

    const questionElement = document.createElement("p");
    questionElement.innerText = question.replace(/&quot;/g, '"');

    const showAnsButton = document.createElement("button");
    showAnsButton.innerText = "Show Answer";

    const answerElement = document.createElement("p");
    answerElement.classList.add("hidden");
    answerElement.innerText = correct_answer;

    article.append(h2, questionElement, showAnsButton, answerElement);
    mainSection.append(article);

    showAnsButton.addEventListener("click", handleClick => {
        handleClick.target.parentNode.lastChild.classList.remove("hidden");
    });
};