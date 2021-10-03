document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let url = "https://opentdb.com/api.php?amount=10";
  if (document.querySelector("select").value !== "any") {
    url += `&category=${document.querySelector("select").value}`;
  }

  let Allcards = document.querySelectorAll("article");
  if (Allcards.length > 0) {
    Allcards.forEach((items) => {
      items.remove();
    });
  }

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let tenCards = data.results;
      console.log(tenCards);
      let main = document.querySelector("main");

      for (card of tenCards) {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let button = document.createElement("button");

        article.classList.add("card");

        h2.textContent = `${card.category}`;
        p.textContent = `${removeJunk(card.question)}`;
        if (card.difficulty === "easy") {
          p.style.border = "5px dotted green";
        } else if (card.difficulty === "medium") {
          p.style.border = "5px dotted yellow";
        } else {
          p.style.border = "5px dotted red";
        }

        button.textContent = "Show Answer";
        button.type = "button";
        button.classList.add("showB");

        let allAnswers = [];
        allAnswers.push(`CORRECT: ${card["correct_answer"]}`);
        if (card.type === "multiple") {
          card["incorrect_answers"].forEach((item) => {
            allAnswers.push(item);
          });
        }
        main.append(article);
        article.append(h2, p, button);

        allAnswers.forEach((item) => {
          let hiddenP = document.createElement("p");
          hiddenP.textContent = item;
          hiddenP.style.display = "none";
          hiddenP.classList.add("hidden");
          article.append(hiddenP);
        });
      }

      let buttons = document.querySelectorAll(".card button");

      for (button of buttons) {
        button.addEventListener("click", (event) => {
          console.log(event.target.parentNode.childNodes);
          let sibs = event.target.parentNode.childNodes;
          sibs.forEach((item) => {
            if (item.style.display === "none") {
              item.style.display = "inherit";
              item.textContent = removeJunk(item.textContent);
            }
            item.textContent.includes("CORRECT")
              ? (item.style.border = "5px solid #d4af37")
              : null;
          });
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

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
};
