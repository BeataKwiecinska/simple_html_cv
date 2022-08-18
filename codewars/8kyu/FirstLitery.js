let str = 'Beata Kwiecinska'
function abbrevName(name){
    let arrayOfStrings = name.split(' ');
    arrayOfStrings = arrayOfStrings.map(function(el) {
        return el[0].toUpperCase();
    })
    let strOutput = arrayOfStrings[0] + '.' + arrayOfStrings[1];
return strOutput;
}

console.log(abbrevName(str));