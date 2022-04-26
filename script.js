const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((JSON) => {
      JSON.results.forEach((obj) => {
        // article tag
        let article = document.createElement("article");
        article.classList.add("card");
        main.append(article);

        // h2 tag
        let h2 = document.createElement("h2");
        h2.textContent = obj.category;
        article.append(h2);

        // p1 tag
        let p1 = document.createElement("p");
        p1.textContent = obj.question;
        article.append(p1);

        // button
        let button = document.createElement("button");
        button.textContent = "Show Answer";
        article.append(button);

        // p2 tag
        let p2 = document.createElement("p");
        p2.textContent = obj.correct_answer;
        p2.classList.toggle("hidden");
        article.append(p2);
        p2.addEventListener("click", () => {
          p2.classList.toggle('hidden');
        });
      });
    })
    .catch((err) => {
        alert(err);
    })
});
