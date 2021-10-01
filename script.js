document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let tenCards = data.results;
      //console.log(tenCards);
      let main = document.querySelector("main");
      for (card of tenCards) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let hiddenP = document.createElement("p");

        article.classList.add("card");
        h2.textContent = `${card.category}`;
        p.textContent = `${card.question}`;
        button.textContent = "Show Answer";
        button.type = "button";
        button.classList.add("showB");
        hiddenP.textContent = `${card["correct_answer"]}`;
        hiddenP.style.display = "none";
        hiddenP.classList.add("hidden");

        main.append(article);
        article.append(h2, p, button, hiddenP);
      }
      //   let answers = document.querySelector(".hidden");
      let buttons = document.querySelectorAll(".card button");

      for (button of buttons) {
        button.addEventListener("click", (event) => {
          event.target.nextElementSibling.style.display = "inherit";
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
