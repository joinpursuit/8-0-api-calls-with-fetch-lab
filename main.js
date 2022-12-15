// create a variable that will hold the 'string' of the URL we are trying to get a response from
const BASE_URL = "https://opentdb.com/api.php?amount=10";

// create a variable and assign the 'form' element to it
const questionsForm = document.querySelector("form");

// 'addEventListener()' to the 'questionsForm' variable when the 'submit' btn is clicked
questionsForm.addEventListener( "submit", event => {

    // prevent 'default' behaviour of the 'submit' btn
    event.preventDefault();

    // call on the 'displayTriviaCards()' function when the 'submit' btn is clicked
    displayTriviaCards(BASE_URL);

});

// create 'displayTriviaCards()' function outside the 'addEventListener()'
// this function will generate the 10 cards needed unto our DOM
function displayTriviaCards( BASE_URL ){

    // using the 'fetch()' function to send a request to the specified 'BASE_URL'
    // the 'fetch()' function returns a promise that is fullfilled with a response
    const BASE_URL_RESPONSE = fetch(BASE_URL);

    // the 'then()' method is applied to 'promise' returned from the 'fetch()' function. 
    // this action will specify what should happen when a response is received.
    // here the first 'then()' callback is calling on the '.json()' method on the 'response' object
    // the '.json()' method will then parse the response body as JSON and return it as a JS object 
    const responseAction = BASE_URL_RESPONSE.then( response => response.json() );

    // the JS object is then passed as an argument to the next '.then()' callback
    // using object destructuring we then extract the 'results' property from the JS object
    // we store this inside a local variable called 'results'
    const displayResponse = responseAction.then(({results}) => {

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

            // sometimes .innerText will act funky and return unwanted characters. 
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

            // This event listener must be included inside the forLoop otherwise it will not work.
            showAnsButton.addEventListener("click", () => {
                answerElement.classList.remove("hidden");
            });
        
        }

    }).catch(displayError);

};

function displayError(error){};