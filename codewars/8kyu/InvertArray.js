arr = [0, 1, 2]
function invert(array) {
    if (array.lenght === 0) {
        return [];
    }
    let arrayReverse = array.map(function(el) {
        if (el > 0) {
            return el * -1;
        } else if (el < 0) {
            return Math.abs(el)
        } else if (el === 0) {
            return -0;
        }
    })
    return arrayReverse;
 }
 console.log(invert(arr));

