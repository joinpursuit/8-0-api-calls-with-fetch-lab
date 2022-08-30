const main = document.querySelector(`main`)

function createQ (results) {
    const article = document.createElement(`article`)
    article.classList.add = `card`

    const h2 = document.createElement(`h2`)
    const p = document.createElement(`p`)
    const button = document.createElement(`button`)
    button.innerText = `Show Answer`
    const p2 = document.createElement(`p`)
    p2.classList.add = `hidden`  
    
    article.append(h2, p, button, p2)

    h2.innerText = result.category
    p.innerText = result.question
    p2.innerText = result.answer
    main.append(article)
}



fetch(`https://opentdb.com/api.php?amount=10`)
.then((res) => res.json())
.then((res) => {
    const results = res.results
console.log(results)

    results.forEach(result => {
        const article = document.createElement(`article`)
        article.classList.add(`card`)

        const h2 = document.createElement(`h2`)
        const p = document.createElement(`p`)
        const button = document.createElement(`button`)
        button.innerText = `Show Answer`
        const p2 = document.createElement(`p`)
        p2.classList.add(`hidden`)
    
        article.append(h2, p, button, p2)

        h2.innerText = result.category
        p.innerText = result.question
        p2.innerText = result.correct_answer
        main.append(article)
        article.classList.add = `card`

        button.addEventListener(`click`, () => {
            p2.classList.toggle(`hidden`)
        })
    })
})
.catch((err) => console.log(err))