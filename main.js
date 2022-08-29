const URL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const main = document.querySelector("main");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  //create article tag, add class 'card'
  //create h2 tag
  //create p tag
  //create button. in the button make a p tag which has text
  fetch(`${URL}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((el) => {
        const article = document.createElement("article");
        article.classList.add("card");

        const h2 = document.createElement("h2");
        h2.innerText = el.category;

        const p = document.createElement("p");
        p.innerText = el.question;

        const button2 = document.createElement("button");
        button2.innerText = "Show Answer";

        const p2 = document.createElement("p");
        p2.classList.add("hidden");
        p2.innerText = el.correct_answer;

        article.append(h2, p, button2, p2);
        main.append(article);

        button2.addEventListener("click", () => {
          p2.classList.toggle("hidden");
        });
      });
    });
});
