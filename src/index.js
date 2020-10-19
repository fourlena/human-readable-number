module.exports = function toReadable (number) {
    if (number === 0){
        return 'zero'
    }
        let initial_numbers = {
           1: 'one',
           2: 'two',
           3: 'three',
           4: 'four',
           5: 'five',
           6: 'six',
           7: 'seven',
           8: 'eight',
           9: 'nine',
           10: 'ten',
           11: 'eleven',
           12: 'twelve',
           13: 'thirteen',
           14: 'fourteen',
           15: 'fifteen',
           16: 'sixteen',
           17: 'seventeen',
           18: 'eighteen',
           19: 'nineteen',
           20: 'twenty',
           30: 'thirty',
           40: 'forty',
           50: 'fifty',
           60: 'sixty',
           70: 'seventy',
           80: 'eighty',
           90: 'ninety'
           }
           let ostatoc = 0;
           let hungred = 0;
           let ten = 0; 
       if ( number <=20 ){
           return initial_numbers[number];
       }
       else if(number <= 99){
        if (number % 10 === 0){
           return initial_numbers[number]; 
        }
        else{
            ostatoc = number % 10
            ten = number - ostatoc
            return initial_numbers[ten] + ' ' + initial_numbers[ostatoc]
        }
       }
       else if(99 < number <= 999){
        hundred = Math.floor(number / 100)
        if (number % 100 === 0 ){
            return initial_numbers[hundred] + ' ' +'hundred'
        }
        else if (number%100 <= 20 && number % 100 > 0){
            ten = number%100
            return initial_numbers[hundred] + ' ' +'hundred' +' '+ initial_numbers[ten]
        }
        else {
            digit = number % 100 % 10
            ten = number % 100
            if (digit === 0){
            return initial_numbers[hundred] + ' ' +'hundred' +' '+ initial_numbers[ten]
            }
             else {
                ten = number % 100 - digit
                }
            }
            return initial_numbers[hundred] + ' ' +'hundred' +' '+ initial_numbers[ten] +' '+ initial_numbers[digit]
        }
}
