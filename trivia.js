document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then(triviaQuestions);
  });
  const triviaQuestions = (questions) => {
    questions.results.forEach((element) => {
      const button = document.createElement("button");
      button.textContent = "Show Answer";
      const paragraph = document.createElement("p");
      paragraph.classList.add("hidden");
      paragraph.textContent = element.correct_answer;
      const article = document.createElement("article");
      article.classList.add("card");
      article.innerHTML = `
            <h2>${element.category}</h2>
            <p>${element.question}</p>
          `;
      article.append(button);
      article.append(paragraph);
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.parentNode.lastChild.classList.remove("hidden");
      });
      document.querySelector("main.centered").append(article);
    });
  };