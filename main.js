const button = document.querySelector('button');
const mainTag = document.querySelector('main');

const BASE_URL = `https://opentdb.com/api.php?amount=10`

button.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('Button was clicked');
    await fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let mainTag = document.querySelector('main');
            for (let result of data.results) {
                let categories = result.category;
                let difficulty = result.difficulty;
                let quest = result.question;
                let correctAnswer = result.correct_answer;
                let divTag = document.createElement('div');
                mainTag.appendChild(divTag);
                divTag.innerHTML = `
            <article class ="card">
            <h2>${categories}</h2>
            <p>${quest}</p>
            <button>Show Answer</button>
            <p class="hidden">${correctAnswer}</p>
            </article>`
            }
        })
        .catch((error) => console.log(error))
})
