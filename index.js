const form = document.querySelector("form");
const main = document.querySelector("main");
 const BASE_URL = 'https://opentdb.com/api.php?amount=10';
// create an eventListener, submit button and prevent the default action
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    trivQuestions(BASE_URL);

});

 function trivQuestions(url){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        result.results.forEach((question) =>{
            const article = document.createElement("article");
            const h2 =document.createElement("h2");
            const p = document.createElement("p");
            const button = document.createElement("button");
            const p2 =document.createElement("p");




            article.classList.add("card");
            p2.setAttribute("class", "hidden");




            h2.textContent = question.category;
            p.innerText = question.question;
            button.textContent = "Show Answer";
            p2.innerText = question.correct_answer;



            button.addEventListener("click", () => {
                p2.classList.remove("hidden");
            });

            main.append(article);
            article.append(h2, p, button, p2);


        
            

        });
    })

        .catch((error) => {
            console.log(error);
        
            
        
    });
 }