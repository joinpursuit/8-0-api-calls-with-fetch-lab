//set all question card display to none so it won't appear on the HTML document
let allcard = document.querySelectorAll("article.card")
for (let eleemnt of allcard){
    eleemnt.style.display = "none"
}


////selects all the question cards and display to block when the "Get New Questions" button is clicked
let gettheQUESTIONS = document.querySelector("form button")
gettheQUESTIONS.addEventListener("click", ()=>{
    let allcard = document.querySelectorAll("article.card")
    for (let eleemnt of allcard){
        eleemnt.style.display = "block"
    }
})


document.querySelectorAll(`article.card p div`).display = "none"

document.querySelectorAll(`article.card p.hidden`).display = "none"

//get the Trivia Question aPI
fetch("https://opentdb.com/api.php?amount=10&category=17")

//takes the Trivia API and turns the JSON into JAvascript with the JSON()
.then(response =>{
 return response.json();

})
//will retrieve all objects initself initially until we log the reults object
.then((resultsArray) =>{  
var gettingQuestion = resultsArray.results
let answersArray = []
let questionsArray = []
console.log(resultsArray)
console.log(gettingQuestion[1].question)
//  function correctANSWER (){
//     for(let obj of gettingQuestion){
// var answer = obj.correct_answer
// return answer
//  }}

for (let i=0;i<gettingQuestion.length;i++){
   let question =  gettingQuestion[i].question
   let answer =  gettingQuestion[i].correct_answer
var thecorrectANSWER = document.getElementsByClassName("hidden")[i];
// thecorrectANSWER.innerText = answer
// //button click show stuff
  //button here  
  let insidePA = document.getElementsByClassName("question")[i];
  insidePA.innerText = question;
  thecorrectANSWER.innerText =  answer;
  insidePA.style.display = "block";
  thecorrectANSWER.style.display= "none"
  //button above
//   thebutton.addEventListener("click", ()=>{
//     // let it = document.querySelector(`article.card p.hidden`)
//     thecorrectANSWER.style.display = "block"
//   })
}


  
//loop to put correct question in place
// for(let i=0;i<gettingQuestion.length;i++){

//     var thequestion = gettingQuestion[i].question

//   let insidethePTagQuestions = document.querySelectorAll(`article.card p div`)[i]
//   insidethePTagQuestions.innerText = thequestion
  
//   insidethePTagQuestions.style.display = "block"
//   console.log(thequestion)
// console.log(insidethePTagQuestions)
// }
//Loop to put correct answer in place

// function eachIterationObject(){
// let values1 = Object.values(gettingQuestion)
// for (let eac of values1){
//     console.log(eac)
//     return eac
// }




// for (let hereanswer in gettingQuestion){
//     hereanswer["correct_answer"]
//   answersArray.push(hereanswer.correct_answer)
// }
 

//     for (let herequestion in gettingQuestion){
//         for (let theQQQ in herequestion){
//          questionsArray.push(theQQQ["question"])

    // }}
 console.log(questionsArray)
//     var answer = gettingQuestion[i]


  }).catch((error)=>{console.log(error)})


  let revealbutton = document.getElementsByClassName("button")
  for( let i=0;i<revealbutton.length;i++){
let revealbutton2 = document.getElementsByClassName("button")[i]
   let hiddenreveal =  document.getElementsByClassName("hidden")[i]

revealbutton2.addEventListener("click",()=>{
    hiddenreveal.style.display="block"
})
  }
//to show to display of the questions




// }

// for (elemenet of gettingQuestion){
  
//   var answer = elemenet

// for (element of insidethePTagQuestions){
//     element.innerText = thequestion
// }

        

// for (element of thecorrectANSWER){
//     element.innerText = answer}


// let card10 = document.querySelectorAll("article.card")
//     for(eleement of card10){
        
    // }






// let card10 = document.querySelectorAll("article.card button");
//     let cardANSW =document.querySelectorAll("article.card p.hidden");
// cardANSW.style.display = "none";

// for (let elemeent of card10){

// }
// // }
// for (eleement of cardANSW ){
//     console.log(eleement)
//     eleement.innerText= answer
//     eleement.style.display = "none"



//     elemeent.addEventListener("click", ()=>{
//         eleement.style.display = "block"
//     })




// for (let cad of card10){
// cad.innerText = thequestion;
// }
// // let hiderev = document.querySelector("form button");

// // hiderev.addEventListener("click",()=>{inputHere.style.display = "block"})

// for (let pada of cardANSW){
//     pada.innerText = answer 
// }
//     // cardANSW.addEventListener("click",()=>{inputHere.style.display = "block"})



//  }}






// //EVENT LISTENER for Question Appearing and Disappearing


// //Event Listener for Questions ANSWERS


// let hiddenReveal = document.querySelector(".card button");
// let hide = document.querySelectorAll("article p")[1];
// hide.style.display = "none";

// hiddenReveal.addEventListener("click",(event)=>{
//     hide.style.display = "block"






//set all question card display to none so it won't appear on the HTML document
// var allquestions = document.querySelectorAll("article.card p.hidden");

// for (let eleemnt of allquestions){
//     eleemnt.style.display = "none"
// }


// ////selects all the question cards and display to block when the "show answers" button is clicked
// let gettheQUESTIONS21 = document.querySelectorAll("article button")
// for (gfhcf of gettheQUESTIONS21){
//     gfhcf.addEventListener("click", ()=>{
//         for (let seff of allquestions){
//             seff.style.display="block"
// }})}













// eachQ.style.display = "none"

// let showtheQuestion = document.querySelectorAll("article.card p.hidden")
// let questionBUtOON = document.querySelectorAll("article.card button")
// for (eachQ of showtheQuestion){
//     questionBUtOON.addEventListener("click",(event)=>{
//         event.preventDefault()
//         eachQ.style.display = "block"
//     })