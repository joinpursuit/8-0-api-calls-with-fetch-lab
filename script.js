const removeJunk = (str) => {
    const trash = {
        "&quot;": '"',
        "&#039;": `'`,
        "&eacute;": "é",
    };

    const regex = /(&quot;|&#039;|&eacute;)/g;
    return str.replace(regex, (junk) => {
        return trash[junk];
    });
}

fetch(
    "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
  )
    .then((response) => response.json())
    .then(function (trivia_questions) {
	let questions = trivia_questions.results;
      for (let quest of questions) {
        const art = document.createElement("article");
        art.setAttribute("class", "card");
        art.innerHTML = 
        `<h2>${quest.category}</h2>
          <p>${quest.question}</p>
          <button>Show Answer</button>
          <p class = "hidden">${quest.correct_answer}</p>`;
        art.querySelector("button").addEventListener("click", (evt) => {
          evt.target.parentNode.querySelector(".hidden").style.display = "block";
        });
        document.querySelector("main").append(art);
      }
});