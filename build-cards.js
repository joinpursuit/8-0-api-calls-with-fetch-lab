const makeCards = ({ results }) => {  
    document.querySelectorAll("main article").forEach(article => article.remove())

    results.forEach(result => {
        const main = document.querySelector("main")
        main.innerHTML += `<article class="card">
            <h2>${result.category}</h2>
            <p>${result.question}</p>
            <button>Show Answer</button>
            <p class="hidden">${result.correct_answer}</p>
            <ul></ul>
        </article>`
            
        const currentArticle = document.querySelector('article:last-child')
        
        shuffle(result).forEach(selection => {
            const input = document.createElement('input')

            input.setAttribute('type', 'radio')

            const label = document.createElement('label')

            label.append(input)

            label.append(`${selection}`)

            const ul = document.querySelector('article:last-child ul')

            ul.append(label)

            label.setAttribute('style', 'display: block; padding: 5px; margin-left: -70px')


        })

        

        switch(result.difficulty){
            case 'medium':
                currentArticle.setAttribute("style", "border: 3px solid yellow")
            break;
            case 'hard':
                currentArticle.setAttribute("style", "border: 3px solid red")
            break;
        }

    })


    document.querySelectorAll('article').forEach(article => {
        article.querySelector("button").addEventListener('click', () => {
            const answer = article.querySelectorAll('p')
            console.log(answer[1])
            answer[1].classList.remove("hidden")
            
        })
    })
}

const shuffle = ({correct_answer, incorrect_answers}) => {
    const position = Math.floor(Math.random()* incorrect_answers.length + 1)
    incorrect_answers.splice(position, 0, correct_answer)
    return incorrect_answers
}

