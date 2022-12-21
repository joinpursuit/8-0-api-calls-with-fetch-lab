const BASE_URL = "https://opentdb.com/api.php?amount=10";

const newQ = document.querySelector("section button");
newQ.addEventListener("click", async(event) => {
    //to prevent the page to reload each time by default.
	event.preventDefault();

    //to erase and load new questions everytime it's clicked.
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
            //getting each value and assigning in the variables.
            let categories = result[i].category;
            let questions = result[i].question;
            let difficulties = result[i].difficulty;
            let correct = result[i].correct_answer;

            //to create a div tag on each loop and insert the elements.
            //Then add it to the main tag.
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

            //change the color of difficulties level accordingly.
            let header = document.querySelectorAll("h3");
            if (header[i].textContent === "easy") {
                header[i].setAttribute("style", "color: green");
            } else if (header[i].textContent === "medium") {
                header[i].setAttribute("style", "color: orange");
            } else if (header[i].textContent === "hard") {
                header[i].setAttribute("style", "color: red");
            } 

            //click to display the answer, click again to hide the answer.
            const showAnswer = document.querySelectorAll(".card button");
            const hidden = document.querySelectorAll(".hidden");
            showAnswer[i].addEventListener("click", () => {
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