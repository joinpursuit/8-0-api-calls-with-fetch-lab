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

  
  