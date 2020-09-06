module.exports = app => {

    const service = {};

    var repeat = (c, count) => {
        result = '';
        for (i = 0; i < count; i++) {
            result += c
        };
        return result;
    };

    var singularNumber = (number, onesSign, fivesSign, tensSign) => {
        switch (number) {
            case 0:
                return '';
            case 1:
            case 2:
            case 3:
                return repeat(onesSign, number);
            case 4:
                return onesSign + fivesSign;
            case 5:
                return fivesSign;
            case 6:
            case 7:
            case 8:
                return fivesSign + repeat(onesSign, number - 5);
            case 9:
                return onesSign + tensSign;
        };
    };

    service.numberToSymbol = (number) => {
        var thousands = Math.floor(number / 1000) % 10;
        var hundreds = Math.floor(number / 100) % 10;
        var tens = Math.floor(number / 10) % 10;
        var ones = number % 10;

        var romanThousands = repeat('M', thousands);
        var romanHundreds = singularNumber(hundreds, 'C', 'D', 'M');
        var romanTens = singularNumber(tens, 'X', 'L', 'C');
        var romanOnes = singularNumber(ones, 'I', 'V', 'X');

        return '' + romanThousands + romanHundreds + romanTens + romanOnes;
    };

    return service;
}