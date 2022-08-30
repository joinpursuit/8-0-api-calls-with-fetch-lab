// console.log('test')

// put our API base URL here as a const
const BASE_URL='https://opentdb.com/api.php'
const AMOUNT='0'

// selecting our form
const form=document.querySelector('form')
// console.log(form)
// selecting our card storage
const cards = document.querySelector('centered')

// listening to form submission 
form.addEventListener('submit', (event)=>{
    // console.log('food')
    // prevent default
    event.preventDefault()
    fetch(`${BASE_URL}?amount=${AMOUNT}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)

        // creating the card via dom man
        const card = document.createElement('card')
        card.classList.add("card");
        console.log(card)
    })
})




// log
/// 128pm linking this file to our html file
//  129pm testing via console.log, 
//  129pm SUCCESS
// 130pm putting our base url into variable
// 147pm selecting our form
// 149pm SUCCESS
// 154pm listening to form submission
// 813am 08/30 finish form listenr
// 821 SUCCESS
// 821 starting get request, checking api for endpoints
// 939 get request for every form submission, console log to test
// 942 creating the 'card' html framework via dom manip
// 954 created card element , added class attribute, console logged
// 954 SUCESS
// 954 pushing 'created card element , added class attribute, console logged'
//plan 

// after listening to form submission, on submit, create the framework of our card using DOM MANIPUALTION
// then after creating the framework, append to our main with the class of centerted