const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(`https://opentdb.com/api.php?amount=10`)
    .then((response) => response.json())
    .then((JSON) => {
      JSON.results.forEach((obj) => {
        // Article
        let article = document.createElement("article");
        article.classList.add("card");
        main.append(article);

        // H2
        let Heading2 = document.createElement("h2");
        Heading2.textContent = obj.category;
        article.append(Heading2);

        // P1
        let para1 = document.createElement("p");
        para1.textContent = obj.question;
        article.append(para1);

        // Button
        let btn = document.createElement("button");

        btn.textContent = "Show Answer";
        article.append(btn);

        // P2
        let para2 = document.createElement("p");
        para2.textContent = obj.correct_answer;
        para2.classList.toggle("hidden");
        article.append(para2);
        btn.addEventListener("click", () => {
          para2.classList.toggle("hidden");
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
