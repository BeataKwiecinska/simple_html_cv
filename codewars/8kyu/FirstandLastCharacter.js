//operator rozproszenia tworzenie tabeli z stringa
// let first = str.charAt(0);
// let last =  str.charAt(str.length - 1);

   
alphabet = 'absdef'
function removeChar1(str) {
   let strArray = [...str]; 
strArray = strArray.slice(1, strArray.length - 1 )
return strArray
   };
console.log(removeChar1(alphabet));

removeChar = str => [...str].slice(1, str.length - 1 ).join().replace(/,/g, '')
console.log(removeChar(alphabet));