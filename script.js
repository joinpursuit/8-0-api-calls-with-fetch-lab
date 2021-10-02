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










