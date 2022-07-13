let queue  = ['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'];

function warnTheSheep(q) {
    if (q[q.length - 1] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    } else {
        for (let i = 0; i <= q.length; i++) {
            if (q[i] === 'wolf') {
                if (q[i+1] === 'sheep') {
                    return `Oi! Sheep number ${q.length - (i+1)}! You are about to be eaten by a wolf!`;
                }
            }
        }    
    }
        

}
console.log(warnTheSheep(queue));