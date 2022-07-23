let numbers = [1, 3, 5, 7, 8, 9, 11];
let numbersMaped = [];
numbersMaped = numbers.map(function(el) {
    return el * 2;
})

let numbersMaped2 = numbers.map(el => el * 4);
console.log(numbersMaped2);

let names = ['ben', 'mat', 'kate', 'eva' ];
let namesMaped = names.map(function(el){
    // return el.toUpperCase(); //powiększa wszystkie litery
    return (el[0].toUpperCase() + el.slice(1, el.length));
})
console.log(namesMaped);