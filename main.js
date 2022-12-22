const button = document.querySelector('button');
const mainTag = document.querySelector('main');
const BASE_URL = `https://opentdb.com/api.php?amount=10`

// Click event listener, *note async*
button.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log('Button was clicked!');

// Clears previous questions by checking for ARTICLE TAG and removing it
    if (document.querySelector('article')) {
        let articles = document.querySelectorAll('article');
        for (let article of articles) {
            article.remove();
        }
    }
    // Begin GET request w/ FETCH & AWAITing asynchronously
    await fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const questions = data.results;

            for (let i = 0; i < questions.length; i++) {
                // Helpful buckets with values from DATA json
                let category = questions[i].category;
                let difficulty = questions[i].difficulty;
                let type = questions[i].type;
                let quest = questions[i].question;
                let correctAns = questions[i].correct_answer;
                let multiAns = questions[i].incorrect_answers;

                // ARTICLE creation
                let newArticle = document.createElement('article');
                newArticle.classList.add('card')
                mainTag.appendChild(newArticle);
                // Changes each articles/question border color based upon difficulty
                if (difficulty === 'medium') {
                    newArticle.style.borderColor = 'yellow';
                } else if (difficulty === 'hard') {
                    newArticle.style.borderColor = 'red';
                }
                // Fills the article with question content
                newArticle.innerHTML = `
            <h2>${category}</h2>
            <p>${quest}</p>
            <button>Show Answer</button>
            <p class ="hidden" id="answer">${correctAns}</p>`

            // Answer Button ONCLICK
            const answerButtLol = document.querySelectorAll(".card button");
            const hidden = document.querySelectorAll(".hidden");
            answerButtLol[i].addEventListener("click", () => {
                if (hidden[i].style.display === "block") {
                    hidden[i].setAttribute("style", "display: none");
                } else {
                    hidden[i].setAttribute("style", "display: block");
                }
            })

            // if (type === 'boolean') {
            //     document.createElement('p').before(answerButtLol)
                

            // } else if (type === 'multi') {

            // }
            // Failed attempt at answer button
            // let answerButtLol = document.querySelector('.card button');
            // let answer = document.getElementById('answer');
            // answerButtLol.addEventListener('click', (event) => {
            //     console.log(answer)
            //     answer.classList.toggle();
            // })
            }
        })
        .catch((error) => console.log(error))
})
