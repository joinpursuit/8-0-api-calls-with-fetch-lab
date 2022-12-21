const BASE_URL = `https://opentdb.com/api.php?amount=10`

//const trivs = document.querySelectorAll('div')
const main = document.querySelector('main')

const mainButton = document.querySelector('.mainbutton')
//let header, par, answerButt, answerPar, art

let answerPar, art

mainButton.addEventListener('click', (event) => {
    event.preventDefault()
    //console.log(mainButton, `this is a test`)
// for (let i= 0; i < 10; i++){
    //const div = document.createElement('div')
    // main.append(div)
    //div.append(art)
    
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((x) => {
        console.log(x)
        let results = x.results
        for (let q=0; q < results.length; q++){
            art = document.createElement('article')
            art.setAttribute('class', 'card')
            let category = results[q].category
            let question = results[q].question
            let ans = results[q].correct_answer
            // header.textContent = category
            // par.textContent = question
            //answerPar.textContent = ans
            //artDiv.innerHTML = `<p class="hidden">${ans}</p>`
            art.innerHTML = `
            <h2>${category}</h2>
            <p>${question}</p>
            <button class="ans">Show Answer</button>
            <p class="hidden">${ans}</p>`
        //     let boton = document.querySelectorAll('.ans')
        //     for (let bot of boton){
        //     bot.addEventListener('click', (event) => {
        //         event.preventDefault()
        //         document.querySelector('.hidden').classList.remove('.hidden')
            
        //     })
        // }

            main.append(art)
        }
    })
    .catch((e) =>{
        console.log(e)
    })

//header.textContent = `questionnn`

})

