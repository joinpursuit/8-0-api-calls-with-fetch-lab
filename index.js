

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://opentdb.com/api.php?amount=10")
        .then (res => res.json())
        .then (res => {
            console.log (res.results);
            makeQuestionCards(res.results)
        })
        .catch(e => console.log(e));
});


const makeQuestionCards = (questions) => {
    const mainQuestions = document.querySelector("main");

    for (question of questions) {
        const article = document.createElement('article');
        article.setAttribute("class", "card");
        
        const category = document.createElement("h2");
        category.textContent = question.category;
        
        const quest = document.createElement('p');
        quest.textContent = question.question;
        
        const theButton = document.createElement('button');
        theButton.textContent = 'Show Answer';
        theButton.setAttribute("class", "buttons");
        

        const message = document.createElement("p");
        message.setAttribute("class", "hidden");
        message.textContent = question.correct_answer;

        article.append(category, quest, theButton, message);
        mainQuestions.append(article);
    }
}

document.addEventListener("click", (e) => {
    if (e.target.className === "buttons") {
        e.target.parentElement.children[3].classList.remove("hidden");
    }
})

