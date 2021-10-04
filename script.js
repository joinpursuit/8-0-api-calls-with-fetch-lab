let URL = 
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"

let categories = "https://opentdb.com/api_category.php"

let main = document.querySelector("main")
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    fetch(URL)
    .then((response)=> {
        return response.json()
    }).then((data) => {
        data.results.forEach((q) => {
            let card = document.createElement("article")
                card.setAttribute("class", "card")

            let category = document.createElement("h2")
            category.textContent = q.category

            let question = document.createElement("p")
            question.textContent = q.question

            let answer = document.createElement("p")
                answer.setAttribute("class", "hidden")
                answer.textContent = q.correct_answer

            let button = document.createElement("button")
            button.textContent = "Show Answer"
            
            card.append(category, question, button, answer)
            main.append(card)

    button.addEventListener("click", (event) => {
        answer.removeAttribute("class")
    })
        })
    })
})


// working on category dropdown

// fetch(categories)
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         data.trivia_categories.forEach((name) => {
//             let option = document.createElement("option")
//             let select = document.querySelector("select")

//             option.textContent = name
//             option.value = name

//             select.append(option)
//         })
//     })