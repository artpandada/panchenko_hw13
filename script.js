function getPalindrom (number, step = 0){
    try {
        let reverseNumber = number.toString().split('').reverse().join('') * Math.sign(number);

        if (number === reverseNumber) {
            return {
                result: number,
                steps: step
            };
        }
        return getPalindrom(number + reverseNumber, step+1);
    }
    catch(e) {
        return "Переданное число не является палиндромом";
    }

}

console.log(getPalindrom(89));



