fetch("https://opentdb.com/api_category.php")
.then(response => response.json())
.then(obj => {
    buildDropDown(obj)

    let id = "-Choose A Category-"
    
    document.querySelector('select').addEventListener('change', (event) => {
        
        id = event.target.value

        displayCards(id)
        
    })

    document.querySelector('form').addEventListener('submit', (event) => {

        event.preventDefault()

        displayCards(id)

    })
})
.catch(console.log)


displayCards("-Choose A Category-")

