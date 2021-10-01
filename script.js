fetch("https://opentdb.com/api.php?amount=10")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);

        /* create trivia question elements, to format */
        let triviaCard = document.createElement("article");
        let triviaCategory = document.createElement("h2");
        let triviaQuestion = document.createElement("p");
        let answerButton = document.createElement("button");
        let correctAnswer = document.createElement("p");
        triviaCard.setAttribute("class", "card");
        correctAnswer.setAttribute("class", "hidden");
        triviaCategory.textContent = "CATEGORY";
        triviaQuestion.textContent = "QUESTION";
        answerButton.textContent = "Show Answer";
        correctAnswer.textContent = "CORRECT ANSWER";

        /* format card - all siblings of `triviaCard` */
        triviaCard.append(triviaCategory);
        triviaCard.append(triviaQuestion);
        triviaCard.append(answerButton);
        triviaCard.append(correctAnswer);
        
        // console.log(triviaCard); // test in console - yes, it matches format

    })
    .catch((err)=>{
        console.log(err);
    })