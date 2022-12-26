const form = document.querySelector("form");
const URL_PAGE = `https://opentdb.com/api.php?amount=10`;
const questionsList =document.querySelector("main.centered");

console.log(URL_PAGE)

const updatePage =(question) => {
    
    let article = document.createElement("article");
    article.classList.add("card");

    let category = document.createElement("h2");
    category.textContent = `${question.category}`;
    article.append(category);
}