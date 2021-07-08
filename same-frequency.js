// function accepts two positive integers
//returns true if the two numbers have the same frequency of digits, otherwise returns false

function sameFrequency(int1, int2) {
    //create frequency counters for the given integers
    let int1Counter = makeFreqCounter(int1);
    let int2Counter = makeFreqCounter(int2);

    //if the frequncy of any digit in int1 does not match the frequency in int2, return false
    for(char of int1.toString()) {
        if(int1Counter[char] != int2Counter[char]) {
            return false;
        }
    }
    //else, return true
    return true;
}

//helper function to make a frequency counter from a number
function makeFreqCounter(num) {
    let freqCounter = {};

    let numString = num.toString();

    for(char of numString) {
        freqCounter[char] = (freqCounter[char] + 1) || 1;
    }

    return freqCounter;
}
