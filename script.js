const form = document.querySelector("section.centered form");
const container = document.querySelector("main.centered");

form.addEventListener("submit", handleFormSubmit);
container.addEventListener("click", showAnswer);


function handleFormSubmit(e) {
    e.preventDefault();
    getData();
  }

  function showAnswer(e) {
    const btn = e?.target?.closest("button");
    if (!btn) return;
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  }

  function getData() {
    const url = `https://opentdb.com/api.php?amount=10`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => displayData(data.results));
  }

  function displayData(data) {
    let markup = "";
    for (const item of data) markup += createCard(item);

    container.insertAdjacentHTML("beforeend", markup);
  }


  function createCard(card) {
    return `
      <article class="card">
        <h2>${card.category}</h2>
        <p>${card.question}</p>
        <button>Show Answer</button>
        <p class="hidden">${card.correct_answer}</p>
      </article>`;
  }