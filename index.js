const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(BASE_URL)
    .then((res) => res.json())
    .then((json) => {
      const { results } = json;
      getNewQuestions(results);
    })
    .catch((e) => {
      errors(e);
    });
});

const getNewQuestions = (questions) => {
  const main = document.querySelector("main.centered");
  clearOldQuestions(main);

  for (const question of questions) {
    const article = document.createElement("article");
    article.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = question.category;

    const p = document.createElement("p");
    p.textContent = decodeEntity(question.question);

    const pAnswer = document.createElement("p");
    pAnswer.classList.add("hidden");

    const button = document.createElement("button");
    button.textContent = "Show Answer";
    button.addEventListener("click", (e) => {
      e.preventDefault();

      pAnswer.textContent = question.correct_answer;
      pAnswer.classList.toggle("hidden");

      if (button.textContent === "Show Answer") {
        button.textContent = "Hide Answer";
      } else {
        button.textContent = "Show Answer";
      }
    });
    difficulty(question.difficulty);
    article.append(h2, p, pAnswer, button);
    main.append(article);
  }
};

const errors = (error) => {
  const h2 = document.createElement("h2");
  const main = document.querySelector("main.centered");
  h2.textContent = error;
  main.append(h2);
  setTimeout(() => {
    h2.textContent = "";
  }, 10000);
};

const decodeEntity = (inputStr) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = inputStr;
  return textarea.value;
};

const difficulty = (question) => {};

const clearOldQuestions = (oldQuestions) => {
  oldQuestions.innerHTML = "";
};
