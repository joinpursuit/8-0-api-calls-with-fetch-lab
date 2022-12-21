
const questionButton = document.querySelector("button")
const URL_KEY = "/api.php?amount=10"
const BASE_URL = "https://opentdb.com"


questionButton.addEventListener('click', (event) => {
  event.preventDefault()
  

  fetch(`${BASE_URL}${URL_KEY}`)
  .then((res) => res.json())
    .then((response) => {
    //  console.log(response.results)

        let questions = response.results
        for (let i = 0; i < questions.length; i++) {
            let questionText = questions[i].question
            let questionAnswer = questions[i].correct_answer
            let ul = document.querySelector("ul")
            //ul.innerHTML += `<li class="card">${questionText}</li>`
            ul.innerHTML += `<article class="card"> <h2>Category</h2> <p>${questionText}</p> <button onclick="clickFun(this)">Show Answer</button> <p id="answers" class="hidden">${questionAnswer}</p> </article> `
        }
     
    }).catch((error) => console.log(error))
})

function clickFun() {
    let answers = document.getElementById("answers")
    answers.setAttribute("class", "card")
    console.log(this)
}