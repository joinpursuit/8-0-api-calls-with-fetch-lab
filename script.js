const main = document.querySelector("main")
const form = document.querySelector("form")
const section = document.querySelector("section")


fetch("https://opentdb.com/api.php?amount=10")
.then((response)=> 
    response.json()
)
.then((data)=> {
    let triviaResults = data.results
    
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        
        for(let q of triviaResults) {
            console.log(q)
            let article = document.createElement("article")
            article.setAttribute("class", "card")
            form.append(article)
        
            let h2 = document.createElement("h2")
            h2.textContent = q.category
            article.append(h2)
        
            let para1 = document.createElement("p")
            para1.innerHTML = q.question
            // console.log(q.question)
            article.append(para1)
            
            let showAnsBtn = document.createElement("button")
            showAnsBtn.textContent = "Show Answer"
            article.append(showAnsBtn)

            let para2 = document.createElement("p")
            para2.textContent = q.correct_answer
            para2.setAttribute("class", "hidden")
            article.append(para2)

            main.append(article)

            if(q.difficulty === "hard") {
                article.setAttribute("style", "border: solid gold")
            } else if (q.difficulty === "medium") {
                article.setAttribute("style", "border: solid blue")
            } else {
                article.setAttribute("style", "border: solid black")
            }

            showAnsBtn.addEventListener("click", (e) => {
                para2.classList.remove("hidden")
                para2.innerHTML = q.correct_answer
            })
        }
    
    })
})
.catch((err) => {
    console.log(err)
})