const BASE_URL = "https://opentdb.com/api.php?amount=10"

const form = document.querySelector("form")

const main = document.querySelector("main")


form.addEventListener("submit",(event)=>{
    event.preventDefault()

    
    
fetch(BASE_URL)
  .then((response) => response.json())
  .then((response) => {
    // You can do what you like with the result here.
    
    //console.log the response of base url.
    console.log(response);
    // loop through each of  the results array
    response.results.forEach(all => {
        //creat article
        const article = document.createElement('article')
        // set class to card
        article.classList.add('card')
        // creat h2
        const h2 = document.createElement('h2')
        // create p
        const p = document.createElement('p')
    
        // set h2 to each category. 
        h2.innerText = all.category
        // set innertext of p to questions
        p.innerText = all.question

        // append h2 and p to article
    article.append(h2,p)
    // append article to main
    main.append(article)
    // p2 to store the correct answer
    const p2 = document.createElement("p2")

    p2.classList.add("hidden")
    p2.innerText = all.correct_answer

    article.append(p2)

    const button = document.createElement("button")
    button.innerText = "Show Answer"
    button.addEventListener("click",()=>{
        p2.classList.toggle('hidden')
       
    })

    article.append(button)
    });
  })

  .catch((error) => {
    // You can do what you like with the error here.
    console.log(error);
  });

})