// accepts two strings (all lowercase, no space or special char): message and letters
// should return true if the message can be built with letters; otherwise should return false
//constraint: O(M + L) where M is the length of message and N is the length of letters


function constructNote(message, letters) {
    let messageChars = makeFreqCounter(message);
    let lettersChars = makeFreqCounter(letters);

    for(let char of messageChars) {
        if(lettersChars[char] >= messageChars[char]) {
            return true;
        }
    }
    return false;
}

function makeFreqCounter(str) {
    let freqCounter = {};
    for(let char of str) {
        freqCounter[char] = (freqCounter[char] + 1) || 1;
    }
    return freqCounter;
}
