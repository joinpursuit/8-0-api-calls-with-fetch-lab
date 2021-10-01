    let arr;
    
    const main = document.querySelector("main")
    fetch("https://opentdb.com/api.php?amount=10")
    .then(e => e.json())
    .then(x => x.results)
    .then(y => {
        arr = y
        callMe()
    })

    
 const callMe = () => {  
    console.log(arr[0])

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

        // console.log(arr[i]) 
        h2.textContent = arr[i].category
        p.textContent = arr[i].question
        button.textContent = "Answer"
        p2.textContent = arr[i].correct_answer
        
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