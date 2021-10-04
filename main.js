const categoryURL = "https://opentdb.com/api_category.php";
const anything = "https://opentdb.com/api.php?amount=";

document.querySelector("form").addEventListener("submit", (event) => {
event.preventDefault();

const url = anything + event.target.enter.value + "&category=" + event.target.category.value + "&difficulty=" + event.target.level.value;
if (event.target.level.value === "random") {
  const url2 = anything + event.target.enter.value + "&category=" + event.target.category.value;
  fetch(url2)
  .then((response) => response.json())
  .then(questions)
  .catch(console.log);

} else {
  fetch(url)
    .then((response) => response.json())
    .then(questions)
    .catch(console.log);
}
});

document.querySelector("select").addEventListener("click", (event) => {
event.preventDefault();
fetch(categoryURL).then((response) => response.json()).then(displayCategory).catch(console.log)

})

const defaultValue = document.createElement("option");
  defaultValue.classList.add("default-menu")
  defaultValue.textContent = "Choose a category";
  defaultValue.value = "none"
  defaultValue.setAttribute("selected", "");
  // defaultValue.setAttribute("disabled", "");
  defaultValue.setAttribute("hidden", "");
  document.querySelector("select").append(defaultValue);

const displayCategory = (obj) => {
  

  obj.trivia_categories.forEach((each) => {
    const option = document.createElement("option");
    option.setAttribute("id", "final")
    option.setAttribute("name", "final")
    option.value = each.id;
    option.textContent = each.name;
    document.querySelector("select").append(option);
    console.log(option.value)
  })

}


//  difficulty  ********************************************************

const defaultLevel = document.createElement("option");
  defaultLevel.classList.add("default-level")
  defaultLevel.textContent = "Choose a difficulty";
  defaultLevel.value = "none"
  defaultLevel.setAttribute("selected", "");
  // defaultLevel.setAttribute("disabled", "");
  defaultLevel.setAttribute("hidden", "");
  document.querySelector("#level").append(defaultLevel);


// *************************************************************


const questions = (obj) => {

for (const question of obj.results) {

const article = document.createElement("article")
article.classList.add("card");
article.innerHTML = `
  <h2>${question.category}</h2>
  <p class = "type">Question Type: ${question.type}</p>
  <p class ="difficulty"> Difficulty: ${question.difficulty}</p>
  <p>${question.question}</p>
  <ol class ="list-answers"> Answers </ol>
  <button>Show Answers</button>
  <p class="hidden">${question.correct_answer}</p>
  `

// if question.type is multiple, display all answers and highlight the correct answers




// this will style the class difficulty's style
// switch (question.difficulty) {
//   case "easy" :
//   article.querySelector(".difficulty").style.border = "2px solid blue";
//   break

//   case "medium" :
//    article.querySelector(".difficulty").style.border = "2px solid yellow";
//   break

//   case "hard" :
//     article.querySelector(".difficulty").style.border = "2px solid black";
//    break  
// }

switch (question.difficulty) {
  case "easy" :
  article.style.border = "5px solid blue";
  break

  case "medium" :
   article.style.border = "5px solid yellow";
  break

  case "hard" :
    article.style.border = "5px solid black";
   break  
}





  article.querySelector("button").addEventListener("click", () => {
      if (article.querySelector(".hidden").style.display === "block") {
    article.querySelector(".hidden").style.display = "none"
    article.querySelector("button").textContent = "Show Answers"
      } else {
        article.querySelector(".hidden").style.display = "block"
        article.querySelector("button").textContent = "Hide Answers"
      }
    })

    document.querySelector(".centered").append(article);
    


    if (question.type === "multiple")  {

      for (const i of question.incorrect_answers) {
        const li = document.createElement("li")
        li.textContent = i
        const ol = document.querySelector(".list-answers")
        article.querySelector(".list-answers").append(li);
      }

        

    }




  }

}













