fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=base64")
// change the language to json .
.then( res => res.json())
.then((data)=> {
 console.log(data);
 let main = document.querySelector("main");

 for(let i = 0; i < 10; i++){
     //creating the element
    let article = document.createElement("article")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let button = document.createElement("button")
    let p2 = document.createElement("p")
    article.classList.add("card")
    p2.classList.add("hidden")
    article.textContent = "Central Processing Unit";
    
    // append the element 
    main.append(article)
    article.append(h2)
    article.append(p)
    article.append(button)   
    article.append(p2)
    console.log(data.results);
}
})