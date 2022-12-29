//what api are we using
const BASE_URL = "https://opentdb.com/api.php?amount=10&type=multiple";
//create variable to contain the form
const form = document.querySelector('form');
// event listener for when user clicks, what do you want to do upon click
// get cards helper function to get info from api
const main = document.querySelector('main');
form.addEventListener('submit', getCards);

function getCards(event){
    event.preventDefault()
    fetch(BASE_URL)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            createCards(result);
        })
        .catch ((error) => {
            createErrorMessage(error);
        });
}

function createCards(cardData){

    const triviaCardData = cardData.results
    triviaCardData.forEach((card) => {
        const triviaCard = document.createElement('article');
        triviaCard.classList.add('card')
        const category = document.createElement('h2');
        category.innertext = card.category;
        const question = document.createElement('p');
        question.innerHTML = card.question;
        const showAnswer = document.createElement('button');
        showAnswer.addEventListener ('click', (event) => {
            answer.classList.remove('hidden');
        });
        showAnswer.innerHTML = 'Show Answer';
        const answer = document.createElement('p');
        answer.classList.add('hidden');
        answer.innerHTML = card.correct_answer

        triviaCard.append(category, question, showAnswer, answer);
        main.append(triviaCard);
    });
    }

function createErrorMessage(error){


}
function revealAnswer(event){
event.target.parentNode.lastChild.classList.remove = ('hidden');
}
