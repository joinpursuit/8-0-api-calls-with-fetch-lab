// testing .js file linked
// console.log(`hi`)

/* TRIVIA QUESTION FORMAT 
    - (add .card class to each question)
    - clicking on button reveals answer (shows p tag w/class .hidden)
    <article class="card">
  <h2>CATEGORY</h2>
  <p>QUESTION</p>
  <button>Show Answer</button>
  <p class="hidden">CORRECT ANSWER</p>
</article>
*/

// define base_url for API fetch
let Base_URL = `https://opentdb.com/api.php?amount=10`

// Came back and defined entire fetch as variable to then apply to button and dropdown event listeners

 //use fetch to access elements in api and define them / set to a variable to be called as function in event listeners
 const fetchInfo = () => {
    
    fetch(`${Base_URL}`)
    .then((resp) => resp.json())
    .then((respJson) => {
    // console.log(respJson)
    // respJson.results -> array of 10 objects -> forEach()
    
    // console.log(respJson.results[0])
    /* object format forr each question (element in array) (keys:value): 
        category: "Entertainment: Video Games"
        correct_answer: "9"
        difficulty: "medium"
        incorrect_answers: (3) ['10', '8', '7']
        question: "How many classes are there in Team Fortress 2?"
        type: "multiple"
    */

    //Create variable for array of resluts and loop through it
   const results = respJson.results
   results.forEach((q) => {
    
    // Create Elements needed for each question (q) to append to page
    const article = document.createElement(`article`)
    const category = document.createElement(`h2`)
    const question = document.createElement(`p`)
    const answerButton = document.createElement(`button`)
    const answer = document.createElement(`p`)
        
    // add classes to appropriate elements
    article.classList.add(`card`, `${q.difficulty}`) 
    // came back and difficulty class to each article to update border colors (easy, medium, hard)
    answer.classList.add(`hidden`)
    
    // populate the elements with textContent corresponding to values inside of each 'q'
    category.textContent = q.category
    question.textContent = q.question
    answerButton.textContent = `Show Answer`
    answer.textContent = q[`correct_answer`]
    // element for multiple choice
    const rightAns = document.createElement(`li`)
        rightAns.innerText = q[`correct_answer`]
        

    //Append elements to article tag then append article to DOM -> main(class centered)
    article.append(category, question, answerButton, answer)
    document.querySelector(`main.centered`).append(article)

      // ADD CONDITIONAL IF q.type === `multiple`, to populate wrong answers (wrong -> p tag) and append
      if(q.type === `multiple`){
        answer.remove()
        const wrongList = document.createElement(`ul`)
        wrongList.append(rightAns)

        q[`incorrect_answers`].forEach( x => {
            const wrongAns = document.createElement(`li`)
            wrongAns.innerText = x
            article.append(wrongList)
            wrongList.append(wrongAns)
        })
    }

    //add event listener to answer button to reveal (toggle hidden class). Came back to 'highlight' correct multiple choice answer
    
    answerButton.addEventListener(`click`, (e) =>{
        answer.classList.toggle(`hidden`)
        rightAns.classList.toggle('highlight')
        

    })
})
})
}

// ADD EVENT LISTENER TO FORM -> 'submit', now calling fetchInfo when button is clicked
const form = document.querySelector(`form`)
// console.log(form)
form.addEventListener(`submit`, (e) => {
    // prevent page from refreshing when submit button is pressed
    e.preventDefault()
    fetchInfo()
})

// CREATE NEW DROPDOWN FORM TO CHOOSE CATEGORY
/*
 <select> - name and id attributes (name ="" id ="")
    <option> value attributes -> used to direct to category for API -> append to select(dropdown) element
*/
// create elements needed for dropdown box
const dropdown = document.createElement(`select`)
const firstOption = document.createElement(`option`)
const section = document.querySelector(`section`)

// append first 'default' option to dropdown
firstOption.innerText = 'Select Category'
dropdown.append(firstOption)

// Create options for dropdown (use fetch for categories, loop and add options/values for each category type)
fetch(`https://opentdb.com/api_category.php`)
    .then((resp) => resp.json())
    .then((respJson) => {
        const categories = respJson[`trivia_categories`]
        console.log(categories)
        categories.forEach( c => {
            let options = document.createElement(`option`)
           options.innerText = c.name
           options.value = c.id
           dropdown.append(options) 
        })
        })
    .catch((err) => console.log(err))
   
/* API url for searching based on category -> 
    https://opentdb.com/api.php?amount=10&category=9 
    -number (id) = options.value -> dropdown.value 

*/

// add event listener to dropdown to update base_url if category chosen -> use 'change' for event type
dropdown.addEventListener(`change`, (e) => {
    Base_URL = `https://opentdb.com/api.php?amount=10&category=${e.target.value}`
    // console.log(`i worked`)
    // console.log(e.target.value)
})

//append dropdown to page
section.append(dropdown)


// ADD MULTIPLE CHOICE ELEMENTS
/*
    - go back to fetchInfo and update to grab 'type' key (if === multiple, grab `incorrect_answers` key (array of 3) and `correct_answer` -> already variable 'answer'')
    - display all answers (ul and li's) and trigger CSS on right answer when answer button is clicked
*/


