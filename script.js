//create variables I think I will need, including a base URL, the API key, one from the question button, and one tag.


const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';
const API_KEY = "d6c670c28f93644a33f7cfd69726a0cb2ce5d7f8be70dedea0ef784030dc6d25"

//get the button
const questionButton = document.querySelector("button");
//get the main section
const main = document.querySelector("main"); //this is where we were instructed to have the card show up

questionButton.addEventListener('click', async (event) => {
  event.preventDefault(); //prevent the button from normal action

    await fetch(BASE_URL)
      .then((res) => res.json())
      //get the data and then do something with it
      .then((response) => {
        console.log(response);
//save the array to a variable
        let questions  = response.results;
//loop through array
        for (let i=0; i<questions.length; i++){
//create article tag for questions to go in          
            let article = document.createElement("article");
            article.classList.add("card", `answer${i}`);
//make a variable for the actual question
          let question = `       
          <h2>${questions[i].category}</h2>
          <p>${questions[i].question}</p>
          <button>Show Answer</button>
          <p class="hidden">${questions[i].correct_answer}</p>`;
//give article question data via innterHRML
          article.innerHTML = question;
//put each question at the end of main          
          main.append(article);

        let answerButton = document.querySelector(`.answer${[i]} button`);
        let answer = document.querySelector(`p.answer${[i]}`);

        answerButton.addEventListener ('click', () => {
//change the class on that paragraph
        answer.classList.toggle("hidden");
      })
    }
  })
  .catch((error) => {
  console.log(error)
  });
});
  