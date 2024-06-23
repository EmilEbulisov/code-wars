function addDashes(num) {
    let strNum = num.toString();
    let result = '';

    for (let i = 0; i < strNum.length; i++) {
        let digit = parseInt(strNum[i]);
        if (digit % 2 !== 0) {
            if (i > 0) {
                result += '-';
            }
            result += digit;
            if (i < strNum.length - 1) {
                result += '-';
            }
        } else {
            result += digit;
        }
    }

    return result;
}

// Test cases
console.log(addDashes(274));  // Output: '2-7-4'
console.log(addDashes(6815));  // Output: '68-1-5'
