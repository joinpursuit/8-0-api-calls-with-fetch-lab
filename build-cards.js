sessionStorage.clear()
let point = 0 

let lifeTimePoints = localStorage.getItem('lifeTimePoints') | 0

const makeCards = ({ results }) => { 
    document.querySelectorAll("main article").forEach(article => article.remove())

    let counter = 0

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

            input.setAttribute('name', `choice${counter}`)

            const label = document.createElement('label')

            label.append(input)

            label.append(`${selection}`)

            const ul = document.querySelector('article:last-child ul')

            ul.append(label)

            label.setAttribute('style', 'display: block; padding: 5px; margin-left: -70px')


        })

        counter++
        

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
            let choice;

            article.querySelectorAll('label').forEach(label => {
                const input = label.querySelector('input')
                input.disabled = true
                if(input.checked){
                    input.defaultChecked = true
                    choice = label.textContent
                } 
            })
            const answer = article.querySelectorAll('p')
            if(answer[1].textContent === choice){
                sessionStorage.setItem('points', `${point += 100}`)
                localStorage.setItem('lifeTimePoints', `${lifeTimePoints += 100}`)
            }
            answer[1].classList.remove("hidden")
            
        })
    })
}

const shuffle = ({correct_answer, incorrect_answers}) => {
    const position = Math.floor(Math.random()* incorrect_answers.length + 1)
    incorrect_answers.splice(position, 0, correct_answer)
    return incorrect_answers
}

