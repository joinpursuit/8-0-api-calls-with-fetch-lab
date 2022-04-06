const BASE_URL ="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(BASE_URL)
.then(res => res.json())
.then(data => createArticle(data))




}) 



function createArticle (data){
    data.results.forEach(question => {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const button = document.createElement("button");
        const p2 = document.createElement("p");
        
        
        article.classList.add("card");
        p2.classList.add("hidden")

        h2.textContent = question.category 
        p1.textContent = question.question. 
        button.textContent = "Show Answer"
        p2.textContent = question.correct_answer
        
        article.append(h2, p1, button, p2) 
        const main = document.querySelector("main");
        main.append(article)

        button.addEventListener("click", (e) =>{
           
            p2.style.display = 'block';
        })


    })









}








// function getQuestions (URL){
// // fetch is to execute api and have a promise in return
// //the return data in json format
// var res= fetch("https://opentdb.com/api.php?amount=10")
// //we got the response and then returned promise is converted into json
// res.then(res => res.json()).then(d => console.log(d))
// //after converting into json , saving complete object response in arr
// res.then(res => res.json()).then(d => {arr=d})
// //to get only result, 10 question
// arr=arr.results

// }