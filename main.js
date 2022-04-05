const BASE_URL = "https://opentdb.com/api.php?amount=";
const amount = 10;
const myURL = BASE_URL + amount;
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    getTriviaByAmount();
});

function getTriviaByAmount(amount) {
    fetch(`${myURL}`)
        .then((response) => response.json())
        .then((json) => {
            const data = json.results;
            createTrivia(data);
        })
        .catch((err) => {
            console.log(`Error message: ${err}`);
        });
}

function createTrivia(data) {
    const main = document.querySelector('main');
    for (let i = 0; i < data.length; i++) {
        const article =
            document.createElement('article');
        article.classList.add('card');
        const header =
            document.createElement('h2');
        header.textContent = `${data[i].category}`;
        const question =
            document.createElement('p');
        question.textContent = `${data[i].question}`;
        const showAnswerButton =
            document.createElement('button');
        showAnswerButton.textContent = 'Show Answer';
        const correctAnswer =
            document.createElement('p');
        correctAnswer.textContent = `${data[i].correct_answer}`;
        article.append(header, question, showAnswerButton, correctAnswer);
        main.append(article);
    }
    return main;
}