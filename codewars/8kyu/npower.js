function index(array, n){
    if (n > array.length || n < 0 ){
        return -1;
    } else {
        return Math.pow(array[Math.abs(n)], n);
    }
}
console.log(index([3,7,1,2], -2));