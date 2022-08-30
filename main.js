const baseURL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteOldQuestions();
  const URL = createURL(
    baseURL,
    e.target.category.value,
    e.target.difficulty.value,
    e.target.type.value
  );
  console.log(URL);
  fetch(URL)
    .then((res) => res.json())
    .then((data) => createAndAppendCard(data.results))
    .catch(console.log);
});

const createAndAppendCard = (questions) => {
  for (let question of questions) {
    console.log(question);
    const article = document.createElement("article");
    article.classList.add("card");
    article.classList.add(question.difficulty);

    const h2 = document.createElement("h2");
    h2.textContent = question.category;

    const p = document.createElement("p");
    p.innerText = decodeHtmlEntity(question.question);

    const button = document.createElement("button");
    button.textContent = "Show Answer";
    button.addEventListener("click", (e) => {
      e.target.nextElementSibling.classList.toggle("hidden");
    });

    const p2 = document.createElement("p");
    if (question.type === "multiple") {
      const shuffledAnswers = shuffleAnswers(
        ...question.incorrect_answers,
        question.correct_answer
      );

      p2.textContent += decodeHtmlEntity(shuffledAnswers);
    }

    const p3 = document.createElement("p");
    p3.textContent = decodeHtmlEntity(question.correct_answer);
    p3.classList.add("hidden");
    article.append(h2, p, p2, button, p3);

    main.append(article);
  }
};

const deleteOldQuestions = () => {
  main.innerHTML = "";
};

const decodeHtmlEntity = (html) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const createURL = (base, categ, diff, type) => {
  const keys = ["category", "difficulty", "type"];
  [categ, diff, type].forEach((value, i) => {
    if (value !== "any") {
      base += "&" + keys[i] + "=" + value;
    }
  });
  return base;
};

const shuffleAnswers = (...answers) => {
  return answers.sort((a, b) => 0.5 - Math.random());
};
