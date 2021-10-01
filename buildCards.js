
const callMe = ({ results }) => {  
    const main = document.querySelector("main")

    // console.log(results)

    for(const result of results){
        console.log(result)
        main.innerHTML += `<article class="card">
        <h2>${result.category}</h2>
        <p>${result.question}</p>
        <button>Show Answer</button>
        <p class="hidden">${result.correct_answer}</p>
      </article>`
    }

    const allArticles = document.querySelectorAll('article');

    allArticles.forEach(article => {
        article.querySelector("button")
        .addEventListener('click', () => {
            const answer = article.querySelector('article > p:last-child')
            answer.classList.toggle("hidden")
        })
    })
}
