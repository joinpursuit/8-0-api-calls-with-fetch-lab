// const ch1="&quot;";
// const ch2="&#039;";
// let obj={
//     ch1:"\"",
//     ch2:"'"

// };

let main=document.querySelector("main");
let form=document.querySelector('form');
let section=document.querySelector('section');
let urlPart1="https://opentdb.com/api.php?";
let urlPart2="amount=10&category=18&difficulty=medium&type=boolean";
let url=urlPart1+urlPart2;
form.addEventListener("submit", e => {
    e.preventDefault();
    // let selectionArr=[];

    fetch(url)
        .then(responses=> responses)
               .then(response=>response.json())
                    .then(questions=> {
                
                        const {results}=questions;
                        // JSON.parse(results.replace(/&quot;/g, '"'));
                        results.forEach(question=> {
                            let article=document.createElement("article");
                            article.classList.add("card");
                            let h2=document.createElement("h2");
                            h2.textContent=question.category;
                            let p=document.createElement("p");
                            p.innerHTML=question.question;
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
                        let p3=document.createElement("p");
                        p3.classList.add("level");
                        p3.textContent="Difficulty: "+results[0].difficulty;
                        section.after(p3);
                        let cardArr=document.querySelectorAll('.card');
                        cardArr.forEach(card=>{
                            if(results[0].difficulty==="easy") {
                                let level=document.querySelector(".level");
                                level.style.color="#0000b2";
                                level.style.backgroundColor="#808080";
                                level.style.width="150px";
                                level.style.padding="20px";
                                level.style.position="relative";
                                level.style.left="180px";
                                card.setAttribute("style","border: 5px solid #0000b2;")
                            }
                            if(results[0].difficulty==="medium") {
                                let level=document.querySelector(".level");
                                level.style.color="#0000ff";
                                level.style.backgroundColor="#808080";
                                level.style.width="150px";
                                level.style.padding="20px";
                                level.style.position="relative";
                                level.style.left="180px";
                                card.setAttribute("style","border: 10px solid #0000ff;")
                            }
                        
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