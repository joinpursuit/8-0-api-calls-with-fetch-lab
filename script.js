fetch("https://opentdb.com/api.php?amount=10")
.then((res) => res.json())
.then((data) => {
    let list = data.results;
    console.log(list);
   
    let form = document.querySelector("form");
    form.addEventListener("submit", (e)=> {
        e.preventDefault();

        for (let info of list) {
            let article = document.createElement("article");
            // article.setAttribute("class","card");
            article.className = "card";
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
            // p2.setAttribute("class","hidden");
            p2.className = "hidden";
            p2.textContent = info.correct_answer;
            article.append(p2);

            if(info.difficulty === "hard") article.setAttribute("style","border: 4px solid red");
            if(info.difficulty === "medium") article.setAttribute("style","border: 3px dotted orange");
            if(info.difficulty === "easy") article.setAttribute("style","border: 1px solid black");

            button.addEventListener("click", ()=> {
                p2.classList.remove("hidden");
            })
        }
    })
})
.catch((err) => {
    console.log(err);
})
