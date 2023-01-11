const BASE_URL = "https://opentdb.com/api.php?amount=10"

// reference button event to collect innerText data
const newQuestion = document.querySelector("form");
// listens for user submit
newQuestion.addEventListener("submit", event => {
// stops page from reloading
event.preventDefault();
// displays API connection to the button
display(BASE_URL);
});

// start function
// invoke function
function display (BASE_URL) {
// promise...if i get you the BASE_URL what will you do?
// translate into json
    fetch(BASE_URL)
// catches promise...inter-changeable
    .then(response => response.json()
    // you can also return the promise with 
    // return response.json()
    )
// extract results from API
// results = response to promise
// object destructured
    .then(({results}) => {
        // callback
        // new container for results
        // const deckOfCardsArray = results
        results.forEach(card =>{
            deckOfCardsArray(card)
        });
    });
}

function deckOfCardsArray(card){
    // telling json what we want added to card
    const {category, question, correct_answer} = card;

    // creating what shows up in main
    const mainElements = document.querySelector("main");

    const article = document.createElement("article");
    article.classList.add("card");

    const h2head = document.createElement("h2");
    // innerText = HTML element
    h2head.innerText = category;
    // append = at the end
    article.append("h2")

    const askHere = document.createElement("p");
    askHere.innerText = askHere //.replace(//g, "''")
    askHere.innerText = askHere //.replace(//g, "''")
    article.append(question)

    const answer = document.createElement("button");
    answer.innerText = "Show Answer"
    article.append(answer);

    // answer is waiting to be displayed because its hidden

    const correctAnswer = document.createElement("p");
    correctAnswer.classList.add("hidden")
    correctAnswer.innerText = correct_answer

    article.append(correctAnswer);
    mainElements.append(article);

    answer.addEventListener("click", solution => {
        // parentNode = div
        // lastChild = last element
        solution.target.parentNode.lastChild.classList.remove("hidden")
    })

}