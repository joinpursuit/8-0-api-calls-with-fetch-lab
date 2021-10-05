fetch("https://opentdb.com/api.php?amount=10")

    .then((response) =>

        response.json()

    )
    .then((data) => {

        let returnedResults = data.results
        console.log(returnedResults)
    });

//Sucessfully returning Json object

//selecting main section to build the article element


let mainSection = document.querySelector("main")

//Since we know how many elements we are buiilding (ten) we can use a for loop for each instance

for (let i = 0; i < 10; i++) {

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

let cardHeading = document.createElement("h2")

let questionText = document.createElement("p")

let revealAnswerBtn = document.createElement("button")

let hiddenAnswer = document.createElement("p")

//Asigning attributes to match the HTML provided


}