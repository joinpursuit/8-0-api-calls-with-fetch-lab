const buildURL = (id) => {
    if(id === "-Choose A Category-"){
        console.log('Ran')
        return "https://opentdb.com/api.php?amount=10"
    }

    return  "https://opentdb.com/api.php?amount=10&category=" + id

}