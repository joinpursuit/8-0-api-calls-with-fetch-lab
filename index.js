const callMe = ({ results }) => {  
    console.log(results)

    for(let i = 0; i < 10; i++){
        const article = document.createElement("article")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const button = document.createElement("button")
        const p2 = document.createElement("p")
        article.classList.add("card")
        p2.classList.add("hidden")
        
        main.append(article)
        article.append(h2)
        article.append(p)
        article.append(button)
        article.append(p2)

        // console.log(results[i]) 
        h2.textContent = results[i].category
        p.textContent = results[i].question
        button.textContent = "Answer"
        p2.textContent = results[i].correct_answer
        
    }

    const allArticles = document.querySelectorAll('article');

    allArticles.forEach(article => {
        const card = article.querySelector("button")
        card.addEventListener('click', () => {
            const p = article.querySelector('.hidden')
            p.classList.toggle("hidden")
        })
    })
}

const main = document.querySelector("main")
    fetch("https://opentdb.com/api.php?amount=10")
    .then(e => e.json())
    .then(callMe)