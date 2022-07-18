// function hero(bullets, dragons){
//     if (bullets * 0.5 >= dragons) {
//         return true;
//     }  else {
//         return false;
//         }
//     }

hero = (bullets, dragons) => (bullets * 0.5 >= dragons) ? true : false;
console.log(hero(-5, 5));

