const BASE_URL = "https://opentdb.com/api.php?amount=10";

const newQ = document.querySelector("section button");
newQ.addEventListener("click", async(event) => {
    //to prevent the page to reload each time by default.
	event.preventDefault();

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
            let correct = result[i].correct_answer;

            //creating a div tag on each loop and inserting the tags,
            //then appending to the main tag.
            const main = document.querySelector("main");
            const div = document.createElement("div");
            div.innerHTML = `
            <article class="card">
                <h2>${categories}</h2>
                <p>${questions}</p>
                <button>Show Answer</button>
                <p class="hidden">${correct}</p>
            </article>`;
            main.appendChild(div);
        }
    })
    .catch((error) => {
        console.log(error);
    })
})