const makeCards = ({ results }) => {  
    document.querySelectorAll("main article").forEach(article => article.remove())

    results.forEach(result => {
        const main = document.querySelector("main")
        main.innerHTML += `<article class="card">
            <h2>${result.category}</h2>
            <p>${result.question}</p>
            <button>Show Answer</button>
            <p class="hidden">${result.correct_answer}</p>
        </article>`
    })


    document.querySelectorAll('article').forEach(article => {
        article.querySelector("button").addEventListener('click', () => {
            const answer = article.querySelector('p:last-child')
            answer.classList.remove("hidden")
            
        })
    })
}

