let mainSection = document.querySelector("main")
let form = document.querySelector("form")

fetch("https://opentdb.com/api.php?amount=10")

    .then((response) =>

        response.json()

    )
    .then((data) => {

        let returnedResults = data.results



        //Sucessfully returning Json object



        //selecting main section to build the article element

        form.addEventListener("submit", (event) => {
            event.preventDefault()




            //Since we know how many elements we are buiilding (ten) we can use a for loop for each instance

            for (let question of returnedResults) {
                console.log(question)

                /* 
                
                HTML to build - 
                
                <article class="card">
                  <h2>CATEGORY</h2>
                  <p>QUESTION</p>
                  <button>Show Answer</button>
                  <p class="hidden">CORRECT ANSWER</p>
                </article>
                
                
                */

                //building the elements below//

                let article = document.createElement("article")
                article.classList.add("card")

                //H2 heading

                let cardHeading = document.createElement("h2")
                cardHeading.textContent = question.catagory

                //P tag

                let questionText = document.createElement("p")
                questionText.innerHTML = question.question
                //Button to reveal answer

                let revealAnswerBtn = document.createElement("button")
                revealAnswerBtn.textContent = "Show Answer"


                //Hidden text - will connect to an event listener

                let hiddenAnswer = document.createElement("p")
                hiddenAnswer.classList.add("hidden")
                hiddenAnswer.textContent = question.correct_answer



                //Apending each elements to the article in order

                mainSection.append(article)

                article.append(cardHeading)

                article.append(questionText)

                article.append(revealAnswerBtn)

                article.append(hiddenAnswer)

                console.log(returnedResults)

                revealAnswerBtn.addEventListener("click", (event) =>{
                    //remove the display none of hidden CSS
                    hiddenAnswer.classList.remove("hidden")
                    hiddenAnswer.innerHTML = question.correct_answer
                })

            }
        });
    })
    .catch((error) => {
        console.log(error)
    })