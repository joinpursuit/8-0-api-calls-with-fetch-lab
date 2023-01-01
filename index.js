const BASE_URL = "https://opentdb.com/api.php?amount=10";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();  
  getTriviaInfo();
})


function getTriviaInfo(){
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
    fetch(BASE_URL+str)
    .then((response) => response.json())
    .then((result) => {
        const question = createCard(result);
        document.querySelector(".card").append(question);
        console.log(result);
    })
    .catch((error) => console.log(error));
}

function createCard(result){
    for (let i = 0; i < result.results.length; i ++) {
        const main = document.querySelector("main");
    
        const card = document.createElement("article");
        card.classList.add("card");
        main.append(card);
    
        const h2 = document.createElement("h2");
        h2.innerHTML = result.results[i].category;
        card.append(h2);

        const p = document.createElement("p");
        p.innerHTML = result.results[i].question;
        card.append(p);
    
        const button = document.createElement("button");
        button.innerHTML = "Show Answer"
        card.append(button);
    
        const p2 = document.createElement("p");
        p2.classList.add("hidden");
        p2.innerHTML = result.results[i].correct_answer;
        card.append(p2);
    
        button.addEventListener("click", () => {
            p2.classList.toggle("hidden");
        })    
        if (result.results[i].difficulty === "easy") {
            card.style.borderColor = "green"; 
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