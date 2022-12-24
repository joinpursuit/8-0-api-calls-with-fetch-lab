const BASE_URL = "https://opentdb.com/api.php?amount=10"
const addNew = document.querySelector("form");

addNew.addEventListener ("submit", event => {
    event.preventDefault();
    display(BASE_URL);
});

function display (BASE_URL) {

    fetch( BASE_URL)
    .then( response => response.json() )
    .then(({results}) => { //extracting the results of the api --> results will go into array
        results.forEach(card => {
            newCard(card) // this is the function we are creating
        })
    })
}
//create our function newCard
function newCard(card) {
    //object destructuring
const {category, question, correct_answer} = card;
const myMain = document.querySelector("main") // update -- extracting main element from dom and adding it to a variable.
const article = document.createElement("article");//create 
article.classList.add("card"); //update
const hdg2 = document.createElement("h2"); //add functionality
hdg2.innerText = category;
article.append(hdg2); //append

const pregunta = document.createElement("p");
pregunta.innerText = question.replace(/&quot;/g, '"');// &quot is double quotes -- takes in string values based on ASCII value
pregunta.innerText = question.replace(/&#039;/g, "'"); 
article.append(pregunta); //append

const solution = document.createElement("button");
solution.innerText = "Show Answer";
article.append(solution); //append

const answerKey = document.createElement("p"); //create
answerKey.classList.add("hidden"); //update
answerKey.innerText = correct_answer; // functionality

article.append(answerKey); //append
myMain.append(article);
solution.addEventListener("click", kiwi => {
    kiwi.target.parentNode.lastChild.classList.remove("hidden");
    
});
    
}
function displayError(error){};