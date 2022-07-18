function even_or_odd(number) {
    if (number%2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    } 
}

even_or_odd2 = number => (number%2 === 0) ? 'Even' : 'Odd';
console.log(even_or_odd(9));
console.log(even_or_odd2(8));
// jeśli sprawdzam czy coś jest równe czemuś innemu to ===
// jeśli sprawdzam czy coś nie jest równe czemuś innemu lub czy nieistnieje to !==