const isReallyNaN = (val) => {
    if (val === undefined) {
        return false;
    } else {
        return isNaN(val);
    }
};
console.log(isReallyNaN(undefined));