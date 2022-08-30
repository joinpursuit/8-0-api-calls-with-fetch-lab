let amount = 10
const getNewQuestions = () => {
    TriviaQuestion.innerHTML = ""
   // console.log("I have been clicked")
    //base url: https://opentdb.com/api.php?amount=10

    

  const button = document.querySelector('button')
  console.log(button) 
  const getNewQuestions = document.querySelector('getNewQuestions')

  button.addEventListener("click", () => {
    amount+= 10
    getNewQuestions()
    console.log(amount)
  })
    
}
    fetch(`https://opentdb.com/api.php?amount=10`)
    .then((res)=> res.json ())
    .then((resJson)=> {
        console.log(resJson.results)
        const results = resJson.results
        results.forEach((result)=> {
            console.log(result)

  })
            

    })
            
let article = document.createElement('article')
article.classList.add('card')
     
 let h2 = document.createElement('h2')
     h2.textContent = question.category
     article.append(h2)

let questionText = document.createElement('p')
     questionText.textContent=question.question
     article.append(questionText)

let showAnswerButton = document.createElement('button')
     showAnswerButton.textContent = 'Show Answer'
     article.append(showAnswerButton)
let hiddenAnswer = document.createElement ('p')
     hiddenAnswer.classList.add('hidden')
     hiddenAnswer.textContent = question.correct_answer
     article.append(hiddenAnswer)
     main.append(article)
     
     let form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    fetchgetNewQuestions(baseURL)

})
     
 fetchgetNewQuestions(baseURL)  
