str = ("bitcoin take over the world maybe who knows perhaps")
// function findShort(s){
//     const stringArray = s.split(" ");
    // const orderedArray = stringArray.sort((a, b) => {
    //     return a.length > b.length;
    // })
// }
// return orderedArray[0].length;

// Porównuje długość dwóch słów, a następnie przechodzi do następnego aż do zakończenia.
// Zwraca słowa w kolejności ich długości
// zwraca długość pierwszego słowa (0 indeks tablicy)

findShort = (s) => ((s.split(" ")).sort((a, b) => a.length - b.length))[0].length;
console.log(findShort(str));