const BASE_URL = `https://opentdb.com/api_config.php?amount=10&category=11&difficulty=easy&type=multiple"`

{/* <article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article> */}

function moreQuestions() {
    const article = document.createElement("article");
    article.classList.add(".card");
    
    const h2 = document.createElement("h2");
    article.append(h2);

    const p = document.createElement("p");
    article.append(p);
    p.textContent = "";

    const button = document.createElement("button");
    article.append(button);

    const p2 = document.createElement("p2");
    p2.classList.add("hidden");
    p2.textContent = "";
    article.append(p2);

    
}


function fetchThat() {
fetch(BASE_URL)
    .then(response => response.json())
    .then(console.log)
    .catch(console.log)
}

const form = document.querySelector("form");
form.addEventListener("click", (event) => {
    event.preventDefault();


})

const article = document.querySelector("article");


const questions = document.createElement("p")