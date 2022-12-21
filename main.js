//the api url
const BASE_URL = "https://opentdb.com/api.php?amount=10";

//get the button
const questionButton = document.querySelector("button");
const main = document.querySelector("main")

questionButton.addEventListener("click", async (event) => {
    //prevent the button from doing what it normally would
    event.preventDefault();

    //fecth the url
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
                //give it a class of card
                article.classList.add("card");

                //make a variable for the actual question
                let question = `
                <h2>${questions[i].category}</h2>
                <p>${questions[i].question}</p>
                <button>Show Answer</button>
                <p class="hidden">${questions[i].correct_answer}</p>`
                //give the article the question data as the innerHTML
                article.innerHTML = question;
                //put the question inside at the end of main
                main.append(article);


                //ANSWER BUTTON
                



            }




        })
        .catch((err) => {
            console.log(err);
        })

})