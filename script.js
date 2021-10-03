let URL = "https://opentdb.com/api.php?amount=10";
//select main and form element from DOM
let main = document.querySelector("main");
let form = document.querySelector("form");
let section = document.querySelector("section")

let fieldSet = document.createElement("fieldset");
let difficultyLegend = document.createElement("legend");
let colorList = document.createElement("ul");
let red = document.createElement("li");
let green = document.createElement("li");
let yellow = document.createElement("li");

red.textContent = "Red = Difficulty: 'Hard'";
yellow.textContent = "Yellow = Difficulty: 'Medium'";
green.textContent = "Green = Difficulty: 'Easy'"

colorList.append(red, green, yellow)

difficultyLegend.textContent = "Difficulty Legend"

fieldSet.append(difficultyLegend, colorList)
section.append(fieldSet)

fetch(URL)
    .then((res)=> res.json())
    .then((data)=> {
        let categoryList = data.results
        for(let el of categoryList){
            //////////////// Category List ////////////////
            let newOption = document.createElement("option");
            let select = document.querySelector("select")
            newOption.textContent = el.category
            newOption.value = el.category[0].toUpperCase() + el.category.slice(1);
            select.append(newOption);                
        }       
    }).catch((err)=>{
        console.log(err)
    })

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    fetch(URL)
        .then((res)=> res.json()) //convert "res" to JSON
        .then((data => {
            
            data.results.forEach(el => {
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