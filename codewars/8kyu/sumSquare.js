let array = [1, 2, 2];

squareSum = numbers => numbers.length === 0 ? 0 : (numbers.map((el) => Math.pow(el, 2))).reduce((c, n) => c + n);

console.log(squareSum(array));

// potegaa Math.pow(liczba, wykładnik)