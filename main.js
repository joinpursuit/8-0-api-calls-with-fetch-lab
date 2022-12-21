const BASE_URL = "https://opentdb.com/api.php?amount=10"
const addNew = document.querySelector("form");

addNew.addEventListener ("submit", event => {
    event.preventDefault();
    display(BASE_URL);
});

function display (BASE_URL) {

    const BASE_URL_RESPONSE = fetch( BASE_URL);
    const myResponse = BASE_URL_RESPONSE.then( response => response.json() );

    myResponse.then(({results}) => {

    for(let card of theCard) {
const {category, question, correct_answer} = theCard; //create
const myMain = document.querySelector("main") // update

const article = document.createElement("article");//create
article.classList.add("card"); //update

const hdg2 = document.createElement("h2"); //add functionality
heading2.innerText = category;

article.append(hdg2); //append

const pregunta = document.createElement("p");
pregunta.innerText = question.replace(/&quot;/g, '"');

article.append(pregunta); //append

const solution = docuemnt.createElement("button");
solution.innerText = "Show Answer";

article.append(solution); //append

const answerKey = document.createElement("p"); //create
solution.classList.add("hidden"); //update
solution.innerText = correct_answer; // functionality


article.append(solution); //append
myMain.append(article);

solution.addEventListener("click", kiwi => {
    kiwi.target.parentNode.lastChild.classList.remove("hidden");
});
}
}).catch(displayError);
};
function displayError(error){};