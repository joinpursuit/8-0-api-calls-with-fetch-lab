const buttonTag = document.querySelector('button');
const mainTag = document.querySelector('main');
const url = 'https://opentdb.com/api.php?amount=10'

buttonTag.addEventListener('click', async (event) => {
    event.preventDefault();
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let triviaQ = data.results;

        for (let i = 0; i < triviaQ.length; i++) {
            let category = triviaQ[i].category;
            let question = triviaQ[i].question;
            let correctAnswer = triviaQ[i].correct_answer;
            let divTag = document.createElement('div');
            mainTag.appendChild(divTag);
            divTag.innerHTML = 
            `<article class="card">
            <h2>${category}</h2>
            <p>${question}</p>
            <button>Show Answer</button>
            <p class="hidden">${correctAnswer}</p>
          </article>`

        }
    }) .catch((err) => {
     console.log(err);
    })
})




