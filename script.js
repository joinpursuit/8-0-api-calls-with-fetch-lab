
        let questions = document.querySelector("form button");
    
        questions.addEventListener("click", (e) =>{
            e.preventDefault();
                fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean") //promise //requesting Json from url
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    
                let questionsList = data.results

        for(let list of questionsList){
            let main = document.querySelector("body main")
                
                /////// Article tag
                let article = document.createElement("article"); 
                article.classList = "card";
                console.log(article)
                
                /////// h2 tag
                let h2 = document.createElement("h2");
                h2.textContent = list.category;
                article.append(h2);
                
                /////// p tag
                let p = document.createElement("p")
                p.textContent = list.question;
                article.append(p)

                /////// button tag
                let showAnswer = document.createElement("button");
                showAnswer.textContent = list.correct_answer;
                article.append(showAnswer);

                /////// p tag with class of "hidden"
                let hiddenp = document.createElement("p")
                hiddenp.classList = "hidden";
                hiddenp.textContent = list.correct_answer;
                article.append(hiddenp);

                /////// difficulty level
                let difficulty = list.difficulty;

                ////// dynamically append javascript elements to the main element in Html
                main.append(article);
                
            };
        });
    })