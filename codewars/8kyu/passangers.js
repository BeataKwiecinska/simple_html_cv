function enough2(cap, on, wait) {
    let outPassangers = wait - (cap - on);
    if (outPassangers > 0) {
        return `${outPassangers} # He can't fit ${outPassangers} of the ${wait} waiting`;
    } else {
        return `${outPassangers} # He can fit all ${wait} passengers`;
    }
}
console.log(enough(10, 5, 5));

function enough(cap, on, wait) {
    let outPassangers = wait - (cap - on);
    if (outPassangers > 0) {
        return outPassangers;
    } else {
        return 0;
    }
}

function enough3(cap, on, wait) {
    let outPassangers = wait - (cap - on);
    return ((outPassangers > 0) ? outPassangers : 0);
}

console.log(enough3(12, 2, 45));