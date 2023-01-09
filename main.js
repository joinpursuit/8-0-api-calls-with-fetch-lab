const BASE_URL = "https://opentdb.com/api.php?amount=10";

const main = document.querySelector("main");

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmitOnForm) 

function handleSubmitOnForm(event) {
    event.preventDefault();
    fetch(BASE_URL)
        .then((response) => response.json())
        .then(({results}) => {
            console.log(results)
            const deckOfCards = results;
            deckOfCards.forEach(card => {
                
                createCard(card)
                // article.innerHTML = `<h2>${card.category}</h2>
                // <p>${card.question}</p>
                // <button>Show Answer</button>
                // <p class="hidden">${card.correct_answer}</p>`
                // main.append(article);
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

function createCard(card) {
    const article = document.createElement("article");
    article.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = `${card.category}`

    const pQuestion = document.createElement("p");
    pQuestion.textContent = `${card.question}`

    const pAnswer = document.createElement("p");
    pAnswer.classList.add("hidden");
    pAnswer.textContent = `${card.correct_answer}`;

    const button = document.createElement("button");
    button.textContent = "Show Answer";
    button.addEventListener("click", () => {
        pAnswer.classList.toggle("hidden");
    });

    article.append(h2, pQuestion, button, pAnswer);
    main.append(article);
}