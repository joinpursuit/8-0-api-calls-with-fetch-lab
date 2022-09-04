const button = document.querySelector("button")
const form = document.querySelector("form")
const BASE_URL = "https://opentdb.com/api.php?amount=10"
const main = document.querySelector("main")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((resJson) => {
        console.log(resJson)
        const results = resJson.results
        results.forEach((result) => {
            console.log(result)
            const quest = document.createElement("article")
            quest.className = "card"
            const h2 = document.createElement("h2")
            const p = document.createElement("p")
            const p2 = document.createElement("p")
            const button2 = document.createElement("button")
            h2.innerHTML = result.category
            p.innerHTML = result.question
            p2.innerHTML = result.correct_answer
            p2.className = "hidden"
            button2.innerHTML = 'Show Answer'
            button2.addEventListener("click", (event) => {
                event.preventDefault()
                p2.classList.remove('hidden')
            })
            quest.append(h2)
            quest.append(p)
            quest.append(p2)
            quest.append(button2)
            main.append(quest)
        })
    })
    .catch((err) => console.log(err))
})