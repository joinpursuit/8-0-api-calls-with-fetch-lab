const getTrivia = () => {
  const url = 'https://opentdb.com/api.php?amount=10'
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('main.centered').remove()
      const main = document.createElement('main')
      data.results.forEach(el => {
        const triviaCard = document.createElement('article')
        if(el.difficulty === 'medium'){
            triviaCard.classList.add('medium')
        }
        triviaCard.classList.add('card')
        triviaCard.innerHTML = `<h2>${el.category}</h2> <p>${el.question}</p>`
        const button = document.createElement('button')
        const p = document.createElement('p')
        button.innerText = 'Show Answer'
        button.addEventListener('click', () => p.classList.remove('hidden'))
        p.innerText = el.correct_answer
        p.setAttribute('class', 'hidden')
        main.append(triviaCard)
        triviaCard.append(button, p)
      })
      main.setAttribute('class', 'centered')
      document.querySelector('body').append(main)
    })
}
document.querySelector('button').addEventListener('click', e => {
  e.preventDefault()
  console.log('hahah')
  getTrivia()
})
function show() {}
