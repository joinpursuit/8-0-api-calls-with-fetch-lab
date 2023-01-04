let container = document.querySelector("main");
document.addEventListener("submit",(event) =>{
    fetch("https://opentdb.com/api.php?amount=10")
        .then((response) => response.json())
        .then((data) =>{
            container.innerHTML = "";
            for (let q of data.results){
                let color;
                if (q.difficulty == "easy"){
                    color = "green"
                }
                else if (q.difficulty == "medium"){
                    color = "yellow"
                }
                else{
                    color = "red"
                }
                container.innerHTML += `<article class="card" style="border-color:${color}">
                <h2>${q.category}</h2>
                <h4>${q.difficulty}</h4>
                <p>${q.question}</p>
                <button>Show Answer</button>
                <p class="hidden">${q.correct_answer}</p>
                
              </article>`
            }
    });
    event.preventDefault();
});

container.addEventListener("click",(event) =>{
    if (event.target.tagName == "BUTTON"){
        event.target.parentElement.children[4].style.display = "block"
    }
})