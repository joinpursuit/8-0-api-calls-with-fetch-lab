
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
                console.log(list);

                let article = document.createElement("article");
                article.classList = "card";
                console.log(article)

                let h2 = document.createElement("h2");
                h2.textContent = list.category;
                article.append(h2);
                
                let p = document.createElement("p")
                p.textContent = list.question;
                article.append(p)

                let showAnswer = document.createElement("button");
                showAnswer.textContent = list.correct_answer;
                article.append(showAnswer);

                let hiddenp = document.createElement("p")
                hiddenp.classList = "hidden";
                hiddenp.textContent = list.correct_answer;
                article.append(hiddenp);

                let difficulty = list.difficulty;
                console.log(difficulty)
                

            };
        });
    })