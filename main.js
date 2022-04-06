//const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

const BASE_URL = 'https://opentdb.com/api.php?amount=10';
//const category = 'dificult';
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    getQuestions(BASE_URL);

})
function getQuestions(BASE_URL) {
fetch(`${BASE_URL}`)
.then((response) => response.json())
.then((json) => {
   console.log(json);
   const main = document.querySelector("main");
for (let i = 0; i < json.results.length; i++) {
const article = document.createElement("article");
const header = document.createElement("h2");
const p = document.createElement("p");
const button = document.createElement("button");
const paragraph = document.createElement("p");
main.append(article);
article.append(header);
article.append(p);
article.append(button);
article.append(paragraph);
header.textContent = json['results'][i].category;
p.textContent = json['results'][i].question;
paragraph.textContent = json['results'][i].correct_answer;
button.textContent = "Show answer"
article.classList.add("card");
paragraph.classList.add("hidden");
button.addEventListener("click", (event) => {
    event.preventDefault();
    paragraph.classList.remove("hidden");
} )
}
})
};
//getQuestions(BASE_URL);
/*
<article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article>
*/

