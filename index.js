// create a variable to represent the URL
const BASE_URL = "https://opentdb.com/api.php?amount=10&type=multiple"

//create a variable to contain the form 
const form = document.querySelector("form");
// create a variable to contain main element
const main = document.querySelector('main');


// create an event listener for the submit button with in the form. then write a function
form.addEventListener("submit", getTriviaCardData);  //make function call to getTriviaCards

// write a function getTriviaCardData that will retrieve data from the API and format the trivia cards and call out createTriviaCards function
function getTriviaCardData(event) {
    event.preventDefault();
    fetch(BASE_URL)
        .then((response) => response.json())
        .then((result) => {
            //call our createTriviaCards function with result
            createTriviaCards(result);
        })
        .catch((error) => {
            // call createErrorMessage function with error
            createErrorMessage(error)
            //create a section element with the class of error
        });
    }
    // write a function that uses the result from the fetch to create our trivia cards
    function createTriviaCards(triviaCardData) {

        //create a variable that will access the array of objects
        const triviaCardDataArray = triviaCardData.results;
        
        //Use a loop to access and format the category, question, and correct_answer
        triviaCardDataArray.forEach((card) => {

        // create an article element with the class of 'card
        const triviaCard = document.createElement('article');
        triviaCard.classList.add('card');
        // create an h2 element with the category
        const category = document.createElement('h2');
        category.innerText = card.category;
        //create a p element with the question
        const question = document.createElement('p')
        question.innerText = card.question;

        // create a button that when clicked reveals/reveals the correct_anwer
         const showAnswer = document.createElement('button');
       
         // Add an event listener to the button to reveal the answer
        showAnswer.addEventListener('click', revealAnwser);
        showAnswer.innerHTML = 'Show Answer'
       
        //Create a p element with the class of hidden that contains the correct answer  
        const answer = document.createElement('p'); 
        answer.innerHTML = card.correct_answer;
        answer.classList.add('hidden');

        // append everything to the article element. 
        triviaCard.append(category, question, showAnswer, answer)
        main.append(triviaCard);

        });
    }
    // Write a function that creates an error Message
    function createErrorMessage(errorMessage) {
            //create a section element with the class of error
        const section = document.createElement("section")
        section.classList.add("error");
        section.innerHTML = `<p>There was an error!</p>
        <p class ="message">${errorMessage}</p>`;
        main.append(section);
        }

// use the fetch structure to access the website with Open Triva Database to acesss the data from the JSON API
function revealAnwser(event) {
    event.target.nextSibling.classList.remove('hidden');
};