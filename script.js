let amount = prompt('How many questions:'  );

//Changed API to make code dynamic
const BASE_URL = `https://opentdb.com/api.php?amount=${amount}`

//API to be parsed
//const BASE_URL = "https://opentdb.com/api.php?amount=10";

//Selects <form>, adds an eventListener with an expected return to prevent page from reloading when form submitted
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
//Prevents error message from displaying multiple times if form submitted multiple times
  document.querySelectorAll('.error').forEach((errorMessage) => errorMessage.remove());
//FETCH(API)
  fetch(BASE_URL)
  //If promise fulfilled, document is parsed into json file
    .then((response) => response.json())
    //Then retrieve data from json
    .then(addTrivia)
    //If promise is rejected, log error message
    .catch(errorMessage);
});
//Data retrieved from parsed json file (addTrivia & trivia could be any name)
const addTrivia = (trivia) => {
    //Loop is needed because we want to loop thru json file for specific data
    //Static for loop: for (let i = 0; i < 10; i++)
  for (let i = 0; i < amount; i++) {
      //<article> created with a class attribute
    const article = document.createElement("article");
    article.classList.add("card");
    
    //Selects <main> by its class
    const main = document.querySelector("main.centered")
    //Adds innerHTML attribute to <article>, attributes include data from parsed json file in back ticks
    article.innerHTML = `
    <h2>${trivia.results[i].category}</h2>
    <p>${trivia.results[i].question}</p>
    <button>Show Answer</button>
    <p class="hidden">${trivia.results[i].correct_answer}</p>
    `;
        //Added an eventListener on <button> created inside <article>
        article.querySelector('button').addEventListener('click', () => {
            //When this button is clicked, <p> called by its class with an attribute to display hidden content
            article.querySelector('.hidden').style.display = 'block'
        })
            //Append whole <article> to the end <main>
        main.append(article)
    };
};
//Creating our errorMessage function with an expected return of...
const errorMessage = (message) => {
    //...creating <section>, adds class and innerHTML attributes to tag
    const section = document.createElement('section');
    section.classList.add('error');
    section.innerHTML = `
    <p>There was an error!</p>
    <p class="message">${message}</p>
    `
    //If promise is rejected error message will display a message from json file also
    //Append <section> after <form> as sibling
    document.querySelector('form').after(section);
};
    
            
