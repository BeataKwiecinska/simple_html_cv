let queue  = ['sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep', 'sheep'];

function warnTheSheep(q) {
    if (q[q.length - 1] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    } else {
        let j = 1;
        for (let i=q.length - 1; i>0; i--) {
           j += 1;
            if (q[i] === 'wolf') {
                return `Oi! Sheep number ${j-2}! You are about to be eaten by a wolf!`
            }
        }
        
    }
}
console.log(warnTheSheep(queue));