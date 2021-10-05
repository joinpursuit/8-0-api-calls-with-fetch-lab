let form = document.querySelector("form");
let main = document.querySelector("main");

form.addEventListener("submit", (x)=>{
    x.preventDefault();

    fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple")
        .then((response)=> response.json())
        .then((data) => {
            data.results.forEach((question)=>{

                //create
                let box = document.createElement("article");
                let topic = document.createElement("h2");
                let q = document.createElement("p");
                let a  = document.createElement('p');
                let button = document.createElement("button");
                //assign
                box.setAttribute("class", "card");
                a.setAttribute("class", "hidden");

                //fill
                topic.textContent = question.category;
                q.textContent = question.question;
                a.textContent = question.correct_answer;
                button.textContent = "Reveal correct answer"

                box.append(topic, q, a, button);
                main.append(box);

                button.addEventListener("click", ()=>{
                    a.setAttribute("class", "visible");
                });
            });
        });
        
});


