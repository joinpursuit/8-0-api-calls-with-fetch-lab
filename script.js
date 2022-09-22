const main = document.querySelector("main");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((JSON) => {
      JSON.results.forEach((obj) => {
        let article = document.createElement("article");
        article.classList.add("card");
        main.append(article);
        if (obj.difficulty == "medium") {
          article.style.borderColor = "yellow";
        }

        let h2 = document.createElement("h2");
        h2.innerText = obj.category;
        article.append(h2);

        let p1 = document.createElement("p");
        p1.innerText = obj.question;
        h2.append(p1);

        let button = document.createElement("button");
        button.innerText = "Show Answer";
        article.append(button);

        let p2 = document.createElement("p");
        p2.classList.add("hidden");
        p2.innerText = obj.correct_answer;
        article.append(p2);
        button.addEventListener("click", (e) => {
          p2.classList.toggle("hidden");
        });
      });
    })
    .catch((err) => {
      alert(err);
    });
});
