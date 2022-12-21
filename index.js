// Create a variable to represent the URL from the Open Trivia database
const BASE_URL = "https://opentdb.com/api.php?amount=10";

// Create a variable that will contain the 'main' element 
const main = document.querySelector('main');
// Create a variable to contain the form
const form = document.querySelector('form');

// Create an event listener for the submit button within the form
form.addEventListener('submit', getTriviaCardData); // Make a func call to getTriviaCards

// Write a function getTriviaCardData that will retrieve data from the API and format the trivia cards
function getTriviaCardData(event) {
   event.preventDefault();
// Use fetch with the Open Database to access the data from the JSON API
 fetch(BASE_URL) 
 .then((response) => response.json())
 .then((result) => {
    // Call createTriviaCards function with our result
    createTriviaCards(result);
})
.catch((error) => {
    // Call createErrorMessage function with error
    createErrorMessage(error)
});
}

 // Write a function that uses the result from the fetch to create our trivia cards
function createTriviaCards(triviaCardData) {

    // Create a variable that will access the array of objects
    const triviaCardDataArray = triviaCardData.results;
     
    // Use a loop to access and format the 'category', the 'question', and the 'correct_answer' 
    triviaCardDataArray.forEach((card) => {

    // Create an article element with the class of 'card'
    const triviaCard = document.createElement('article');
    triviaCard.classList.add('card');

    // Create an h2 element with the 'category'
    const category = document.createElement('h2');
    category.innerText = card.category;

    // Create a p element with the 'question'
    const question = document.createElement('p');
    question.innerHTML = card.question;

    // Create a button that when clicked, reveals the 'correct_answer'
    const answer = document.createElement('button');

    // Add an event listener to the button to reveal the answer
    answer.addEventListener('click', revealAnswer); // Call revealAnswer function to show the answer on the card
    answer.innerHTML = 'Show Answer';

    // Create a p element with the class of "hidden" that contains the 'correct_answer'
    const hiddenAnswer = document.createElement('p');
    hiddenAnswer.innerHTML = card.correct_answer;
    hiddenAnswer.classList.add('hidden');

    // Append everything to the article element
    triviaCard.append(category, question, answer, hiddenAnswer);
    main.append(triviaCard);
  });
}

// write a function that creates an error message
function createErrorMessage(errorMessage) {
            //create a section element with the class of error
        const section = document.createElement("section")
        section.classList.add("error");
        section.innerHTML = `
        <p>There was an error!</p>
        <p class ="message">${errorMessage}</p>
        `;
        main.append(section);
}

// Write a function that changes the display of the p element with the class of 'hidden to `display: contents`
function revealAnswer(event) {
 event.target.nextSibling.classList.remove('hidden');
}


