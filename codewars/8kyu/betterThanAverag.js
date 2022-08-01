let array = [1, 5, 6, 3];
function betterThanAverage1(classPoints, yourPoints) {
    let sumOfClassPoints = 0; 
        for (let i=0; i<classPoints.length; i++) {
         sumOfClassPoints += classPoints[i];
        }
        if (sumOfClassPoints/classPoints.length < yourPoints) {
            return true; 
        } else {
            return false;
        }
  }

betterThanAverage = (classPoints, yourPoints) => ((classPoints.reduce((c, n) => c + n)/classPoints.length) < yourPoints) ? true : false;

console.log(betterThanAverage(array, 33));