let amt = Number(document.querySelector('#trivia-id').value)

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
    article.classList.add('card');
    article.innerHTML = `
      <h2>
      <select name="trivia_category" class="form-control">
      <option value="any">Any Category</option>
      <option value="9">General Knowledge</option>
      <option value="10">Entertainment: Books</option>
      <option value="11">Entertainment: Film</option>
      <option value="12">Entertainment: Music</option>
      <option value="13">Entertainment: Musicals &amp; Theatres</option>
      <option value="14">Entertainment: Television</option>
      <option value="15">Entertainment: Video Games</option>
      <option value="16">Entertainment: Board Games</option>
      <option value="17">Science &amp; Nature</option>
      <option value="18">Science: Computers</option>
      <option value="19">Science: Mathematics</option>
      <option value="20">Mythology</option>
      <option value="21">Sports</option>
      <option value="22">Geography</option>
      <option value="23">History</option>
      <option value="24">Politics</option>
      <option value="25">Art</option>
      <option value="26">Celebrities</option>
      <option value="27">Animals</option>
      <option value="28">Vehicles</option>
      <option value="29">Entertainment: Comics</option>
      <option value="30">Science: Gadgets</option>
      <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
      <option value="32">Entertainment: Cartoon &amp; Animations</option>       
      </select>
  <br>
  <label for="trivia_difficulty">Select Difficulty: </label>
  <select name="trivia_difficulty" class="form-control anyDiff">
      <option value="any">Any Difficulty</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
  </select>
      </h2>
      <p type = "text" class ="question" style="display:none">${card.results[i].question}</p>
      <button class="answerBtn">Show Answer</button>
      <p class="hidden" >${card.results[i].correct_answer}</p>`
    
      //document.querySelector('form').append(article);
      main.append(article);

      // const selectDiff = document.querySelectorAll('.anyDiff')[i];
      // selectDiff.addEventListener('onchange', () => {
      // document.querySelectorAll('.question').setAttribute('style', 'display: block');
      // })
    
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

