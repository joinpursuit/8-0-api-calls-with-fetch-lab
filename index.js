fetch("https://opentdb.com/api_category.php")
.then(response => response.json())
.then(categories => {
    buildDropDown(categories)

    let category = "-Choose A Category-"
    
    document.querySelector('select').addEventListener('change', (event) => {
        
        category = event.target.value

        displayCards(category)
        
    })

    document.querySelector('form').addEventListener('submit', (event) => {

        event.preventDefault()

        displayCards(category)

    })
})
.catch(console.log)


displayCards("-Choose A Category-")

