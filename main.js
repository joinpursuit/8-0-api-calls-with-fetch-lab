//the api url
const BASE_URL = "https://opentdb.com/api.php?amount=10";

//get the button
const questionButton = document.querySelector("button");

questionButton.addEventListener("click", async (event) => {
    //prevent the button from doing what it normally would
    event.preventDefault();

    //fecth the url
    await fetch(BASE_URL)
        .then((res) => res.json())
        //get the data
        .then((data) => {
            console.log(data)
            //save the array to a variable
            let questions = data.results;
            //loop through array
            for (let i = 0; i < questions.length; i++){
                
            }




        })
        .catch((err) => {
            console.log(err);
        })

})