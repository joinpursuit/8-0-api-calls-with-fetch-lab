let URL = "https://opentdb.com/api.php?amount=20";

//select main and form element from DOM
let main = document.querySelector("main");
let form = document.querySelector("form");
let section = document.querySelector("section");

//////////////// Legend List ////////////////
let fieldSet = document.createElement("fieldset");
let difficultyLegend = document.createElement("legend");
let colorList = document.createElement("ul");
let red = document.createElement("li");
let green = document.createElement("li");
let yellow = document.createElement("li");

red.textContent = "Red = Difficulty: 'Hard'";
yellow.textContent = "Yellow = Difficulty: 'Medium'";
green.textContent = "Green = Difficulty: 'Easy'";
difficultyLegend.textContent = "Difficulty Legend";

colorList.append(red, yellow, green);
fieldSet.append(difficultyLegend, colorList);
section.append(fieldSet);

//////////////// Legend List ////////////////
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let value = document.querySelector("select").value;
    console.log(e)
    if(value !== "any") {
        URL += `&category=${value}`
    }

    fetch(URL)
        .then((res)=> res.json()) //convert "res" to JSON
        .then((data => {
            let newCards = data.results
            console.log(newCards)
            newCards.forEach(card => {
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
                questionTag.innerHTML = card.question;
                h2Tag.innerHTML = card.category;

                //establish parent-child relationship
                articleTag.append(h2Tag, questionTag, buttonTag, answerTag);
                main.append(articleTag);            
                
                if (card.difficulty === "medium"){
                    articleTag.setAttribute("style","border: solid yellow")                      
                }
                else if (card.difficulty === "hard"){
                    articleTag.setAttribute("style","border: solid red")                      
                }
                //add event listener on "SHOW ANS" button element
                buttonTag.addEventListener("click", () =>{
                    //remove hidden tag from answer                   
                    answerTag.classList.toggle("hidden");
                    //set text content as correct answer
                    answerTag.innerHTML = card.correct_answer;
                });            
            });
        })).catch((err)=>{
            console.log(err)})
})
