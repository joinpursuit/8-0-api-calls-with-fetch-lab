//store URL within variable "URL" for "read-ability"
let URL = "https://opentdb.com/api.php?amount=10";
//select main and form element from DOM
let main = document.querySelector("main");
let form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    //prevent form from refreshing
    e.preventDefault();
    //establish connection between external server and retrieve data VIA fetch()
    fetch(URL)
        .then((res)=> res.json()) //convert "res" to JSON
        .then((data => {

            //For loop or For Each  
            data.results.forEach(el => {
                //console.log("Data results",el)
                //create elements
                let articleTag = document.createElement("article");
                let h2Tag =document.createElement("h2");
                let questionTag = document.createElement("p");
                let buttonTag = document.createElement("button");
                let answerTag = document.createElement("p");

                //set element Attributes
                articleTag.setAttribute("class","card");
                answerTag.setAttribute("class","hidden");

                //set text content within elements
                buttonTag.textContent = "Show Answer";
                questionTag.innerHTML = el.question;
                h2Tag.textContent = el.category;

                //establish parent-child relationship 
                articleTag.append(h2Tag, questionTag, buttonTag, answerTag);
                main.append(articleTag);            

                
                if (el.difficulty === "medium"){
                    articleTag.setAttribute("style","border: solid yellow")                      
                }
                else if (el.difficulty === "hard"){
                    articleTag.setAttribute("style","border: solid red")                      
                }
                //add event listener on "SHOW ANS" button element
                buttonTag.addEventListener("click", () =>{
                    //remove hidden tag from answer                   
                    answerTag.classList.remove("hidden");
                    //set text content as correct answer
                    answerTag.textContent = el.correct_answer;
                });            
            });
        })).catch((err)=>{
            console.log(err)})
})

// [ ] The API returns a "difficulty" key which categorizes the question based on how difficult it is. Display this difficult on the page through both text and CSS. For example, you may change the border color of the .card element to yellow if it is a medium difficulty question.
