
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
     event.preventDefault()
     triviaQuesitons()
 })


 const triviaQuesitons = () => {

fetch('https://opentdb.com/api.php?amount=10')
.then((response) => response.json())
.then((data) => console.log(data))
    
    for(let i =0;i < data.length ; i++){
            const card = document[i].createElement("article")
            card.setAttribute("class", ".card");

            const h2 = document[i].createElement("h2");
            h2.innerText = result.category;

            const p = document[i].createElement("p");
            p.innerText = result.question;
            p.setAttribute("class", ".card")

            const answerP= document[i].createElement("p");
            answerP.setAttribute("class", "hidden");
            answerP.innerText = result.correct_answer;

            const button = document[i].createElement("button");
            button[i].addEventListener("click", (event) => {
                event.preventDefault()
                answerP.classList.remove("hidden")
            })

            card.append(h2, p, answerP, button)

            
           
        }
}










