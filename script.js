//create variables I think I will need, including a base URL, the API key, one from the question button, and one tag.


const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';
const API_KEY = "d6c670c28f93644a33f7cfd69726a0cb2ce5d7f8be70dedea0ef784030dc6d25"
const questionButton = document.querySelector("button");
const main = document.querySelector("main"); //this is where we were instructed to have the card show up
const answerButton = document.querySelector("button.card");


questionButton.addEventListener('click', async (event) => {
  event.preventDefault()

    await fetch(BASE_URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)

        let questions  = response.results
        for (let i=0; i<questions.length; i++){
            let article = document.createElement("article");
            article.classList.add("card");


          let question = `       
          <h2>${questions[i].category}</h2>
          <p>${questions[i].question}</p>
          <button>Show Answer</button>
          <p class="hidden">${questions[i].correct_answer}</p>`

          article.innerHTML = question;
          main.append(article);
        }
      })
      .catch((error) => {
      console.log(error)
    })
  })
//what should this button do when clicked?
answerButton.addEventListener('click', async (event) => 
{
  //get the answer paragraph
  let answer = document.querySelector(".hidden");
  answer.classList.toggle("hidden");

})
  