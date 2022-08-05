function bonusTime1(salary, bonus) {
    if (bonus === true) {
        return '\u00A3' + (salary * 10) 
    } else {
        return '\u00A3' + salary;
    }
}

bonusTime = (salary, bonus) => (bonus === true) ? '\u00A3' + (salary * 10) : '\u00A3' + salary;

console.log(bonusTime(1000, false));