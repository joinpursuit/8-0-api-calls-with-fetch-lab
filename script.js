const BASE_URL = `https://opentdb.com/api.php?amount=10`



const main = document.querySelector("main");
const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
    event.preventDefault()
    moreQuestions(BASE_URL)
    main.innerHTML = ""

    });
    function moreQuestions(BASE_URL) {
        fetch(BASE_URL)
        .then(response => response.json())
        .then((fetchdata) => {
            console.log(fetchdata)
            for(let f of fetchdata.results){
                const article = document.createElement("article");
                article.classList.add("card");
                main.append(article);
                
                const h2 = document.createElement("h2");
                article.append(h2);
                h2.textContent = f.category
            
                const p = document.createElement("p");
                article.append(p);
                p.innerHTML = f.question;
            
                const button = document.createElement("button");
                article.append(button);
                button.textContent = "Show Answer";
            
                const p2 = document.createElement("p2");
                p2.classList.add("hidden");
                article.append(p2);
                p2.innerHTML = f.correct_answer;
               
            
                button.addEventListener('click', () => {
                    p2.classList.remove("hidden")
                });
            }
            })
       
        
            .catch((err) => {
                console.log(err);
            });
    
        }
        
        


            


        
        









