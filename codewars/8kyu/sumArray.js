let numbersArray = [1, 5.2, -4, 0, -1]; 
// function sum (input) {    
//     let sumOfNumbers = 0; 
//     for (let i=0; i<input.length; i++) {
//         sumOfNumbers += input[i];
//     }
//     return sumOfNumbers;
// };

// console.log(sum(numbersArray));

let na = numbersArray.reduce(function(a, b) {
    return a + b;
})

console.log(na);