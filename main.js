//https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

const select = document.querySelector('select')
let Base_URL = "https://opentdb.com/api.php?amount=10"

fetch('https://opentdb.com/api_category.php')
 .then((res) => res.json())
 .then((data) => {
  console.log(data)
const cats = data.trivia_categories
console.log(cats)
  for(let cat of cats) {
    const dropDownItem = document.createElement('option')
    dropDownItem.innerText = cat.name 
    dropDownItem.value = cat.id
    select.append(dropDownItem)

  } 

  })

  // use change as the type of event for select tags - click will not work, it will not change option
select.addEventListener('change', () => {
    Base_URL = `https://opentdb.com/api.php?amount=10&category=${select.value}`
//console.log("this is select value", typeof select.value)
})
const questions = document.getElementsByTagName('submit') 
const form = document.querySelector('form')
const button1 = document.querySelector('button')
const main = document.querySelector('main')
form.addEventListener('submit', (event => {   //add the event listener on the form instead of just the button
    event.preventDefault()
    main.innerHTML = ""  //clears the content that displays in the main section that is being populated on the form
    
    fetch(`${Base_URL}`)   //The variable url must be in this format Base_URL
    .then ((res) => res.json())
    .then ((data) => {
       // console.log(data)
        const result = data.results
       // console.log(results[0].category)
        //console.log("the results = ", result[0].question)
       let qNum = 0;
       for(let qcard of result) {
        
        const article = document.createElement('article')
        const h2 = document.createElement('h2')
        const button2 = document.createElement('button')
        const pQuestion = document.createElement('p')
        const pAnswer = document.createElement('p')
    
        
        let qCategory = result[qNum].category
        main.append(article)
        article.append(h2)
        h2.after(pQuestion)
    
        article.classList = "card"
    if(result[qNum].difficulty === "easy"){
        article.style.borderColor = "blue"
    }
    if(result[qNum].difficulty === "medium"){
        article.style.borderColor = "yellow"
    }
    if(result[qNum].difficulty === "hard"){
       article.style.borderColor = "red"
        //article.onmouseover.borderColor = "red"
    }
        h2.innerText = qCategory
        pQuestion.after(button2)
        button2.innerText = "Show Answer"
        button2.after(pAnswer)
        pQuestion.innerText = result[qNum].question
        pAnswer.innerText =  result[qNum].correct_answer
        pAnswer.classList = "hidden"
    
        button2.addEventListener('click', (event)=> {
        event.preventDefault()
        pAnswer.classList.remove('hidden')
    
    }) 
        qNum++
    
       }
    
    }) 
    
}))

//Notes





