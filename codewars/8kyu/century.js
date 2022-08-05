function century1(year) {
   if (year%100 !== 0) {
       return Math.ceil(year/100);
   } else {
       return (year/100);
   }
}

century = year => (year%100 !== 0) ? Math.ceil(year/100) : (year/100);
console.log(century(1889));