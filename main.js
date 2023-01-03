const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmitOnForm) 

function handleSubmitOnForm(event) {
    event.preventDefault();
    fetch(BASE_URL)
        .then((response) => response.json())
        .then(({results}) => {
            const deckOfCards = results;
            deckOfCards.forEach(card => {
                const main = document.querySelector("main");
                const article = document.createElement("article");
                article.classList.add("card");
                article.innerHTML = `<h2>${card.category}</h2>
                <p>${card.question}</p>
                <button>Show Answer</button>
                <p class="hidden">${card.correct_answer}</p>`
                main.append(article);
            });
        })

}