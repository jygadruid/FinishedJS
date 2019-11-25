const repeatString = function(string , times) {
    var repeatedString = "";
    if(times < 0) {
        return('ERROR') 
    }
    else if(times == 0) {
        return('')
    }
    while (times > 0) {
        repeatedString += string
        times--;
    }
    return(repeatedString)
}

module.exports = repeatString
