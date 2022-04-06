//I need to create 10 questions inside the html
//I need to link this main.js to the html 
//".card" class (?) needs to be present in the question
//I need an event listener to proc when the button is clicked


const apiToken = 'd00e27c6422cef282503e7ca2d2bfc81b76f8ffed920a21c81317d55232c3fcd' //creating a variable to store the API data to be added to the URL

const baseURL = `https://opentdb.com/api.php?amount=10&token=${apiToken}`//creating a variable to store the URL of the API data

const err = "Something went wrong!" //Error message for when Catch procs

let main = document.querySelector('main') //created a variable to store the location of the main element of HTML

function fetchQuestions(url) { //created a function to hold the fetch commands in order to avoid re-typing the code block to incoporate new questions
    fetch(url) //fetches a URL
    .then((response) => { //should the URL respond, then return the JSON object of the API
        return response.json()
    })
    .then((json) => { // then, with the returned JSON data...
    let questionResults = json.results//create a variable to house the results which were an array of objects
    for (let i = 0; i < questionResults.length; i++) { //Looping through the array of objects, incrementing by one
    let question = questionResults[i] //storing the individual indexes of the array into a new variable
    let article = document.createElement('article') //creates an article on the HTML document
    article.classList.add('card') //creating the class 'card' to house the question data
    let h2 = document.createElement('h2') //creating the h2 element 
    h2.textContent = question.category//attributing the text of H2 to the category of the question object
    article.append(h2)// and making it a child of the article
    let questionText = document.createElement('p') //creating the first paragraph child
    questionText.textContent = question.question//attributing the text of the question category of the object to a variable
    article.append(questionText)// and making it a child of the article
    let showAnswerButton = document.createElement('button')//creating a variable to house the clickable button
    showAnswerButton.textContent = 'Show Answer' //attributing text to the button
    article.append(showAnswerButton)//and making it a child of the article
    let hiddenAnswer = document.createElement('p')//creating the final paragraph child
    hiddenAnswer.classList.add('hidden')//and adding a class of 'hidden' to it
    hiddenAnswer.textContent = question.correct_answer//attributing the correct answer from the results object to the text of the created element
    article.append(hiddenAnswer)//and making it a child of the article
    main.append(article)//making the article the child of the Main element
    }
    })
    .catch((err) => {//should any of this block be wrong, the error will be caught and logged with the aforementioned string
        console.log(err)
    })
}

let form = document.querySelector('form')//creating an event listener for when the 'get new questions' button is clicked
form.addEventListener('submit', event => { //listens for when the user submits, prevents the page from resetting to the default, and invokes the function made earlier to refresh the questions
    event.preventDefault()
    fetchQuestions(baseURL)
})
    //for each question, build an article element w/ class card
fetchQuestions(baseURL)
