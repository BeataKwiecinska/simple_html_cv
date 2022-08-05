let array = [1, 2, 3, '4', 5, '6'];

function sumMix2(x){
    let onlyNumbers = x.map(function(el) {
        return parseInt(el);  //zamienia stringi na liczby całkowite - integer (parsuje)
    })
    let sumNumbers = onlyNumbers.reduce(function(c, n){
        return c + n;
    })
return sumNumbers;
}
console.log(sumMix2(array)); 

sumMix = x => (x.map(el => parseInt(el))).reduce((c, n) => c + n);
console.log(sumMix(array));