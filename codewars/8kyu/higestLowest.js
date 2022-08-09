let n = ("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
let array = n.split(' '); //zamieniam stringa na tabele
console.log(array);
highAndLow1 = (numbers) =>  (Math.max(...numbers)) + ' ' + (Math.min(...numbers));

function highAndLow(numbers) {
  let numbersArray = numbers.split(' ');
  numbersArray = numbersArray.map(el => parseInt(el)) //wez element i przerub na liczbę
  return (Math.max(...numbersArray)) + ' ' + (Math.min(...numbersArray));
}