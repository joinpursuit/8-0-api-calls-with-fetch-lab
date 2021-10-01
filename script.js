let form = document.querySelector("form");
let main = document.querySelector("main");


form.addEventListener("submit", (e)=>{
    e.preventDefault()

    fetch("https://opentdb.com/api.php?amount=10")
.then(res=> res.json())
.then((data)=>{
    let trivaData = data.results
    for(let data of trivaData){
        let card = document.createElement("article");
        let h2 = document.createElement("h2");
        let question = document.createElement("p");
        let answer = document.createElement("p");
        let button = document.createElement("button")
        
        answer.setAttribute("class","hidden")
        card.setAttribute("class","card")

        h2.textContent = data.category
        question.textContent = data.question
        answer.textContent = data.correct_answer
        button.textContent = "show answer"

        card.append(h2, question, button, answer)
        main.append(card)

        button.addEventListener("click", ()=>{
            answer.removeAttribute("class");
        })
    }
    
}).catch((err)=>{
    console.log(err)
});
});
