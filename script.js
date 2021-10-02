fetch("https://opentdb.com/api.php?amount=10")
.then((res) => res.json())
.then((data) => {
    let list = data.results;
   
    let form = document.querySelector("form");
    form.addEventListener("submit", (e)=> {
        e.preventDefault();

        for (let info of list) {
            let article = document.createElement("article");
            article.setAttribute("class","card");
            form.append(article);

            let h2 = document.createElement("h2");
            h2.textContent = info.category;
            article.append(h2);

            let p1 = document.createElement("p");
            p1.textContent = info.question;
            article.append(p1);

            let button = document.createElement("button");
            button.textContent = "Show Answer";
            article.append(button);

            let p2 = document.createElement("p");
            p2.setAttribute("class","hidden");
            p2.textContent = info.correct_answer;
            article.append(p2);
        }
    })
})
.catch((err) => {
    console.log(err);
})
