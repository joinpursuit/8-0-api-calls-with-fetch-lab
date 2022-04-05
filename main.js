const BASE_URL = "https://opentdb.com/api_config.php"
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
e.preventDefault();



}) 

function getQuestions (URL){
fetch (``)
}


function createArticle (){
const article = document.createElement("article");
const h2 = document.createElement("h2");
const p1 = document.createElement("p");
const button = document.createElement("button");
const p2 = document.createElement("p");


article.classList.add("card");
p2.classList.add("hidden")

article.append(h2, p1, button, p2)
return article;






}