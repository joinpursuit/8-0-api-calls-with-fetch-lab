// let url = `https://api.unsplash.com/search/photos?query=${user_input.value}&per_page=1&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
fetch("https://opentdb.com/api.php?amount=10")
.then(response => {
   if (!response.ok) throw Error(response.statusText);
      return response.json();  //.json is a method that converts the response data to json - javascript object notation
})
.then(data => {
   document.querySelector("submit").textContent = "";
   document.querySelector("#random_image").style.backgroundImage = `url(${data.results[0].urls.raw})`;
})
.catch(error => document.querySelector("#isValid").textContent = error);

//button.addEventListener("click", () => {
    fecth('url')
    .then((res) => res.json())
    .then(resJson) => {
        console.log(resJson)
    }
})
.catch((err)=> console.log(err))

//const button = document.querySelector('button')
// console.log(button)

// button.addEventListener("click", () => {
//     // console.log("I've been clicked")
//     fetch("https://pokeapi.co/api/v2/pokemon")
//         .then((res) => res.json())
//         .then((resJson) => {
//             // console.log(resJson.results)
//             const results = resJson.results
//             results.forEach((result) => {
//                 console.log(result)
//             })

//         })
//         .catch((err) => console.log(err))