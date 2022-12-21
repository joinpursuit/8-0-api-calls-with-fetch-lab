const API_URL = 'https://opentdb.com/api.php?amount=10'
const button = document.querySelector('button')
const main = document.querySelector('main')

button.addEventListener('click', (event) => {
    event.preventDefault()
    fetch(`https://opentdb.com/api.php?amount=10`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let info = data.results
        for(let i = 0; i < info.length; i++){
        const newArticle = document.createElement('article')
        newArticle.setAttribute('class','card')
        newArticle.innerHTML = `
        <h2>${info[i].category}</h2>
        <p>${info[i].question}</p>
        <button>Show Answer</button>
        <p class="hidden">${info[i].correct_answer}</p>
        `
        main.append(newArticle)
     }
    });
    
})