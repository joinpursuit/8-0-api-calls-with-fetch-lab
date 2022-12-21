const BASE_URL = "https://opentdb.com/api.php?amount=10";
// https://opentdb.com/api.php?amount=10

const buttonPress = document.querySelector("button");
// const giphyInput = document.querySelector("input");

buttonPress.addEventListener("click", async (event) => {
    // telling async that this block is asynchronous.  We're going to add a wait.
    // let giphy = giphyInput.value;
    event.preventDefault();
    /* added event.preventDefault(); and async (event) two lines of code upper instructor Hernandez.  This particular API has some sort of functionality that has the default behavior creating issues.  So event.preventDefault prevents that default behavior.
    */
    await fetch(
        `${BASE_URL}`
    ).then((res) => res.json())
    .then((response) => {
        // console.log(response)
        // because we want to see what's in it
        let dataArray = response.results;
        for (let i = 0; i < dataArray.length; i++) {
            let questionCategory = dataArray[i].category;       
            let questionType = dataArray[i].type;
            let questionDifficulty = dataArray[i].difficulty;
            let questionQuestion = dataArray[i].question;
            let questionCorrectAnswer = dataArray[i].correct_answer;
            let questionIncorrectAnswers = dataArray[i].incorrect_answers;
            // console.log(giphyObj);
            let newArticle = document.createElement("article");
            newArticle.classList.add("card");
            let newH2 = document.createElement("h2");
            newH2.textContent = questionCategory;
            newArticle.append(newH2);
            let newP = document.createElement("p");
            newP.textContent = questionQuestion;
            newArticle.append(newP);
            let newButton = document.createElement("button");
            newButton.innerText = "Show Answer";
            newArticle.append(newButton);
            let newPHidden = document.createElement("p");
            newPHidden.classList.add("hidden");
            newPHidden.textContent = questionCorrectAnswer;
            newArticle.append(newPHidden);

            document.querySelector("main").append(newArticle);

            
            // newImg.setAttribute("src", giphyObj)
            // document.querySelector("div").appendChild(newImg);

            /*
                <article class="card">
      <h2>CATEGORY</h2>
      <p>QUESTION</p>
      <button>Show Answer</button>
      <p class="hidden">CORRECT ANSWER</p>
    </article>
            */
        }
    })
    // await for the data to get there.
    // limit = 25 means limit to 25 gifs
    // uses "response" because giphy uses "data" a lot.  So we don't want to use same-names.
    .catch((error) => {
        console.log(error);
    })
})