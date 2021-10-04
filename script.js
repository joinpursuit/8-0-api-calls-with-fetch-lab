
let form= document.querySelector("form");

fetch("https://opentdb.com/api.php?amount=10&category=12&type=multiple")
    .then((response)=>{
        return response.json();
})  .then((data)=>{

    let questionList = data.results; 

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        
       
        for(let question of questionList){

            let article = document.createElement("article");
            article.setAttribute("class", "card");
            form.append(article);

            let h2 = document.createElement("h2");
            h2.textContent = question.category;
            article.append(h2);

            let p1 = document.createElement("p");
            p1.textContent = question.question;
            article.append(p1);

            let button = document.createElement("button");
            button.textContent = question.show_answer;
            article.append(button);

            let p2 = document.createElement("p");
            p2.setAttribute("class", "hidden");
            p2.textContent = question.correct_answer;
            article.append(p2);


            

        }
    })
        

        
}). catch((error)=>{
    console.log(error);
})