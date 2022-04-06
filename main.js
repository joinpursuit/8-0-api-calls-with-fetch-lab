const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple';

const form = document.querySelector('form');

form.addEventListener('click', (event) => {
    event.preventDefault();
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => createArticle(data))
})

function createArticle(data){
    data.results.forEach(question => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const button = document.createElement('button');

        article.classList.add('card');
        p2.classList.add('hidden');

        h2.textContent = question.category;
        p1.textContent = question.question;
        button.textContent = 'SHOW ANSWER';
        p2.textContent = question.correct_answer;

        article.append(h2, p1, button, p2);

        const main = document.querySelector('main');
        main.append(article);

        button.addEventListener('click', () => {
            p2.style.display = 'block';
        })
    })
}

