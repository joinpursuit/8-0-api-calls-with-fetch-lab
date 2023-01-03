const BASE_URL = "https://opentdb.com/api_config.php"


const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    celectCard()
    getTriviaQuestion()

})

function selectCard(result) {
    console.log(result)
    const card = document.createElement("artcle")
    card.classList.add('card');
    const h2 = document.createElement('h2');
    h2.innerText = h2.category
    const p = document.createElement('p');
    p.innerText = result.question
    const p2 =  document.createElement('p');
    p2.classList.add("hidden");
    p2.innerText = result.correct_answer;
    document.querySelector("main").append(card)
    card.append(h2)
    card.append(p)
    card.append(button)
    card.append(p2)

    button.addEventListener("click", (event)=> {

    })



} 

function getTriviaQuestion() {
    fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => {
        const question = selectCard(result)
        document.querySelector(".card").append(question)

    })
    .catch((error) =>  console.log(error))
}
