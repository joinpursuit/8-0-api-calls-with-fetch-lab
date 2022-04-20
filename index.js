//step 1 - create the html
// const article = document.createElement("article");
// article.classList.add(".card");
// const heading = document.createElement("h2");
// heading.textContent = "CATEGORY";
// const p = document.createElement("p");
// p.textContent = "QUESTION";
// const button = document.createElement("button");
// button.textContent = "Show Answer";
// const ptag = document.createElement("p");
// ptag.setAttribute = ".hidden";
// ptag.textContent = "CORRECT ANSWER";
// const main = document.querySelector("main");
// main.append(article);
// article.append(heading, p, button, ptag);
// console.log(article);

// //step2
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   const answer = document.querySelector("ptag");
//   answer.textContent = event.target.ptag.value;
// });

const form = document.querySelector("form");
const main = document.querySelector(".centered");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      peanuts = response.results;
      for (let i = 0; i < peanuts.length; i++) {
        const article = document.createElement("article");
        const category = document.createElement("h2");
        const pquestion = document.createElement("p");
        const showAnswer = document.createElement("button");
        const answer = document.createElement("p");

        article.classList.add("card");
        category.textContent = `${peanuts[i].category}`;
        pquestion.textContent = `${peanuts[i].question}`;
        showAnswer.textContent = "Show Answer";
        answer.textContent = `${peanuts[i].correct_answer}`;
        answer.classList.add("hidden");

        main.append(article);
        article.append(category);
        article.append(pquestion);
        article.append(showAnswer);
        article.append(answer);

        article.addEventListener("click", (event) => {
          event.preventDefault();
          answer.classList.remove("hidden");
        });
      }
    });
});
