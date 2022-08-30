//the base url, this is where the questions will come from
const BASE_URL = "https://opentdb.com/api.php?amount=10";

//grab the form and main elements
const form = document.querySelector("form");
const main = document.querySelector("main");

//prevent the submit button from the default action
form.addEventListener("submit", (event) => {
  event.preventDefault();
  trivias(BASE_URL);
});

//create a function that takes in a url
function trivias(url) {
  fetch(url)
    .then((response) => {
      //the response from the url is transformed into json data
      return response.json();
    })
    //the json data is transformed into js data and then iterate thru the array
    .then((result) => {
      result.results.forEach((question) => {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const answerButton = document.createElement("button");
        const p2 = document.createElement("p");

        //add classes as needed
        article.classList.add("card");
        p2.setAttribute("class", "hidden");

        //update the text content for the elements
        h2.textContent = question.category;
        p1.innerHTML = question.question;
        answerButton.textContent = "Show Answer";
        p2.innerHTML = question.correct_answer;

        //when the show answer button is clicked, the correct answer is shown
        answerButton.addEventListener("click", () => {
          p2.classList.remove("hidden");
        });
        //set up the format for the page
        main.append(article);
        article.append(h2, p1, answerButton, p2);
      });
    })
    //if there is an error, log it
    .catch((err) => {
      console.log(err);
    });
}
