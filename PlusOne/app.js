//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.The digits are ordered from most significant to least significant in left - to - right order.The large integer does not contain any leading 0's.
//Increment the large integer by one and return the resulting array of digits.

let plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            if (i == 0) {
                digits = [digits.length + 1];
                digits[0] = 1;
            }
        }
    }
    return digits;
};
console.log(plusOne([1, 4, 12, 6]));