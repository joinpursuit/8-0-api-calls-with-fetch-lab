const BASE_URL = `https://opentdb.com/api_config.php`;

// need to grab the form and main element.
const form = document.querySelector("form");
const main = document.querySelector("main");

//creat an eventListener, submit button and prevent the default action.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  trivQuestions(BASE_URL);
});

//need to create a function that will take in a url.
function trivQuestions(url) {
  fetch(url)
    .then((response) => {
      return response.json();
      //json data is converted into js data and then iterated through an array.
    })
    .then((data) => {
      data.results.forEch((question) => {
        const art = document.createElement("article");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const p2 = document.createElement("p");

        // adding classes as needed.
        art.classList.add("card");
        p2.setAttribute("class", "hidden");

        //updating tect content for elements.
        h2.textContent = question.category;
        p.innerHTML = question.question;
        button.textContent = "Show Answer";
        p2.innerHTML = question.correct_answer;

        // when answer button is clicked, the correct answer is displayed.
        button.addEventListener("click", () => {
          p2.classList.remove("hidden");
        });
        // setting up format for page
        main.append(art);
        art.append(h2, p, button, p2);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
