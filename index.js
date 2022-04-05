const BASE_URL = 'https://opentdb.com/api.php?amount=10'

function getRandomQuestions(BASE_URL) {
    fetch(BASE_URL)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            createQuestions(json);
        })
}

function createQuestions(json) {
    for (let i = 0; i < json["results"].length; i++) {
        let obj = json["results"][i];
        const article = document.createElement('article');
        const header = document.createElement('h2');
        const button = document.createElement('button');
        const pTag = document.createElement('p');
        const secondPTag = document.createElement('p');
        article.classList.add('card');
        header.textContent = `${obj.category}`;
        pTag.textContent = `${obj.question}`;
        button.textContent = "Show Answer";
        secondPTag.classList.add('hidden');
        secondPTag.textContent = `${obj.correct_answer}`;
        article.append(header, pTag, button, secondPTag);
        document.querySelector('main').append(article);


        article.addEventListener("click", (event) => {
            secondPTag.classList.remove("hidden");
        });

    }
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    getRandomQuestions(BASE_URL);
    form.reset();
});



