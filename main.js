const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Make 10 new trivia questions appear on the page
  fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((questions) => {
      //   console.log(questions);
      questions.results.forEach((question) => {
        const article = document.createElement("article");
        article.setAttribute("class", "card");
        const h2 = document.createElement("h2");
        h2.innerText = question.category;
        const p = document.createElement("p");
        p.innerText = question.question;
        const button = document.createElement("button");
        button.innerText = "Show Answer";
        const pHidden = document.createElement("p");
        pHidden.setAttribute("class", "hidden");
        pHidden.innerText = question.correct_answer;
        article.append(h2, p, button, pHidden);
        form.after(article);
        // add show answer button functionality
        // console.log(question);
      });
    });

  // Create html
  //   const article = document.createElement("article");
  //   article.setAttribute("class", "card");
  //   const h2 = document.createElement("h2");
  //   h2.innerText = "CATEGORY";
  //   const p = document.createElement("p");
  //   p.innerText = "QUESTION";
  //   const button = document.createElement("button");
  //   button.innerText = "Show Answer";
  //   const pHidden = document.createElement("p");
  //   pHidden.setAttribute("class", "hidden");
  //   pHidden.innerText = "CORRECT ANSWER";
  //   article.append(h2, p, button, pHidden);
  //   form.after(article);
});
