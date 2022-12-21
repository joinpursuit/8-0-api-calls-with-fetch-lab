const main = document.querySelector("main");
const button = document.querySelector("button");

const BASE_URL = "https://opentdb.com/api.php?amount=10";

fetch(BASE_URL)
  .then((res) => res.json())
  .then((response) => {
    response.results.map((question) => {
      let article = document.createElement("article");
      article.setAttribute("id", "card");
      let h2 = document.createElement("h2");
      h2.innerHTML = question.category;
      let p = document.createElement('p');
      p.innerHTML = question.question

      article.prepend(h2,p);
      main.append(article)
    });
  })
  .catch((err) => {
    console.log(err);
  });
