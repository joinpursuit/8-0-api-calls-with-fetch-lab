function decodeHTMLEntity(str) {
  const decodeHTMLEntities = {
    "&quot;": '"',
    "&#039;": `'`,
    "&eacute;": "é",
  };

  const regex = /(&quot;|&#039;|&eacute;)/g;
  return str.replace(regex, (match) => {
    return decodeHTMLEntities[match];
  });
}

//create drop down with all categories and append to form
(function createDropDown() {
  const dropDown = document.createElement("select");
  defaultOption = document.createElement("option");
  defaultOption.textContent = "All";
  defaultOption.value = "All";
  dropDown.append(defaultOption);

  fetch("https://opentdb.com/api_category.php")
    .then((response) => response.json())
    .then(({ trivia_categories }) =>
      trivia_categories.forEach(({ name }) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        dropDown.append(option);
      })
    )
    .catch(console.log);

  document.querySelector("form").append(dropDown);
})();

function getURLWithCategory(category) {
  const url = "https://opentdb.com/api.php?amount=10";

  fetch("https://opentdb.com/api_category.php")
    .then((response) => response.json())
    .then(({ trivia_categories }) =>
      trivia_categories.reduce((acc, cVal) => {
        acc[cVal.name] = cVal.id;
        return acc;
      }, {})
    )
    .then((triviaObj) => {
      fetch(triviaObj[category] ? url + "&category=" + triviaObj[category] : url).then((response) =>
        response.json().then(({ results }) => {
          console.log(results);
          results.forEach(({ category, difficulty, question, correct_answer }) => {
            const article = document.createElement("article");
            article.setAttribute("class", "card");
            difficulty === "easy" ? (article.style.border = "5px solid green") : difficulty === "medium" ? (article.style.border = "5px solid gold") : (article.style.border = "5px solid red");
            const header2 = document.createElement("h2");
            const paragraph = document.createElement("p");
            const answerButton = document.createElement("button");
            const hiddenParagraph = document.createElement("p");
            header2.textContent = category;
            paragraph.textContent = decodeHTMLEntity(question);
            answerButton.textContent = "Show Answer";
            hiddenParagraph.textContent = correct_answer;
            hiddenParagraph.setAttribute("class", "hidden");
            article.append(header2, paragraph, answerButton, hiddenParagraph);
            document.querySelector("main").append(article);

            answerButton.addEventListener("click", () => {
              hiddenParagraph.classList.toggle("hidden");
            });
          });
        })
      );
    })
    .catch(console.log);
}

//create an event listener that will listen to a form submission for number of questions as extra
const newQuestionsButton = document.querySelector("button");

newQuestionsButton.addEventListener("click", (event) => {
  event.preventDefault();

  const category = document.querySelector("select").value;

  if (document.querySelector("main").children.length !== 0) {
    // console.log(document.querySelector("main").children);
    document.querySelectorAll("main article").forEach((el) => {
      el.remove();
    });
  }

  getURLWithCategory(category);
});
