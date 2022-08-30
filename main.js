const baseURL = "https://opentdb.com/api.php?amount=10";
const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteOldQuestions();
  const URL = createURL(baseURL, e.target.difficulty.value);
  fetch(URL)
    .then((res) => res.json())
    .then((data) => createAndAppendCard(data.results))
    .catch(console.log);
});

const createAndAppendCard = (questions) => {
  for (let question of questions) {
    // console.log(question);
    const article = document.createElement("article");
    article.classList.add("card");
    article.classList.add(question.difficulty);

    const h2 = document.createElement("h2");
    h2.textContent = question.category;

    const p = document.createElement("p");
    p.innerText = decodeHtmlEntity(question.question);

    const button = document.createElement("button");
    button.textContent = "Show Content";
    button.addEventListener("click", (e) => {
      e.target.nextElementSibling.classList.toggle("hidden");
    });

    const p2 = document.createElement("p");
    p2.classList.add("hidden");
    p2.textContent = decodeHtmlEntity(question.correct_answer);
    article.append(h2, p, button, p2);

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

const createURL = (base, diffLevel) => {
  return base + "&difficulty=" + diffLevel;
};
