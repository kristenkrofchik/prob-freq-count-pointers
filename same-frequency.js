// function accepts two positive integers
//returns true if the two numbers have the same frequency of digits, otherwise returns false

function sameFrequency(int1, int2) {
    let int1Counter = makeFreqCounter(int1);
    let int2Counter = makeFreqCounter(int2);

    for(char of int1.toString()) {
        if(int1Counter[char] != int2Counter[char]) {
            return false;
        }
    }
    return true;
}

function makeFreqCounter(num) {
    let freqCounter = {};

    let numString = num.toString();

    for(char of numString) {
        freqCounter[char] = (freqCounter[char] + 1) || 1;
    }

    return freqCounter;
}
