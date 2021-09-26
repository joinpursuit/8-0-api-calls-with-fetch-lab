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

//create an event listener that will listen to a form submission for number of questions as extra
const newQuestionsButton = document.querySelector("button");
// console.log(newQuestionsButton);

newQuestionsButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (document.querySelector("main").children.length !== 0) {
    // console.log(document.querySelector("main").children);
    document.querySelectorAll("main article").forEach((el) => {
      el.remove();
    });
  }

  fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((el) => {
        // console.log(el);
        const article = document.createElement("article");
        article.setAttribute("class", "card");
        const header2 = document.createElement("h2");
        const paragraph = document.createElement("p");
        const answerButton = document.createElement("button");
        const hiddenParagraph = document.createElement("p");
        header2.textContent = el.category;
        paragraph.textContent = decodeHTMLEntity(el.question);
        answerButton.textContent = "Show Answer";
        hiddenParagraph.textContent = el["correct_answer"];
        hiddenParagraph.setAttribute("class", "hidden");
        article.append(header2, paragraph, answerButton, hiddenParagraph);
        document.querySelector("main").append(article);

        answerButton.addEventListener("click", (event) => {
          hiddenParagraph.classList.toggle("hidden");
        });
      });
    })
    .catch(console.log);
});

/*
<article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article>
*/

// fetch("https://opentdb.com/api.php?amount=10")
//   .then((response) => response.json())
//   .then(({ results }) =>
//     results.forEach((el) => {
//       console.log(el);
//     })
//   )
//   .catch(console.log);

// console.log("IT WORKED");
// console.log(result);
