const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector('form');
form.addEventListener('submit', submitEvent => {
    submitEvent.preventDefault();
    triviaQuestions(BASE_URL)
})

function triviaQuestions(url){
    fetch(url)
        .then((response) => response.json())
        .then(({results}) => { // results is destructuring object
            console.log(results) // an array of cards
            results.forEach(element => { createCard(element)    
            });
        })
        .catch((error) => {
            console.log(error)
        })
}

function createCard(card){
    const {question,correct_answer,category,difficulty,incorrect_answers} = card // destructuring object

    const main = document.querySelector("main")
    const article = document.createElement("article");
    article.setAttribute('class', 'card');

    const h2 = document.createElement("h2");
    
    const pQuestion = document.createElement("p");
    pQuestion.innerText = question.replaceAll('&quot','"').replaceAll('&#039',"'").replaceAll('&amp','&').replaceAll(';','')

    const pAnswer = document.createElement("p");
    pAnswer.classList.add("hidden");
    pAnswer.innerText = correct_answer;

    const button = document.createElement("button");
    button.addEventListener("click",handleClick => {
        pAnswer.classList.remove("hidden")
    })
    
    article.append(h2, pQuestion, button, pAnswer);
    main.append(article);
}