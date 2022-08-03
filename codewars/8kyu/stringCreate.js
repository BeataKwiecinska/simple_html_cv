function buildString1(...template){
    let begining = 'I like ';
    let output = begining + template.join(', ') + '!';
    return output;
}

buildString = (...template) => `I like ${template.join(', ')}!`;
console.log(buildString('Cheese','Milk','Chocolate'));