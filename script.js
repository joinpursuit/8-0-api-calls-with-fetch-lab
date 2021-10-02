const removeJunk = (str) => {
    const trash = {
        "&quot;": "",
        "&#039;": `'`,    
        "&eacute;": "e",        
    };

    const regex = /(&quot;|&#039;|&eacute;)/g;
    return str.replace(regex, (junk) => {
        return trash[junk];
    });
}

fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple")
    










