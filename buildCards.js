
const makeCards = ({ results }) => {  
    results.forEach(result => {
        document.querySelector("main").innerHTML += `<article class="card"><h2>${result.category}</h2><p>${result.question}</p><button>Show Answer</button><p class="hidden">${result.correct_answer}</p></article>`
    })

    document.querySelectorAll('article').forEach(article => {
        article.querySelector("button").addEventListener('click', () => {
            article.querySelector('article > p:last-child').classList.toggle("hidden")
        })
    })
}
