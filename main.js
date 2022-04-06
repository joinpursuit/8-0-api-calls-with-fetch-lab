
// creates a variable equal to the API web server 
const BASE_URL ="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
// create a variable to equal the element form
const form = document.querySelector("form");
// add an event listener to the form when form is selected something will happen 
form.addEventListener("submit", (e) => {
// prevent default method prevent the page form refreshing 
e.preventDefault();

// when the form is submitted it will make async request to the API 
fetch(BASE_URL)
// the API will respond with data from JSON to JS form 
.then(res => res.json())
// then will present the API data in JS form from the server
.then(data => createArticle(data))
}) 

// create a function called create article with the object data from the API as the paratmeter 
function createArticle (data){
    // loop through the API data array of objects called results with the forEach method, iterting each question
    data.results.forEach(question => {
        // each iteration through the results array will have an article tag
        const article = document.createElement("article");
        // each iteration through the results array will have a h2 tag 
        const h2 = document.createElement("h2");
        // each iteration through the results array will have a p1 tag 
        const p1 = document.createElement("p");
        // each iteration through the results array will have a button tag 
        const button = document.createElement("button");
        // each iteration through the results array will have a p2 tag 
        const p2 = document.createElement("p");
        
        // each iteration through the results array article will have a classlist of card
        article.classList.add("card");
        // each iteration through the results array p2 will have a hidden classlist 
        p2.classList.add("hidden")

        // each iteration through the results array will have a h2 words with have a key value of category
        h2.textContent = question.category 
        // each iteration through the results array will have p1 t words with a key value of question  
        p1.textContent = question.question. 

        // each iteration through the results array will have a button with the words Show Answer 
        button.textContent = "Show Answer"
        // // each iteration through the results array p2 words will have a key value of correct answer 
        p2.textContent = question.correct_answer
        
        // add h1, p1, button and p2 to the article
        article.append(h2, p1, button, p2) 

        // create a variable for the mail element 
        const main = document.querySelector("main");
        // add the articles to the main element 
        main.append(article)

        // give the button an event listener when you click it something happenes
        button.addEventListener("click", (e) =>{
            // the event is the p2 tage goes from hidden to seen with "block"
            p2.style.display = 'block';
        })

    })

}








// function getQuestions (URL){
// // fetch is to execute api and have a promise in return
// //the return data in json format
// var res= fetch("https://opentdb.com/api.php?amount=10")
// //we got the response and then returned promise is converted into json
// res.then(res => res.json()).then(d => console.log(d))
// //after converting into json , saving complete object response in arr
// res.then(res => res.json()).then(d => {arr=d})
// //to get only result, 10 question
// arr=arr.results

// }