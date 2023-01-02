/**
 * create variable to hold the API link
 * create variable and use DOM to select the button
 * create variable and use DOM to selection the 'main' element
 */
const BASE_URL = 'https://opentdb.com/api.php?amount=10';
const btn = document.querySelector('button');
const main = document.querySelector('main');

/**
 * Add event listener to know when the button is clicked to generate new questions
 * once clicked, we want 'fetch' our url
 * once we have our url, we want to convert it to json
 * now that we have the converted data
 * loop through ea. question and as we loop we are creating the elements that we will use for the formation of the trivia question
 */

btn.addEventListener('click', async (event) => {
    event.preventDefault()
     fetch (`${BASE_URL}`)
    .then((res) => res.json())
    .then((response) => {
       let question = response.results;
       for(let i = 0; i < question.length; i++){
        let article = document.createElement('article');
        article.className = 'card';
        console.log(article)
        
        let heading = document.createElement('h2');
        heading.textContent = question[i].category
        article.append(heading);

        let p = document.createElement('p');
        p.innerHTML = question[i].question
        heading.after(p);

        let button = document.createElement('button');
        button.textContent = 'Show Answer';
        p.after(button);

        let anothaP = document.createElement('p');
        anothaP.innerHTML = question[i].correct_answer
        anothaP.setAttribute('class', 'hidden');
        article.append(anothaP)
        

        button.addEventListener('click', () => {
            anothaP.classList.remove('hidden');
        })
         main.append(article)
        
       }//for closing tag
       //main.append(article)
    })
    .catch((error) => {
        console.log(error)
    })
})