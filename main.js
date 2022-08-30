const Base_URL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
// console.log(form);
const main = document.querySelector("main");
// console.log(main);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`${Base_URL}`)
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson.results);
      const results = resJson.results;
      results.forEach((result) => {
        // console.log(result);
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const button = document.createElement("button");
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        p2.classList = "hidden";
        article.classList = "card";
        main.append(article);
        article.append(h2);
        h2.after(p);
        p.after(button);
        button.after(p2);

        h2.innerText = result.category;
        p.innerText = result.question;
        button.innerText = "Show Answer";
        p2.innerText = result.correct_answer;
        button.addEventListener("click", () => {
          p2.classList.remove("hidden");
        });
      });
    })
    .catch((error) => console.log(error));
});
