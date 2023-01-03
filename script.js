const button = document.querySelector("button")
button.addEventListener("click", (event)=> {
    event.preventDefault()
    fetch("https://opentdb.com/api.php?amount=10")
    .then((response)=> {
        response.json()
            .then((questions)=> {
                console.log(questions)
                const canvas = document.querySelector("main")
                for (let i = 0; i < questions.results.length; i++) {
                    const oneCard = document.createElement("article")
                    oneCard.setAttribute("class", "card")
                    const h2 = document.createElement("h2")
                    h2.textContent = `CATEGORY: ${questions.results[i].category}`
                    oneCard.append(h2)
                    const p = document.createElement("p")
                    p.textContent = `Question: ${questions.results[i].question}`
                    oneCard.append(p)
                    const bottonAnswer = document.createElement("button")
                    bottonAnswer.textContent = "Show Answer"
                    oneCard.append(bottonAnswer)
                    const pinv = document.createElement("p")
                    pinv.setAttribute("class","hidden")
                    pinv.textContent = `Correct Answer: ${questions.results[i].correct_answer}`
                    oneCard.append(pinv)
                    if (questions.results[i].difficulty === "medium") {
                        oneCard.style.borderColor = "yellow" 
                    }
                    if (questions.results[i].difficulty === "hard") {
                        oneCard.style.borderColor = "red" 
                    }
                    canvas.append(oneCard)
                }
                // bottonAnswer.addEventListener("click",()=> {
                //     const invTovi = document.querySelector(".hidden")
                //     console.log(invTovi)
                // })
            })
            .catch((error) => {
                console.log(questions)
                console.log("we have an error")
            } )
    })
})







