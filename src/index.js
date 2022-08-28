module.exports = function toReadable (number) {

    // array for numbers from zero to eighteen, because many of them have unique spelling
    const numbersFromZeroToEighteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', '' , 'fifteen', '', '', 'eighteen'];
    
    // array for multiples of ten (they have unique spelling too)
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    // function for remainder of the division by ten (for example, (input -> output) 22 -> 2, etc.)
    const divisionByTenRemainder = (number) => number % 10;

    // function for tens (for example, (input -> output) 30 -> 3, etc.)
    const divisionByTen = (number) => Math.floor(number / 10);

    // function for hundreds (for example, (input -> output) 230 -> 2 etc.)
    const divisionByHundred = (number) => Math.floor(number / 100);

    // solution, when number contains one char
    if(number.toString().length === 1 || number === 10)
    {
        return numbersFromZeroToEighteen[number];
    }

    // solutions, when number conteins two chars
    else if(number.toString().length === 2)
    {
        if (number > 10 && number <= 13 || number === 15 || number === 18) return numbersFromZeroToEighteen[number];
        else if(number === 14 || number > 15 && number < 20) return numbersFromZeroToEighteen[divisionByTenRemainder(number)] + 'teen';
        else if (number % 10 === 0) return tens[divisionByTen(number)];
        else return tens[divisionByTen(number)] + ' ' + numbersFromZeroToEighteen[divisionByTenRemainder(number)];
    }

    // solution, when number conteins three chars
    else if(number.toString().length === 3)
    {
        if(number.toString().endsWith('00')) return numbersFromZeroToEighteen[divisionByHundred(number)] + ' hundred';
        if(number.toString().endsWith('10')) return numbersFromZeroToEighteen[divisionByHundred(number)] + ' hundred ' + 'ten';
        if(number.toString().endsWith('0')) return numbersFromZeroToEighteen[divisionByHundred(number)] + ' hundred ' + tens[divisionByTen(number - divisionByHundred(number) * 100)];
        if(number % 100 < 10) return numbersFromZeroToEighteen[divisionByHundred(number)] + ' hundred ' + numbersFromZeroToEighteen[divisionByTenRemainder(number - divisionByHundred(number) * 100 - divisionByTen(number - divisionByHundred(number) * 100) * 10)];
        if(number % 100 > 10 && number % 100 <= 13 || number % 100 === 15 || number % 100 === 18) return numbersFromZeroToEighteen[divisionByHundred(number)] + ' hundred ' + numbersFromZeroToEighteen[number - divisionByHundred(number) * 100];
        if(number % 100 === 14 || number % 100 > 15 && number % 100 < 20) return numbersFromZeroToEighteen[divisionByHundred(number)] + ' hundred ' + numbersFromZeroToEighteen[divisionByTenRemainder(number - divisionByHundred(number) * 100 - divisionByTen(number - divisionByHundred(number) * 100) * 10)] + 'teen';
        return numbersFromZeroToEighteen[divisionByHundred(number)] + ' hundred ' + tens[divisionByTen(number - divisionByHundred(number) * 100)] + " " +
                    numbersFromZeroToEighteen[divisionByTenRemainder(number - divisionByHundred(number) * 100 - divisionByTen(number - divisionByHundred(number) * 100) * 10)];
    }
}
