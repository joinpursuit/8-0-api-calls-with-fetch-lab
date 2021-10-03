const buildDropDown = (obj) => {
    const dropDown = document.createElement('select')

    document.querySelector('form').append(dropDown)

    //make first category called random ---> default CATEGORY
    const random = document.createElement('option')
    random.textContent = "-Choose A Category-"

    dropDown.append(random)

    obj.trivia_categories.forEach(category => {
        const option = document.createElement('option')
        option.setAttribute('value', category.id)
        option.textContent = category.name
        dropDown.append(option)
    })

}