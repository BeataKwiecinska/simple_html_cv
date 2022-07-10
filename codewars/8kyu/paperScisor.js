const rps = (p1, p2) => {
    if (p1 === 'paper' && p2 === 'scissors') {
        return 'Player 2 won!';    
    } else if (p1 === 'paper' && p2 === 'rock') {
       return 'Player 1 won!';
    } else if (p1 === 'paper' && p2 === 'paper') {
        return 'Draw!';

    } else if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return 'Player 2 won!';
    } else if (p1 === 'scissors' && p2 === 'scissors') {
        return 'Draw!';

    } else if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!';
    } else if (p1 === 'rock' && p2 === 'paper') {
        return 'Player 2 won!';
    } else if (p1 === 'rock' && p2 === 'rock') {
        return 'Draw!';
    }     


};
// rps('rock', 'scissors');


// switch (1) {
//     case 0:
//         console.log('niedziela');
//         break;
//     case 1:
//         console.log('poniedziałek');
//         break;    
// }

let p = 2;
let r = 4;
let s = 8;
let player1 = s; 
let player2 = p;

switch (p1/p2) {
    case 1:
       return 'Draw!';
        break;
    case 0.5:
        return 'Player 1 won!';
        break;
    case 0.25:
        return 'Player 2 won!';
        break;
    case 2:
        return 'Player 2 won!';
        break;
    case 4:
        return 'Player 1 won!';
        break;
}