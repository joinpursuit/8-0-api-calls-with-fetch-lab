
let main=document.querySelector("main");
let form=document.querySelector('form');

form.addEventListener("submit", e => {
    e.preventDefault();
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean")
        .then(response=> {
            response.json().then(questions=> {
                const {results}=questions;
                results.forEach(question=> {
                    let article=document.createElement("article");
                    article.classList.add("card");
                    let h2=document.createElement("h2");
                    h2.textContent=question.category;
                    let p=document.createElement("p");
                    p.textContent=question.question;
                    let button=document.createElement("button");
                    button.textContent="Show Answer";
                    let p2=document.createElement("p");
                    p2.classList.add("hidden");
                    p2.textContent="CORRECT ANSWER";
                    button.addEventListener("click", ()=>{
                        p2.textContent=question.correct_answer;
                        p2.classList.remove("hidden");
                            
                    })
                    article.append(h2, p, button, p2);
                    main.append(article);
                })
                
            
                
            })

        })
        .catch(e=>{
            console.log(e);
        })

    
    

})



/*



*/


/*
<article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article>
*/