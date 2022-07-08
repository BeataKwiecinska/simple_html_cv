function addition (dog) {
    let sum = dog+5;
     return sum;
}

function sum2 (a,b) {
    return a+b;
}

console.log(addition(sum2(12,9)));
console.log(sum2(9,addition(19)));
// sub = (a, b) => a-b;
// console.log(sub(5,2));