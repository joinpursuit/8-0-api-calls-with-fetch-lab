const BASE_URL = "https://opentdb.com/api.php?amount=10"

// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((answer) => {
        let questions = answer.results;
        for(const quest of questions) {
            const newCard = document.createElement("article");
            newCard.setAttribute('class', 'card');
            newCard.innerHTML = `<h2>${quest.category}</h2>
                 <p>${quest.question}</p>
                <button>Show Answer</button>
                <p class="hidden">${quest.correct_answer}</p>`;
            newCard.querySelector('button').addEventListener('click', (event) => {
                event.target.parentNode.querySelector('.hidden').style.display = 'block';
        })
    document.querySelector('main').append(newCard);
        }
    })


