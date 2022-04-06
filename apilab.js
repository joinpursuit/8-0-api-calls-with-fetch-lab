// const BASE_URL = 'https://opentdb.com/api.php?amount=';
// const amount = 10;

// const form = document.querySelector('form');
// form.addEventListener('sumbit' , (event) => {
//     event.preventDefault();
  
//   getTrivia(amount)
//   fetch(`${BASE_URL} + ${amount}`)
//   .then((response) => response.json) {
//       .json
//   }
// })


const BASE_URL = "https://opentdb.com/api.php?amount=";
const amount = 10;
const myURL = BASE_URL + amount;//https://opentdb.com/api.php?amount=10

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    getTriviaByAmount();
});

function getTriviaByAmount() {
    fetch(myURL)
        .then((response) => response.json())
        .then((json) => {
            //console.log(json) -- "Object" -> see when you "Inspect" website.  Response and Results.
            const data = json.results;
            //console.log(json.results) -- see in "Inspect" this is where data is located -- various key value pairs which you have to loop through (see line 42)
            createTrivia(data);
        })
        .catch((err) => {
            console.log(`Error message: ${err}`);
        });
};

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
        showAnswerButton.addEventListener('click', () => {
            correctAnswer.classList.toggle('hidden');
        });
        const correctAnswer =
            document.createElement('p');
        correctAnswer.textContent = `${data[i].correct_answer}`;
        correctAnswer.classList.add('hidden');
        article.append(header, question, showAnswerButton, correctAnswer);
        main.append(article);
    };
    return main;
};