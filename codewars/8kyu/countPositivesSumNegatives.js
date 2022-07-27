let array = [0, 0];
function countPositivesSumNegatives(input) {
  let numbersOfPositive = 0;
  let sumOfNegative = 0;
  let output = [];
  if (input === null) {
      return [];
  } else if (input.length === 0) {
    return [];
  } else {
    for (let i=0; i<input.length; i++) {
      if (input[i] > 0) {
            numbersOfPositive = numbersOfPositive + 1;
        } else if (input[i] < 0) {
            sumOfNegative = sumOfNegative + input[i];
        } else if (input[i] === 0) {

        }
    }
    output.push(numbersOfPositive);
    output.push(sumOfNegative)
    return output;
    }
} 
console.log(countPositivesSumNegatives(array));