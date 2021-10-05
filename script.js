let submitButton = document.querySelector(".centered form button");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let centered = document.querySelector("main.centered");
    // set innerHTML to blank to reset for new questions
    centered.innerHTML = "";
    
    console.log("centered", centered.innerHTML);
    let baseURL = "https://opentdb.com/api.php?amount=10";

    /* dropdown menu value - make urls dynamic */
    // let select = document.querySelector("select").value;
    // console.log("select:", select);

    // console.log(e.options[e.selectedIndex].value);
    // console.log(e.target.option);

    /* THIS WORKS */
    let select = document.querySelector('select');
    // console.log(select.options[select.selectedIndex].value); 

    let optionValue = select.options[select.selectedIndex].value;
    /*  gives you the selected value */

    if (optionValue !== "any"){
        baseURL += "&category=" + optionValue;
    }

    // console.log("baseURL:", baseURL);
    // let newBaseURL = baseURL += "&category=" + optionValue;
    // console.log("newBaseURL:", newBaseURL);

fetch(baseURL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log("data:", data);

        // get the key of `results` from the fetch data
        let questionList = data.results;
        console.log("questionList:", questionList);

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
            medium.style.color = "gold";
            hard.style.color = "red";

            // determine the question's difficulty level
            difficultyLevel = askQuestion.difficulty;
            // console.log(difficultyLevel);
         
            /* add difficulty key to page:
            if easy... if medium... if hard... append `easy`, `medium`, or `hard` */
            if (difficultyLevel === "easy"){
                triviaCard.style.border = "4px solid green";
                easy.style.textAlign = "center";
                triviaCard.prepend(easy);
            }
            if (difficultyLevel === "medium"){
                triviaCard.style.border = "4px solid gold";
                medium.style.textAlign = "center";
                triviaCard.prepend(medium);
            }
            if (difficultyLevel === "hard"){
                triviaCard.style.border = "4px solid red";
                hard.style.textAlign = "center";
                triviaCard.prepend(hard);
            }
            /* END - Show "difficulty" key */


            /* START - Add dropdown to select question Category */
            /* when form submitted, update the API call so only those types of questions are retrieved */

            let categoryType = askQuestion.category;
            // console.log(categoryType);

            // if (categoryType === "general knowledge"){
            //     triviaQuestion.append(genKnowledgeFetch);
            // }
            // if (categoryType === "mythology"){
            //     triviaQuestion.append(mythologyFetch);
            // }
            // if (categoryType === "history"){
            //     triviaQuestion.append(hardCategoryFetch);
            // }
            // if (categoryType === "art"){
            //     triviaQuestion.append(artFetch);
            // }
            // if (categoryType === "mythology"){
            //     triviaQuestion.append(mythologyFetch);
            // }
            // if (categoryType === "history"){
            //     triviaQuestion.append(hardCategoryFetch);
            // }
            // if (categoryType === "art"){
            //     triviaQuestion.append(artFetch);
            // }
            // if (categoryType === "mythology"){
            //     triviaQuestion.append(mythologyFetch);
            // }
            // if (categoryType === "history"){
            //     triviaQuestion.append(hardCategoryFetch);
            // }
            // if (categoryType === "art"){
            //     triviaQuestion.append(artFetch);
            // }
            // if (categoryType === "mythology"){
            //     triviaQuestion.append(mythologyFetch);
            // }
            // if (categoryType === "history"){
            //     triviaQuestion.append(hardCategoryFetch);
            // }

            /* Gather URLs to replace fetch */

            // let genKnowledgeFetch = baseURL + "&category=" + "9";
            // let entBooksFetch = "https://opentdb.com/api.php?amount=10&category=10";
            // let entFilmFetch = "https://opentdb.com/api.php?amount=10&category=11";
            // let entMusicFetch = "https://opentdb.com/api.php?amount=10&category=12";
            // let entMusicalsFetch = "https://opentdb.com/api.php?amount=10&category=13";
            // let entTvFetch = "https://opentdb.com/api.php?amount=10&category=14";
            // let entVidGamesFetch = "https://opentdb.com/api.php?amount=10&category=15";
            // let entBoardGamesFetch = "https://opentdb.com/api.php?amount=10&category=16";
            // let sciNatureFetch = "https://opentdb.com/api.php?amount=10&category=17";
            // let sciComputersFetch = "https://opentdb.com/api.php?amount=10&category=18";
            // let sciMathFetch = "https://opentdb.com/api.php?amount=10&category=19";
            // let mythologyFetch = "https://opentdb.com/api.php?amount=10&category=20";
            // let sportsFetch = "https://opentdb.com/api.php?amount=10&category=21";
            // let geographyFetch = "https://opentdb.com/api.php?amount=10&category=22";
            // let historyFetch = "https://opentdb.com/api.php?amount=10&category=23";
            // let politicsFetch = "https://opentdb.com/api.php?amount=10&category=24";
            // let artFetch = "https://opentdb.com/api.php?amount=10&category=25";
            // let celebritiesFetch = "https://opentdb.com/api.php?amount=10&category=26";
            // let animalsFetch = "https://opentdb.com/api.php?amount=10&category=27";
            // let vehiclesFetch = "https://opentdb.com/api.php?amount=10&category=28";
            // let entComicsFetch = "https://opentdb.com/api.php?amount=10&category=29";
            // let sciGadgetsFetch = "https://opentdb.com/api.php?amount=10&category=30";
            // let entAnimeFetch = "https://opentdb.com/api.php?amount=10&category=31";
            // let entCartoonFetch = "https://opentdb.com/api.php?amount=10&category=32";

            /* END - Add dropdown to select question Category */
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
})
