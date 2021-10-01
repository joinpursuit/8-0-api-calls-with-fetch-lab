const BASE_URL = "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"

// Fetch API from URL
fetch(BASE_URL)
.then((api) => api.json())
//Take the results from API information.
.then((response) => {
    let questions = response.results

// loop through the questions and dynamically post them to the DOM.
    for (const quest of questions) {
    const newCard = document.createElement('article');
    newCard.setAttribute('class', "card")
    newCard.innerHTML = `<h2>${quest.category}</h2>
    <p>${quest.question}</p>
    <button>Show Answer</button>
    <p class="hidden">${quest.correct_answer}</p>
    </article>`
    newCard.querySelector('button').addEventListener('click', (event) => {
    event.target.parentElement.querySelector('.hidden').style.display = "block"
    })
    document.querySelector('main').append(newCard);
        }
    });


