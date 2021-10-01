const BASE_URL = "https://opentdb.com/api.php?amount=10"

// Grab form, prevent default, remove previous error messages after reset, then add the input to url, then Fetch that url, and lastly reset the form
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    fetch(BASE_URL)
        .then((response) => response.json())
        //CHeck json object keys and values 
        // .then(console.log)
        
        //Create 10 cards  
        .then((jsonObject) => {
            jsonObject.results.forEach((object) => {
                createCard(object)
            })
        })   
        .catch(createError)
})


//Add callback functions to Manipulate the DOM and create error message

//Append this to amend card
/* <article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article> */

function createCard(object) {
    const article = document.createElement("article")
    article.classList.add("card")

    const category = document.createElement("h2")
    category.textContent = object.category
    article.append(category)

    const question = document.createElement("p")
    question.textContent = object.question
    article.append(question)

    const button = document.createElement("button")
    button.textContent = "Show Answer"
    article.append(button)

    const correct = document.createElement("p")
    correct.classList.add("hidden")
    correct.textContent = object.correct_answer
    article.append(correct)

    button.addEventListener("click", () => {
        correct.classList.toggle("hidden")
    })
    
    document.querySelector("main").append(article)
}

function createError(message) {

}