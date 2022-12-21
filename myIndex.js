//create a variable to represent the url from the open trivia database
const BASE_URL = "https://opentdb.com/api.php?amount=10&type=multiple";
//create a variable that will contain the main element
const main = document.querySelector("main")

// create a variable to contain the form
const form = document.querySelector("form");

//create an event an event listener for the submit button within the form
form.addEventListener("submit", getTriviaCardData)// make a function called getTrivialCardData
   

// write a function getTrivialCard that will retrieve data from  the api and call our getTrivialCards function
function getTriviaCardData(event){

    event.preventDefault();
    //use fetch with the open trivia database to access the data from the jsonn api

    fetch(BASE_URL)
        .then((response)=> response.json())
        .then ((result)=> {

            //call createTriviaCards function with result
            createTriviaCards(result)
            
        })
        .catch((error) => {
            //call createErrorMessage function with error
            createErrorMeassage(error)
        })
        
}    

//write a function that uses the result from the fetch to create our trivia cards
function createTriviaCards(triviaCardData){

    //create a variable that will access the array of objects
    const triviaCardDataArray = triviaCardData.results;

    //use a loop to access and format the 'category','question', and correct_answer'
    triviaCardDataArray.forEach((card)=>{

        // create an article elememt with the class of 'card'
        const triviaCard = document.createElement('article');
        triviaCard.classList.add('card')

        //create an h2 element with the 'category'
        const category = document.createElement('h2');
        category.innerText = card.category;

        
        //create a p elememnt with the 'question'
        const question = document.createElement("p");
        question.innerHTML = card.question
        //create a button that when clicked reveals the 'correct_answer' 
        const showAnswer = document.createElement('button');

        // add an event listener to the button to reveal the answer
        showAnswer.addEventListener("click", revealAnswer);
        showAnswer.innerHTML = "show Answer";

        //create a p elememnt with the class of 'hidden' that contains the 'correct_answer'
        const answer = document.createElement("p");
        answer.innerHTML = card.correct_answer;
        answer.classList.add("hidden");

        //append everything to the article elemnt
        triviaCard.append(category,question, showAnswer, answer);
        main.append(triviaCard);
    })
    //console.log(triviaCard)
}
//write a function that creates an error message 
function createErrorMeassage(errorMessage){
 const section = documnet.createElement("section");
 section.classList.add("error");
 section.innerHTML =   `<p> There was an error!</p>
                        <p class="message">${errorMessage}</p>`
 main.append(section)
}

// write a function that changes the display of the p element with a class of "hidden" to `display: contents`
function revealAnswer(event){
    event.target.nextSibling.classList.remove("hidden");
};