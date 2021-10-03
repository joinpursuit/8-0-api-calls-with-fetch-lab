const displayCards = (id) => {
    fetch(buildURL(id))
        .then(response => response.json())
        .then(makeCards)
        .catch(console.log)
}
