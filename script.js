

const BASE_URL = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';
const API_KEY = "d6c670c28f93644a33f7cfd69726a0cb2ce5d7f8be70dedea0ef784030dc6d25"
const questionButton = document.querySelector("button");





questionButton.addEventListener('click', async (event) => {
  event.preventDefault()
    //let giphy = giphyInput.value

    await fetch(BASE_URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
          // let gif = response.data
          // for (let i = 0; i < gif.length; i++){
          // }
        let questions = response.results
        for (let i=0; i<questions.length; i++){
          
        }
  
      })
      .catch((error) => {
      console.log(error)
    })
  })
  
  