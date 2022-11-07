const factorial = () => {
    let num = 5;
    let facto = 1;
    for (let i = num; i > 0; i--) {
        facto = facto * i;
    }
    // setCalculate(facto);
    return facto;
}
console.log(factorial(5))