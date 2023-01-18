const API_URL = 'https://opentdb.com/api.php?amount=10'
const button = document.querySelector('button')
const main = document.querySelector('main')
const color = document.getElementById('card')

button.addEventListener('click', (event) => {
    event.preventDefault()

    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let info = data.results;
        for(let i = 0; i < info.length; i++){
            const newArticle = document.createElement('article')
            newArticle.setAttribute('class','card')
            newArticle.setAttribute('class', `answer${i}`)
            newArticle.innerHTML = `
            <h2>${info[i].category}</h2>
            <p>${info[i].question}</p>
            <button>Show Answer</button>
            <p class="hidden answer${i}">${info[i].correct_answer}</p>
            `;
            main.append(newArticle);

            const answerButton = document.querySelector(`.answer${i} button`);
            const answerP = document.querySelector(`p.answer${i}`);

            answerButton.addEventListener('click', () => {
                answerP.classList.toggle('hidden');
            })
        }
    })
    .catch((error) => console.log(error));
})