fetch("https://opentdb.com/api.php?amount=10")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log("data:", data);

        // get the key of `results` from the fetch data
        let questionList = data.results;
        // console.log("questionList:", questionList);

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
            
            // add event listener to `answerButton` when clicked, to show the answer. Toggle the answer to hide/show
            answerButton.addEventListener("click", (e)=>{
                e.preventDefault();
                correctAnswer.classList.toggle("hidden");
            })

            /* START - Show "difficulty" key */
            let difficultyLevel = document.createElement("div");
            let easy = document.createElement("div");
            let medium = document.createElement("div");
            let hard = document.createElement("div");
            difficultyLevel.setAttribute("class", "difficulty-key");
            easy.setAttribute("class", "easy");
            medium.setAttribute("class", "medium");
            hard.setAttribute("class", "hard");

            /* Set `textContent` of each difficulty */
            easy.textContent = "Easy";
            medium.textContent = "Medium";
            hard.textContent = "Hard";

            /* Set `style` of each difficulty */
            easy.style.color = "green";
            medium.style.color = "yellow";
            hard.style.color = "red";

            // determine the question's difficulty level
            difficultyLevel = askQuestion.difficulty;
            console.log(difficultyLevel);
         
            /* add difficulty key to page:
            if easy... if medium... if hard... append `easy`, `medium`, or `hard` */
            if (difficultyLevel === "easy"){
                triviaQuestion.append(easy);
            }
            if (difficultyLevel === "medium"){
                triviaQuestion.append(medium);
            }
            if (difficultyLevel === "hard"){
                triviaQuestion.append(hard);
            }
            /* END - Show "difficulty" key */
        }



        /* START fetch another API */
        return fetch("https://api.imgflip.com/get_memes")
        .then((response)=>{
            return response.json();
        })
        .then((memeData)=>{
            // console.log("memedata", memeData);
            let memeImg = document.createElement("img");

            // let memeListed = memeData.data;
            // console.log("memeListed:", memeData.data);

            let memeDataDataMemes = memeData.data.memes;
            // console.log("memeDataDataMemes:", memeData.data.memes);

            for(let memeOne of memeDataDataMemes){
                let memeUrl = memeOne.url;
                // console.log("memeUrl:", memeUrl);

                /* START - Set <src> to the meme URL */
                memeUrlFormat = `${memeUrl}`;
                // console.log("memeUrlFormat", memeUrlFormat);

                // memeImg.setAttribute("src", `${memeUrl}`);
                // memeImg.src = memeUrlFormat;
                // console.log("memeImg:", memeImg);
                /* END - Set <src> to the meme URL */

                /* All of the memes:
                the memes are in an <img src> tag */
                let memeImgToPlace = document.createElement("img");
                // console.log("memeUrlFormat", memeImg.src);
                memeImgToPlace.setAttribute("src", memeUrlFormat);
                // memeImgToPlace.setAttribute("alt", "meme URL image");
                // memeImgToPlace.setAttribute("title", memeUrl + ".title");
                // console.log("memeImgToPlace", memeImgToPlace);

                /* Attach `memeImgToPlace` to the page */
                let memeBox = document.querySelector(".memebox");
                
                /* add styles */
                memeBox.setAttribute("style", "border-top:8px solid red; border-bottom:8px solid red; border-right:40px solid #4f7d5d; border-left:40px solid #4f7d5d; padding:20px; margin:10px; height: 400px; width: 600px; object-fit: fill; overflow: scroll; margin-left:auto; margin-right:auto;");

                /* Add image <img src> to the `memeBox` */
                memeBox.append(memeImgToPlace);

                /* Format/Style MemeBox header/paragraph text */
                let memeboxParagraph = document.querySelector("#memebox-paragraph");
                let memeboxHeader = document.querySelector("#memebox-header");

                memeboxHeader.setAttribute("style", "position:absolute; background-color:red; color:white; padding-left: 50px; padding-top: 10px; padding-bottom: 50px; padding-right: 50px;");
                memeboxParagraph.setAttribute("style", "position:absolute; background-color:rebeccapurple; color:white; margin-top:50px; padding-left: 50px; padding-right: 50px;");
            }   
            })
            .catch((error)=>{
                console.log(error);
        })
        /* END fetch another API */

    })
    .catch((err)=>{
        // let errorMessage = document.createElement("div");
        // errorMessage.textContent = "Error message";
        // mainCentered.append(errorMessage);
        console.log(err);
    })


// fetch("https://api.imgflip.com/get_memes")
//     .then((response)=>{
//         return response.json();
//     })
//     .then((memeData)=>{
//         // console.log("memedata", memeData);
//         console.log("theurl", "https://i.imgflip.com/30b1gx.jpg");

//         let memeImg = document.createElement("img");
//         memeImg.src = memeData[memes.url]
//         triviaCategory.append(memeImg);
//         console.log("this", memeImg);
//         console.log("scream", memeImg.src);
//     })
//     .catch((error)=>{
//         console.log(error);
// })