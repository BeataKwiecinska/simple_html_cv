let numbers = [1, 3, 5, 1, 8, 9, 11];
let usersAge = [12, 23, 18, 13, 45];
let names = ['Matt', 'Beata', 'Ben', 'Tom', 'Zuza'];

function checkNameLength(name){
    return name.length > 3;
}

let longNames = names.filter(checkNameLength);
console.log(`Long names: ${longNames}`);

function checkNameSex (name){
   let lastLeter = name[name.length - 1]; //ostatnia litera
   if (lastLeter === 'a'){
       return name;
   }
}

let femaleNames = names.filter(checkNameSex);
console.log('Female names: ' + femaleNames);

function checkAge(ages) {
    return ages >= 18;
}

let adultUsers = usersAge.filter(checkAge);

let filteredNumbers = numbers.filter(function(el) {
    return el < 5;
})

console.log(adultUsers);