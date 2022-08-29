const BASE_URL = `https://opentdb.com/api.php?amount=10`;

const form = document.querySelector("form");
// console.log(form);
const main = document.querySelector("main");
// console.log(main);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const eachArticle = res.results;
      eachArticle.forEach((el) => {
        console.log(el);
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const button = document.createElement("button");
        const p2 = document.createElement("p");

        article.classList.add("card");
        h2.innerText = el.category;
        p1.innerText = el.question;
        button.innerText = "Show Answer";
        p2.classList.add("hidden");
        p2.innerText = el.correct_answer;
        article.append(h2, p1, button, p2);
        main.append(article);

        button.addEventListener("click", () => {
          p2.classList.toggle("hidden");
        });
      });
    })
    .catch((err) => console.log(err));
});
