const removeJunk = (str) => {
    const trash = {
        "&quot;": "",
        "&#039;": `'`,    
        "&eacute;": "e",        
    };

    const regex = /(&quot;|&#039;|&eacute;)/g;
    return str.replace(regex, (junk) => {
        return trash[junk];
    });
}

fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then(function(trivia_questions) {
        let questions = trivia_questions.results;
        for(let quest of questions) {
            const art = document.createElement("article");
            art.setAttribute("calss", "card");
            art.innerHTML =
            `<h2>${quest.category}</h2>
             <p>${quest.question}</p>
             <button>Show Answer</button>
             <p class = "hidden">${quest.correct_answer}</p>`;
             art.questions("button").addEventListener("click", (event) => {
                 
             })
        }
    })










