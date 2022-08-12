road = ("__nn_nnnn__n_n___n____nn__nnn");

function bump(x){
    function isN(a) {
        if (a === 'n') {
            return a;
        }
    }
    let nArray = [...x];
    nArray = nArray.filter(isN);
    if (nArray.length > 15) {
        return 'Car Dead';
    } else {
        return 'Woohoo!'
    }
}
console.log(bump(road));

