//the api url
const BASE_URL = "https://opentdb.com/api.php?amount=10";

//get the button
const questionButton = document.querySelector("button");
//get the main section
const main = document.querySelector("main")

questionButton.addEventListener("click", async (event) => {
    //prevent the button from doing what it normally would
    event.preventDefault();

    //fetch the url
    await fetch(BASE_URL)
        .then((res) => res.json())
        //get the data
        .then((data) => {
            console.log(data)
            //save the array to a variable
            let questions = data.results;
            //loop through array
            for (let i = 0; i < questions.length; i++){
                //create the article tag for the questions to go in
                let article = document.createElement("article");
                //give it a class of card and answer at i
                article.classList.add("card", `answer${i}`);

                //make a variable for the actual question
                let question = `
                <h2>${questions[i].category}</h2>
                <p>${questions[i].question}</p>
                <button>Show Answer</button>
                <p class="hidden answer${[i]}">${questions[i].correct_answer}</p>`;
                //give the article the question data as the innerHTML
                article.innerHTML = question;
                //put the question inside at the end of main
                main.append(article);


                //ANSWER BUTTON
                //get the answer button
                let answerButton = document.querySelector(`.answer${[i]} button`);

                //get the answer paragraph
                let answer = document.querySelector(` p.answer${[i]}`);

                //tell button what to do when clicked
                answerButton.addEventListener("click", () => {
                    //change the class on that paragraph
                    answer.classList.toggle("hidden");
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
})