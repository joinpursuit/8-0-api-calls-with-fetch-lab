const URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((jResult) => {
      console.log(jResult);
      jResult.results.forEach((question) => {
        //! Article
        const article = document.createElement("article");
        article.classList.add("card");
        // console.log(article);
        //!h2
        const h2 = document.createElement("h2");
        h2.innerText = question.category;
        // //! Paragraph 1
        const p = document.createElement("p");
        p.textContent = question.question;
        // //! Paragraph 2
        const p2 = document.createElement("p");
        p2.innerText = question.correct_answer;
        p2.classList.add("hidden");
        // //! Button

        const button = document.createElement("button");
        button.innerText = "Show Answer";
        button.addEventListener("click",()=>{
            p2.classList.toggle("hidden")
        })
        console.log(h2);
        // //! Append
        main.append(article);
        article.append(h2, p, button, p2);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});


