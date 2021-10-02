const card_URL = "https://opentdb.com/api.php?amount=10";
//selects the form element and added a call a listener on it
document.querySelector('form')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelectorAll('.error')
    .forEach((errorMessage) => errorMessage.remove())
    fetch(card_URL)  //fetches data from the API url
      .then((response) => response.json())  //if response if fulfilled, the data is converted to json a file
      .then(flashCard)  // the method flashCard that does the DOM manipulation is passed as an argument in the then method
      .catch(createErrorMessage) // if response is unfulfilled, an error message is logged
  });

  const flashCard = (card) => {
    for (let i = 0; i < 10; i++) { //helps add 10 cards to the dom
      const main = document.querySelector('main.centered'); // selecting element main containing class called 'centered  
      const article = document.createElement('article'); //creates article element
      article.classList.add('card')
      article.innerHTML = `
      <h2>${card.results[i].category}</h2>
      <p>${card.results[i].question}</p>
      <button class="answerBtn">Show Answer</button>
      <p class="hidden">CORRECT ANSWER</p>`
      main.append(article);
         
      // added a listener on all the displayed show answer buttons  
      document.querySelectorAll('.answerBtn')[i].addEventListener('click', () => { // 
        const showAnwer = document.querySelectorAll("p.hidden")[i]; // assigning all hidden answers 
        showAnwer.setAttribute('style', 'display: block'); //showing the hidden content
        showAnwer.textContent = card.results[i].correct_answer; // assigning the value 
      })
    }
  }



  const createErrorMessage = (message) => { 
    const section = document.createElement("section");// Creates a section element
    section.classList.add("error"); //adds 'error' as a class for the section and assigns text content
    section.innerHTML = ` 
      <p>There was an error!</p>
      <p class="message">${message}</p>`
      document.querySelector('form').after(section) // appends section right after form tag
  }
  
  