// function paperwork(n, m) {
//     if (n <= 0 || m <= 0) {
//         return 0;
//     } else {
//         return (n * m);
//     }
// }

paperwork2 = (n, m) => (n <= 0 || m <= 0) ? 0 : (n * m); //ternary operator/

console.log(paperwork2(4, 4));
