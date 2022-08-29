
for(let i = 0; i <10; i++){
const main = document.querySelector("main")
const article = document.createElement("article")
article.setAttribute("class", "card")
const h2 = document.createElement("h2")
const paragraph = document.createElement("p")
const paragraph2 = document.createElement("p")
const button = document.createElement("button")
button.setAttribute("type", "submit")
button.textContent = `Show Answer`
article.append(h2, paragraph, button, paragraph2)
main.append(article)




const form = document.querySelector("form")

let category = 0

form.addEventListener("submit", (event) => {
    event.preventDefault()
    fetch(`https://opentdb.com/api.php?amount=10&category=${category}`)
    .then((response) => response.json())
    .then((resJson) => {
        const results = resJson.results
        results.forEach((questions) => {
            paragraph.textContent = questions.question
            h2.textContent = questions.category

            article.addEventListener("click", () => {
                paragraph2.classList.toggle(`hidden`)
                       if(paragraph2.classList.contains("hidden")){
                         paragraph2.innerHTML = ""
                       }
                      else {
                         paragraph2.textContent = questions.correct_answer
                       }
                       });
            
           });
    })
    .catch((error) => console.log(error))
})

}

