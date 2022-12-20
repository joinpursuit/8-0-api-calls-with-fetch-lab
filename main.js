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
            
            const { category, question, correct_answer } = card; 
            const mainSection = document.querySelector("main")
            const article = document.createElement("article");
            article.classList.add("card");

            const heading2 = document.createElement("h2");
            heading2.innerText = category;
            article.append(heading2);

            const questionElement = document.createElement("p");
            questionElement.innerText = question.replace(/&quot;/g, '"');
            article.append(questionElement);

            const showAnsButton = document.createElement("button");
            showAnsButton.innerText = "Show Answer";
            article.append(showAnsButton);

            const answerElement = document.createElement("p");
            answerElement.classList.add("hidden");
            answerElement.innerText = correct_answer;

            article.append(answerElement);
            mainSection.append(article);

            showAnsButton.addEventListener("click", handleClick => {
                handleClick.target.parentNode.lastChild.classList.remove("hidden");
            });
        }
    }).catch(displayError);
};
function displayError(error){};