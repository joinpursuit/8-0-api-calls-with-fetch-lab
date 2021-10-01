fetch("https://opentdb.com/api.php?amount=10")
.then((response)=> 
    response.json()
)
.then((data)=> {
    let triviaResults = data.results
    console.log(triviaResults)
    
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
    
        for(let q of triviaResults) {
            let article = document.createElement("article")
            article.setAttribute("class", "card")
            form.append(article)
        
            let h2 = document.createElement("h2")
            h2.textContent = q.category
            article.append(h2)
        
            let para1 = document.createElement("p")
            para1.textContent = q.question
            article.append(para1)
            
            let showAnsBtn = document.createElement("button")
            showAnsBtn.textContent = "Show Answer"
            article.append(showAnsBtn)
        
            let para2 = document.createElement("p")
            para2.textContent = q.correct_answer
            para2.setAttribute("class", "hidden")
            article.append(para2)
        }
    
    })
})
.catch((err) => {
    console.log(err)
})