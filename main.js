// const { results } = require("./cypress/fixtures/questions)   
// ^-- when its commented in, the code is an error aka just simply doesn't run

const buttonQuestion = document.querySelector("button"); //pulls all button.html section
const BASE_URL = "https://opentdb.com/api.php?amount=10" //pulls API URL info
const formQuestion = document.querySelector("form") //pulls all form.html section
const newMain = document.querySelector("main") // pulls all the main.html section

formQuestion.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents page going back to default

    fetch(`${BASE_URL}`) // accessing the API
        .then((urlAnswer) => urlAnswer.json()) // promise expecting from the API
        .then((urlAnswerJSON) => { // THIS MUST BE JSON ADDED TO THIS CONDITION FOR IT TO RUN!!!
            console.log(urlAnswerJSON)
            const results = urlAnswerJSON.results // sets sults to the answer json info
            results.forEach((result) => {
                console.log(result) //.forEach() used only on higher order functions to run through the result data

                const addArticle = document.createElement("article")
                addArticle.className = "card" //each question set w/i a card class.

                // v-- All added headings and p sections for class HTML section; addArticle --v
                const addH2 = document.createElement("h2")
                const addP = document.createElement("p")
                const addP2 = document.createElement("p")

                // v-- Added & Modified New Button --v
                const ansButton2 = document.createElement("button")
                addH2.innerHTML = result.catergory
                addP.innerHTML = result.question
                addP2.innerHTML =
                    result.correct_answer
                addP2.className = "hidden"
                ansButton2.innerHTML = "Show Answer"

                //v-- Click command for Correct answer Button --v
                ansButton2.addEventListener("click", (event) => {
                    event.preventDefault()
                    addP2.classList.remove("hidden") // reveals the CORRECT ANSWER when clicked is activated
                })
                // v---Includes add on features as required in html example to add to class section for button 
                addArticle.append(addH2)
                addArticle.append(addP)
                addArticle.append(addP2),
                    addArticle.append(ansButton2)
                newMain.append(addArticle)
            })
        })
        .catch((error) => console.log(error)) // the error 




});









