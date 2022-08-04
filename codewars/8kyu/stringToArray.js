function digitize(n) {
n = n.toString(); //zrób z liczby stringa
let stringToArray = [...n]; //weź stringa i zrób z niego tabele
let reversedArray = stringToArray.reverse(); //odrócić kolejność elementów w tabeli
reversedArray = reversedArray.map(el => parseInt(el)); //parseInt - zmień na liczbę
return reversedArray;
}
console.log(digitize(1234));
