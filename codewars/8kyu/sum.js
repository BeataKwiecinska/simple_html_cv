let a = [3, 5]; 

function sumArray(array) {
    if (array === null || array === undefined) {
        return 0;
    } else if (array.length === 0) {
        return 0;
    } else if (array.length === 1) {
        return 0;
    } else { 
        let reducedArray = array.reduce(function(p, c) {
        return p + c;
    })
    let sumToSubstract = Math.min(...array) + Math.max(...array);
    return (reducedArray - sumToSubstract);
    }
}
console.log(sumArray(a)); 