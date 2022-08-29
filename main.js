const url = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
const form = document.querySelector('form')


    const centered = document.querySelector('main')
    
    let category = 0

    form.addEventListener('click', (event) => {
        event.preventDefault()
    
        fetch(`${url}`)
            .then((res) => res.json())
            .then((resJson) => {
                const results = resJson.results

                results.forEach((element) => {


                    
                    const article = document.createElement('article')
                    article.classList.add('card')
                    const h2 = document.createElement('h2')
                    const question = document.createElement('p')
                    question.textContent = element.question
                    h2.textContent = element.category

                    const answer = document.createElement('p')
                    const button = document.createElement('button')
                    answer.textContent = element.correct_answer
                    button.setAttribute('type','submit')
                    button.textContent = 'Show Answer'
                    article.append(h2,question,button,answer)
                    centered.append(article)

                button.addEventListener('click', () => {
                    if (answer.classList.contains('hidden')) {
                        answer.textContent = ''
                    } else {
                        answer.textContent = element.correct_answer
                    }
                })
            })
    
            })
            .catch((error) => {
                console.log(error)
            })
    })
