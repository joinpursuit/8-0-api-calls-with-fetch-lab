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

/* R.i.P old code*/

// const optionsMenuSelect = () => {
//     const optionsSelect = document.createElement("select");
//     optionsDefault = document.createElement("option");
//     optionsDefault.textContent = "All";
//     optionsDefault.value = "All";
//     optionsSelect.append(optionsDefault);

//     fetch("https://opentdb.com/api_config.php")
//         .then((response) => response.json())
//         .then(({ trivia_categories }) =>
//             trivia_categories.forEach(({ name }) => {
//                 const select = document.createElement("option");
//                 select.value = name;
//                 select.textContent = name;
//                 optionsSelect.append(select);
//             })
//         ).catch((err) => {
//             console.log(err);
//         },
//     document.querySelector("form").append(optionsSelect),)
// };

// function urlByCategory(category) {
//     const url = "https://opentdb.com/api.php?amount=10";
//     fetch("https://opentdb.com/api_config.php")
//         .then((response) => response.json())
//         .then(({ trivia_categories }) =>
//             trivia_categories
//                 .reduce((res, catVal) => {
//                     res[catVal.name] = catVal.id;
//                     return res;
//                 })
//                 .then((triviaObj) => {
//                     fetch(
//                         triviaObj[category] ? url + "&category=" + triviaObj[category] : url
//                     ).then((response) =>
//                         response.json().then(({ result }) => {
//                             result.forEach(
//                                 ({ category, question, difficulty, correct_answer }) => {
//                                     const art = document.createElement("article");
//                                     art.setAttribute("class", "card");
//                                     difficulty === "easy"
//                                         ? (art.style.border = "6px solid lime")
//                                         : difficulty === "medium"
//                                             ? (art.style.border = "6px solid orange")
//                                             : (art.style.border = "6px solid red");
//                                     const h2 = document.createElement("h2");
//                                     const pgh = document.createElement("p");
//                                     const hiddenANS = document.createElement("p");
//                                     const ansBTN = document.createElement("button");
//                                     h2.textContent = category;
//                                     pgh.textContent = question;
//                                     ansBTN.textContent = "Show Answer";
//                                     hiddenANS.textContent = correct_answer;
//                                     hiddenANS.setAttribute("class", "hidden");
//                                     art.append(h2, pgh, ansBTN, hiddenANS);
//                                     document.querySelector("main").append(art);
//                                     ansBTN.addEventListener("click", () => {
//                                         hiddenANS.classList.toggle("hidden");
//                                     });
//                                 }
//                             );
//                         })
//                     );
//                 })
//         ).catch((err) => {
//             console.log(err);
//         },
// )};

// const newQBTN = document.querySelector("button");
// newQBTN.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     const category = document.querySelector("select").value;
//     if (document.querySelector("main").children.length !== 0) {
//         document.querySelectorAll("main article").forEach((elem) => {
//             elem.remove();
//         });
//     }
//     urlByCategory(category);
// });