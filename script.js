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
    
                const h2 = document.createElement('h2')
                h2.textContent = q.category
                article.append(h2);

                const p = document.createElement('p')
                p.textContent = q.question
                article.append(p);

                const button = document.createElement('button')
                button.textContent = "Show Answer"
                article.append(button);

                const p2 = document.createElement('p')
                p2.textContent = q.correct_answer
                p2.classList.toggle('hidden')
                article.append(p2)
                p2.addEventListener("click", () => {
                    p2.classList.toggle('hidden');
                })

        })
    })
        .catch((err) => console.log(err));
})