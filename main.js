


const button = document.querySelector("button")
button.addEventListener("click", (event) => {
event.preventDefault()


    fetch("https://opentdb.com/api.php?amount=10").then((response) => response.json()).then((json) => {
        const results = json.results
       for (let result of results){
     
         const article = document.createElement("article")
         article.classList.add("card")
         const h2 = document.createElement("h2")
         const p = document.createElement("p")
         const newButton = document.createElement("button")
         const p2 = document.createElement("p")
         p2.classList.add("hidden")
     
         h2.innerHTML = result.category
         p.innerHTML = result.question
         newButton.textContent = "Show Answer"
         p2.innerHTML = result.correct_answer

         newButton.addEventListener("click", (event) => {
            p2.setAttribute("class", "")
         })
         
         article.append(h2, p, newButton, p2)
         const centered = document.querySelector("main")
         centered.append(article)
       }
     })
})