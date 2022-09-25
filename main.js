fetch("https://opentdb.com/api.php?amount=10")
  .then((data) => {
    return data.json();
  })
  .then(renderTriviaQs)
  .catch((err) => {
    console.log(err);
  });

function renderTriviaQs(trivia) {
  const triviaArr = trivia["results"];
  console.log(triviaArr);

  const form = document.querySelector("form");
  const selector = document.createElement("select");
  selector.classList.add("difficulty-selector");
  const defaultSelectorOption = document.createElement("option");
  defaultSelectorOption.innerText = "--- Select a Question Difficulty ---";
  defaultSelectorOption.setAttribute("value", "");
  selector.append(defaultSelectorOption);
  form.append(selector);

  const selector2 = document.createElement("select");
  selector2.classList.add("type-selector");
  const defaultSelectorOption2 = document.createElement("option");
  defaultSelectorOption2.innerText = "--- Select a Question Category ---";
  defaultSelectorOption2.setAttribute("value", "");
  selector2.append(defaultSelectorOption2);
  form.append(selector2);

  const selectorOptionsDiff = {};
  const selectorOptionsType = {};

  // Taken from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  // ------------------------------------------------------------

  for (let triviaQ of triviaArr) {
    const cards = document.createElement("article");
    cards.classList.add("card");
    cards.classList.add(triviaQ.difficulty);
    cards.classList.add(
      triviaQ.category
        .toLowerCase()
        .replace(/[^A-z\-\s]/g, "")
        .replace(/\s/g, "-")
    );

    // Replace function-------------------------------
    function replaceChars(inputStr) {
      inputStr = inputStr.replace(/&quot;/g, '"');
      inputStr = inputStr.replace(/&#039;/g, "'");
      inputStr = inputStr.replace(/&rsquo;/g, "'");
      inputStr = inputStr.replace(/&eacute;/g, "é");
      return inputStr;
    }
    // -----------------------------------------------

    // Appends question difficulties to drop-down menu
    selectorOptionsDiff[triviaQ.difficulty] = selectorOptionsDiff[
      triviaQ.difficulty
    ]
      ? ++selectorOptionsDiff[triviaQ.difficulty]
      : 1;
    // -----------------------------------------------

    selectorOptionsType[triviaQ.category] = selectorOptionsType[
      triviaQ.category
    ]
      ? ++selectorOptionsType[triviaQ.category]
      : 1;

    // Creation of each element in the card and sets the text content for each.
    const cardsH2 = document.createElement("h2");
    cardsH2.textContent = triviaQ.category;

    const cardsQuestionP = document.createElement("p");
    cardsQuestionP.textContent = replaceChars(triviaQ.question);

    const cardsButton = document.createElement("button");
    cardsButton.innerText = "Show Answer";

    const cardsAnswerP = document.createElement("p");
    cardsAnswerP.classList.add("hidden");
    cardsAnswerP.textContent = replaceChars(triviaQ.correct_answer);

    const cardsDifficulty = document.createElement("p");
    cardsDifficulty.textContent = `Difficulty: ${triviaQ.difficulty.toUpperCase()}`;
    // -----------------------------------------------

    // Adds functionality to the answer button on each card; shows and hides the answer on click
    cardsButton.addEventListener("click", (event) => {
      if (cardsAnswerP.classList.contains("hidden")) {
        cardsAnswerP.classList.remove("hidden");
        cardsButton.innerText = "Hide Answer";

        if (document.querySelector('input[name="multi-choice"]:checked')) {
          const rightAnswer = document.querySelector(
            "label:has(input:checked)"
          );
          if (
            document.querySelector('input[name="multi-choice"]:checked')
              .value === cardsAnswerP.textContent
          ) {
            rightAnswer.style = "background:#63FF00";
            // document.querySelector('input[name="multi-choice"]:checked').style = "background:#63FF00;color:white";
          } else {
            rightAnswer.style = "background:#FF3838";
          }
        }

        if (document.querySelector('input[name="multi-choice"]:checked')) {
          const rightAnswer = document.querySelector(
            "label:has(input:checked)"
          );
          if (
            document.querySelector('input[name="multi-choice"]:checked')
              .value === cardsAnswerP.textContent
          ) {
            rightAnswer.style = "background:#63FF00";
            // document.querySelector('input[name="multi-choice"]:checked').style = "background:#63FF00;color:white";
          } else {
            rightAnswer.style = "background:#FF3838";
          }
        }
      } else {
        cardsAnswerP.classList.add("hidden");
        cardsButton.innerText = "Show Answer";
      }
      //   if (document.querySelector('input[name="multi-choice"]:checked').value === cardsAnswerP.textContent) {
      //   }
      console.log(
        document.querySelector('input[name="multi-choice"]:checked').value,
        cardsAnswerP.textContent
      );
    });
    // -----------------------------------------------

    // Append all elements into the article element---
    cards.append(
      cardsH2,
      cardsQuestionP,
      cardsButton,
      cardsAnswerP,
      cardsDifficulty
    );
    // -----------------------------------------------

    if (triviaQ.type === "boolean") {
      const boolDiv = document.createElement("div");
      const questionChoices = [];
      questionChoices.push(triviaQ.incorrect_answers, triviaQ.correct_answer);

      shuffleArray(questionChoices);
      for (let item of questionChoices) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        label.textContent = item;
        input.setAttribute("type", "radio");
        input.setAttribute("name", "multi-choice");
        input.value = item;

        boolDiv.append(label);
        label.prepend(input);
        boolDiv.append(document.createElement("br"));
        cardsButton.before(boolDiv);
      }
    }
    if (triviaQ.type === "multiple") {
      const multiDiv = document.createElement("div");
      const questionChoices = [];
      questionChoices.push(
        ...triviaQ.incorrect_answers,
        triviaQ.correct_answer
      );

      shuffleArray(questionChoices);
      for (let item of questionChoices) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        label.textContent = item;
        input.setAttribute("type", "radio");
        input.setAttribute("name", "multi-choice");
        input.value = item;

        multiDiv.append(label);
        label.prepend(input);
        multiDiv.append(document.createElement("br"));
        cardsButton.before(multiDiv);
      }
    }

    const main = document.querySelector("main.centered");
    main.prepend(cards);
  }

  // Populates the dropdown menu with difficulties taken from questions.
  for (let difficultKey in selectorOptionsDiff) {
    const difficultyOption = document.createElement("option");
    difficultyOption.innerText = `${difficultKey}: (${selectorOptionsDiff[difficultKey]})`;
    difficultyOption.setAttribute("value", difficultKey);

    selector.append(difficultyOption);
  }
  // -----------------------------------------------

  for (let typeKey in selectorOptionsType) {
    const typeOption = document.createElement("option");
    typeOption.innerText = `${typeKey}: (${selectorOptionsType[typeKey]})`;
    typeOption.setAttribute(
      "value",
      typeKey
        .toLowerCase()
        .replace(/[^A-z\-\s]/g, "")
        .replace(/\s/g, "-")
    );

    selector2.append(typeOption);
  }

  // Creates event for dropdown menu; displays questions whose difficutly matches the dropdown option
  selector.addEventListener("change", (event) => {
    document.querySelectorAll(".card").forEach((item) => {
      item.style.display = "none";
    });

    const target = event.target.value || "card";
    console.log(target);

    document.querySelectorAll(`.${target}`).forEach((item) => {
      item.style.display = "block";
    });
  });
  // -----------------------------------------------

  selector2.addEventListener("change", (event) => {
    document.querySelectorAll(".card").forEach((item) => {
      item.style.display = "none";
    });

    const target2 = event.target.value || "card";
    console.log(target2);

    document.querySelectorAll(`.${target2}`).forEach((item) => {
      item.style.display = "block";
    });
  });
}
