const API_URL = "https://opentdb.com/api.php?amount=10"
const mainElement = document.querySelector('main')
const formElement = document.querySelector('form')

formElement.addEventListener('submit', event => {
  event.preventDefault()

  // Remueve todo el HTML interno del elemento main (resetea las preguntas)
  mainElement.innerHTML = ''

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const questionsArr = data.results

      questionsArr.forEach(questionData => {
        // ARTICLE GENERATION LOGIC
        const articleElement = document.createElement('article')
        articleElement.classList.add('card')

        const articleContent = 
        `
          <h2>${questionData.category}</h2>
          <p>${questionData.question}</p>
          <button>Show Answer</button>
          <p class="hidden answer">${questionData.correct_answer}</p>
        `
        articleElement.innerHTML = articleContent

        // SHOW ANSWER BUTTON GENERETION LOGIC
        const showAnswerButton = articleElement.querySelector('button')

        showAnswerButton.addEventListener('click', () => {
          const answerElement = articleElement.querySelector('.answer')
          answerElement.classList.remove('hidden')
        })
        
        mainElement.appendChild(articleElement)
      })
    })

    .catch(err => console.log(err))
})
