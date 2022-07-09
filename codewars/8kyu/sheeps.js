let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,   true,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

let arrayOfDog = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  true,  true,  true ,
    false, false, true,  true];
    
    console.log(countSheeps(arrayOfSheep));

function countSheeps(array) {
    let numberOfElement = 0;
    for (let element of array){
        if (element === true) {
            numberOfElement++;
        }
    }
    return numberOfElement;
}




// let name = 'beata';
// for (let letter of name) {
//     console.log(letter);
// }

// let colors = [ 'pink', 'white', 'black' ];
// for (let color of colors){
//     console.log(color);
// }
