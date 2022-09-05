fetch("https://opentdb.com/api.php?amount=10")
.then(response => response.json())
.then(triviaQuestions)


function triviaQuestions({results}){
    console.log(results);
    for(let result of results){
        let article = document.createElement("article");
        article.setAttribute("class", "card");
        let main = document.querySelector("main");
        main.append(article);
        // create class for article here 

        
        let header2 = document.createElement("h2");
        header2.textContent = result.category;
        article.append(header2);

        let paragraph = document.createElement("p");
        paragraph.textContent = result.question;
        article.append(paragraph);

        let button = document.createElement("button");
        button.textContent = "Show Answer";
        button.addEventListener("click", (event) => {
            event.preventDefault();

            paragraphTwo.style.display = "block";
        })
        article.append(button);

        let paragraphTwo = document.createElement("p");
        paragraphTwo.setAttribute("class", "hidden");
        paragraphTwo.textContent = result.correct_answer;
        article.append(paragraphTwo);  


        if(result.difficulty === "easy"){
            article.style.backgroundColor = "green";   
        }
        if(result.difficulty === "medium"){
            article.style.backgroundColor = "yellow";   
        }
        if(result.difficulty === "hard"){
            article.style.backgroundColor = "red";   
        }
    }
}
