let  integers = [1, 2, 3, 5, 8, 9];
function maps(x) {
    let integersMaped = x.map(function(el) {
        return el * 2;
    })
    return integersMaped;
}

maps2 = x => x.map((el) => el * 2);

console.log(maps2(integers));



