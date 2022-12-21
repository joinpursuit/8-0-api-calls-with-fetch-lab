const button = document.querySelector('button');
const mainTag = document.querySelector('main');

const BASE_URL = `https://opentdb.com/api.php?amount=10`

button.addEventListener('click', async (event) => {
    event.preventDefault();

    if (document.querySelector('article')) {
        let articles = document.querySelectorAll('article');
        for (let article of articles) {
            article.remove();
        }
    }
    console.log('Button was clicked!');
    await fetch(BASE_URL)

        .then((response) => response.json())
        
        .then((data) => {
            console.log(data);
            
            const questions = data.results;
            
            for (let question of questions) {
                // Helpful buckets with values from data JSON
                let category = question.category;
                let difficulty = question.difficulty;
                let quest = question.question;
                let correctAns = question.correct_answer;
                let newArticle = document.createElement('article');
                newArticle.classList.add('card')
                mainTag.appendChild(newArticle);
// Changes each articles/question border color based upon difficulty
                if (difficulty === 'medium') {
                    newArticle.style.borderColor = 'yellow';
                } else if (difficulty === 'hard') {
                    newArticle.style.borderColor = 'red';
                }

                newArticle.innerHTML = `
            <h2>${category}</h2>
            <p>${quest}</p>
            <button>Show Answer</button>
            <p class="hidden">${correctAns}</p>`
            }
        })
        .catch((error) => console.log(error))
})
