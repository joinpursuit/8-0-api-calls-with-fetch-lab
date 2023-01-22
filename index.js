const BASE_URL = "https://opentdb.com/api.php?amount=10";

const selectedQuestion = document.querySelector("section button");
selectedQuestion.addEventListener("click", async (event) => {
	event.preventDefault();
    if (document.querySelector("div")) {
        let divs = document.querySelectorAll("div");
        for (let div of divs) {
            div.remove();
        }
    }

    await fetch(
        `${BASE_URL}`
    )
    .then((resp) => resp.json())
    .then((data) => {
        let result = data.results;

        for (let i = 0; i < result.length; i++) {
            let correct = result[i].correct_answer;
            let categories = result[i].category;
            let difficulties = result[i].difficulty;
            let questions = result[i].question;

            const main = document.querySelector("main");
            const div = document.createElement("div");
            div.innerHTML = `
            <article class="card">
                <h2>${categories}</h2>
                <h3>${difficulties}</h3>
                <p>${questions}</p>
                <button>Show Answer</button>
                <p class="hidden">${correct}</p>
            </article>`;
            main.appendChild(div);

            const displayAnswer = document.querySelectorAll(".card button");
            const hidden = document.querySelectorAll(".hidden");
            displayAnswer[i].addEventListener("click", () => {
                if (hidden[i].style.display === "block") {
                    hidden[i].setAttribute("style", "display: none");
                } else {
                    hidden[i].setAttribute("style", "display: block");
                }
            })
        }
    })
    .catch((error) => {
        console.log(error);
    })
})