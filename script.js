const TRIVIA_URL = "https://opentdb.com/api.php?amount=10"

const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`${TRIVIA_URL}`)
        .then((res) => res.json())
        .then((res2) => {
            // console.log(res2.results)
            res2.results.forEach((q) => {
                
                const article = document.createElement('article');
                article.classList.add("card");
                main.append(article);
    
                const categories = document.createElement('h2')
                categories.textContent = q.category
                article.append(categories);

                const questions = document.createElement('p')
                questions.textContent = q.question
                article.append(questions);

                const button = document.createElement('button')
                button.textContent = "Show Answer"
                article.append(button);

                const answers = document.createElement('p')
                answers.textContent = q.correct_answer
                answers.classList.toggle('hidden')
                article.append(answers)
                answers.addEventListener("click", () => {
                    answers.classList.toggle('hidden');
                })
        })
    })
        .catch((err) => console.log(err));
})