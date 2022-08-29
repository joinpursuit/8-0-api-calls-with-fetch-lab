const TRIVIA_URL = "https://opentdb.com/api.php?amount=10"

const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(`${TRIVIA_URL}`)
        .then((res) => res.json())
        .then((res) => {
            res.results.forEach((obj) => {
                
                const article = document.createElement('article');

                article.classList.add("card");
                
                main.append(article);
    
        })
    })
        .catch((err) => console.log(err))
})