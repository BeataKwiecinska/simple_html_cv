const isReallyNaN1 = (val) => {
    if (val === NaN) {
        return true;
    } else if (val === undefined) {
        return false;
    } else {
    return isNaN(val);
    }
};

isReallyNaN = (val) => (val === NaN) ? true : false;

console.log(isReallyNaN1(undefined));