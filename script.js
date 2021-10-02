fetch("https://opentdb.com/api.php?amount=10")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);

        // get the key of `results` from the fetch data
        let questionList = data.results;
        console.log(questionList);

        // create a question, then add it
        for (let askQuestion of questionList){
            /* create trivia question elements, to format */
            let triviaCard = document.createElement("article");
            let triviaCategory = document.createElement("h2");
            let triviaQuestion = document.createElement("p");
            let answerButton = document.createElement("button");
            let correctAnswer = document.createElement("p");
            triviaCard.setAttribute("class", "card");
            correctAnswer.setAttribute("class", "hidden");
            triviaCategory.textContent = askQuestion.category;
            triviaQuestion.innerHTML = askQuestion.question; // innerHTML
            answerButton.textContent = "Show Answer";
            correctAnswer.textContent = askQuestion.correct_answer;
    
            /* format card - all siblings of `triviaCard` */
            triviaCard.append(triviaCategory);
            triviaCard.append(triviaQuestion);
            triviaCard.append(answerButton);
            triviaCard.append(correctAnswer);
            
            // console.log(triviaCard); // test in console - yes, it matches format
        
            // add trivia card to `mainCentered`
            let mainCentered = document.querySelector("main.centered");
            mainCentered.append(triviaCard);            
        }


        // add event listener to `answerButton` when clicked, to show the answer
        
        
        
    })
    .catch((err)=>{
        // let errorMessage = document.createElement("div");
        // errorMessage.textContent = "Error message";
        // mainCentered.append(errorMessage);
        console.log(err);
    })