let array =[1,-4,-7, 12]
function positiveSum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(positiveSum(array));

function positiveSum2(arr) {
    let positveElements = arr.filter(function(el) {
        return el > 0;
    })
    let sumOfPositive = positveElements.reduce(function(c, n) {
        return c + n;
    })
    return sumOfPositive;
}
positiveSum2(array);