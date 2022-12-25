const BASE_URL = 'https://opentdb.com/api.php?amount=10';
const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener("submit", (press) => {
    press.preventDefault();

    fetch(BASE_URL)
    .then((res) => {
        return res.json();
    })
    .then((displayQuestion) => {
        displayQuestion.results.forEach((q) => {
            let article =
            document.createElement("article");article.classList.add("card");

            let h2 = document.createElement("h2");
            h2.textContent = q.category;

            let p = document.createElement("p");
            p.textContent = q.question;

            let button = document.createElement("button");
            button.textContent = "Show Answer";

            let answer = document.createElement("p");
            answer.classList.add("hidden");

            article.append(h2,p,button, answer);

            button.addEventListener("click", () => {
                answer.textContent = q.correct_answer;
                answer.classList.toggle("hidden");

            })
            main.append(article);

        })
    })
    .catch((error) => {
        console.log(error);
    })
})