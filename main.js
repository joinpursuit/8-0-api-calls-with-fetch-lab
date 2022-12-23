const url = "https://opentdb.com/api.php?amount=10";

//for(const card of cards){
    const main = document.querySelector('main');
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const button = document.createElement('button')
    const form = document.querySelector('form');

    main.append(article);
    article.setAttribute('class', 'card');

    article.prepend(h2);
    article.append(p1);
    article.append(button);
    article.append(p2);

    p1.innerText = 'QUESTIONS'
    p2.setAttribute('class', 'hidden');
    p2.innerText = 'CORRECT ANSWERS'
//}

form.addEventListener('submit', click => {
    click.preventDefault();


})

function triviaQuestions(question){
    fetch(`${url}/${question}`)
        .then((response) => response.json())
        .then((resultInJS) => {
            resultInJS.forEach(question => {
                p1.textContent = question
                console.log(p1,question)
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

triviaQuestions()