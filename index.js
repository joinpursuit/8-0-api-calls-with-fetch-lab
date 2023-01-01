const base_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    getTriviaQuestion();
})

function getTriviaQuestion() {
    let str ="";
    if (difficulty.selectedIndex === 0){
        str="&difficulty=easy";
    }
    if (difficulty.selectedIndex === 1){
        str="&difficulty=medium";
    }
    if (difficulty.selectedIndex === 2){
        str="&difficulty=hard";
    }
    fetch(base_URL+str)
        .then((response) => response.json())
        .then((result) => {
            const  trivia = createCard(result);
            document.querySelector(".card").append(trivia);
        })
        .catch((error) => console.log(error));
}


function createCard(result){
 for (let i = 0; i < result.results.length; i++){
    const card = document.createElement("article");
    card.classList.add("card");
    const h2 = document.createElement("h2");

    let difficulty = document.querySelector("#difficulty");
    const button = document.createElement("button");

    h2.innerHTML = result.results[i].category;
    const p = document.createElement("p");
    p.innerHTML = result.results[i].question;
    const p2 = document.createElement("p");

    button.innerHTML = "Show Answer";
    p2.classList.add("hidden");
    p2.innerHTML = result.results[i].correct_answer;

    document.querySelector("main").append(card)
    card.append(h2);
    card.append(p);
    card.append(button);
    card.append(p2);

    button.addEventListener("click", (event) => {
        p2.classList.toggle("hidden");
    })
       
        if (result.results[i].difficulty === "easy") {
            card.style.borderColor = "grey"; 
        }

        if (result.results[i].difficulty === "medium") {
            card.style.borderColor = "yellow"; 
        }

        if (result.results[i].difficulty === "hard") {
            card.style.borderColor = "red";  
        }
}
return card;
}




