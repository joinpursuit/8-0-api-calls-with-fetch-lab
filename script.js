const datos = [
    {id: 9,cat: 'General Knowledge'},
    {id: 10,cat: 'Entertainment: Books'},
    {id: 11,cat: 'Entertainment: Film'},
    {id: 12,cat: 'Entertainment: Music'},
    {id: 13,cat: 'Entertainment: Musicals & Theatres'},
    {id: 14,cat: 'Entertainment: Television'},
    {id: 15,cat: 'Entertainment: Video Games'},
    {id: 16,cat: 'Entertainment: Board Games'},
    {id: 17,cat: 'Science & Nature'},
    {id: 18,cat: 'Science: Computers'},
    {id: 19,cat: 'Science: Mathematics'},
    {id: 20,cat: 'Mythology'},
    {id: 21,cat: 'Sports'},
    {id: 22,cat: 'Geography'},
    {id: 23,cat: 'History'},
    {id: 24,cat: 'Politics'},
    {id: 25,cat: 'Art'},
    {id: 26,cat: 'Celebrities'},
    {id: 27,cat: 'Animals'},
    {id: 28,cat: 'Vehicles'},
    {id: 29,cat: 'Entertainment: Comics'},
    {id: 30,cat: 'Science: Gadgets'},
    {id: 31,cat: 'Entertainment: Japanese Anime & Manga'},
    {id: 32,cat: 'Entertainment: Cartoon & Animations'},  
    ];



const section = document.querySelector('section')
const form = document.querySelector("form")
let categoria = 'Select a Category'
let canvas = document.querySelector("main") 
let catId= 9

function getCategoriaId(cat) {
    return (datos.find((x) => x.cat === cat).id)
}


fetch("https://opentdb.com/api.php?amount=10").then((response)=> {response.json().then((categories) => {
    const label = document.createElement('label')
    label.setAttribute("for","qtns")
    label.textContent =" Select Category"
    form.append(label)

    const select = document.createElement('select')
    //select.setAttribute('id','qtns')
    select.setAttribute('name','qtns')
    select.setAttribute('size','10')
    form.append(select)
   
   
    categories.results.map( (oneqtn) => {
         const option = document.createElement('option')
         option.setAttribute('value',oneqtn.category)
         option.textContent = oneqtn.category 
         select.append(option)
         
    })
   
   const  myBoton = document.createElement('button')
    myBoton.setAttribute('type','submit')
    myBoton.setAttribute('id','btn')
    myBoton.textContent = 'Get New Questions'
    form.append(myBoton)

   

    select.addEventListener('click', (event) => {
       event.preventDefault()
       categoria = event.target.value
       catId = getCategoriaId(categoria)
       
    } )

    myBoton.addEventListener("click",(event) => {
        event.preventDefault()
         if (categoria === 'Select a Category')
          alert('pick a category')
          else {
            
            // //canvas = document.querySelector("main") 
            let borrar = document.querySelectorAll('.card')
            if (borrar.length > 0) {
                for (let h=0; h < borrar.length; h++) {
                   // borrar[h].style.backgroundColor = "yellow"
                   borrar[h].remove()
                }
            }
            
            

            fetch(`https://opentdb.com/api.php?amount=10&category=${catId}`).then((response) => {
                response.json().then((questions) => {
                   
                    for (let i = 0; i < questions.results.length; i++) {
                                            const oneCard = document.createElement("article")
                                            oneCard.setAttribute("class", "card")
                        
                                            const h5 = document.createElement("h5")
                                            h5.textContent = `Difficulty: ${questions.results[i].difficulty}`
                                        
                                            oneCard.append(h5)
                                            
                                            const h2 = document.createElement("h2")
                                            h2.textContent = `CATEGORY: ${questions.results[i].category}`
                                            oneCard.append(h2)
                                            
                                            const p = document.createElement("p")
                                            p.textContent = `Question: ${questions.results[i].question}`
                                            oneCard.append(p)
                                            
                                            const bottonAnswer = document.createElement("button")
                                            bottonAnswer.textContent = "Show Answer"
                                            
                                            
                                            
                                            oneCard.append(bottonAnswer)
                        
                                            const pinv = document.createElement("p")
                                            pinv.setAttribute("class","hidden")
                                            pinv.innerHTML = `Correct Answer: ${questions.results[i].correct_answer}`
                                            oneCard.append(pinv)
                        
                                            if (questions.results[i].difficulty === "medium")
                                              {
                                                oneCard.style.borderColor = "yellow"
                                              }
                                            if (questions.results[i].difficulty === "hard") 
                                              {
                                                oneCard.style.borderColor = "red"
                                              }
                        
                                            canvas.prepend(oneCard)
                        
                                            
                                              bottonAnswer.addEventListener("click",()=> {
                                                 
                                                  pinv.style.display = "inline"
                                                        
                                                })
                          
                                            
                                        } 
                }).catch()
            }).catch()

          }
    })


    

})

}).catch()   

//const button = document.querySelector("button")
// button.addEventListener("click", (event)=> {
//     event.preventDefault()
//     fetch("https://opentdb.com/api.php?amount=10")
//     .then((response)=> {
//         response.json()
//             .then((questions)=> {
//                 console.log(questions)
                
//                 const canvas = document.querySelector("main")  
               
//                 for (let i = 0; i < questions.results.length; i++) {
//                     const oneCard = document.createElement("article")
//                     oneCard.setAttribute("class", "card")

//                     const h5 = document.createElement("h5")
//                     h5.textContent = `Difficulty: ${questions.results[i].difficulty}`
                
//                     oneCard.append(h5)
                    
//                     const h2 = document.createElement("h2")
//                     h2.textContent = `CATEGORY: ${questions.results[i].category}`
//                     oneCard.append(h2)
                    
//                     const p = document.createElement("p")
//                     p.textContent = `Question: ${questions.results[i].question}`
//                     oneCard.append(p)
                    
//                     const bottonAnswer = document.createElement("button")
//                     bottonAnswer.textContent = "Show Answer"
                    
                    
                    
//                     oneCard.append(bottonAnswer)

//                     const pinv = document.createElement("p")
//                     pinv.setAttribute("class","hidden")
//                     pinv.innerHTML = `Correct Answer: ${questions.results[i].correct_answer}`
//                     oneCard.append(pinv)

//                     if (questions.results[i].difficulty === "medium")
//                       {
//                         oneCard.style.borderColor = "yellow"
//                       }
//                     if (questions.results[i].difficulty === "hard") 
//                       {
//                         oneCard.style.borderColor = "red"
//                       }

//                     canvas.append(oneCard)

                    
//                       bottonAnswer.addEventListener("click",()=> {
                         
//                           pinv.style.display = "inline"
                                
//                         })
  
                    
//                 }
              
//             })
//             .catch((error) => {
//                 console.log(questions)
//                 console.log("we have an error")
//             } )
//     })
// })






