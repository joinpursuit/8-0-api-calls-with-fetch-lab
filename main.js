let form = document.querySelector('form')

const display = ({ results }) => {
  results.forEach((result) => {
    let { category, question, correct_answer } = result
    let main = document.querySelector('main')
    let article = document.createElement('article')
    article.classList.add('card')

    let h2 = document.createElement('h2')
    h2.textContent = category

    let p1 = document.createElement('p')
    p1.textContent = question

    let button = document.createElement('button')
    button.textContent = 'Show Answer'

    let p2 = document.createElement('p')
    p2.classList.add('hidden')

    main.append(article)
    article.append(h2, p1, button, p2)

    button.addEventListener('click', (event) => {
      event.preventDefault()
      p2.classList.toggle('hidden')
      p2.textContent = correct_answer
    })
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then(display)
    .catch((error) => {
      console.log(error)
    })
})


