// accepts two strings (all lowercase, no space or special char): message and letters
// should return true if the message can be built with letters; otherwise should return false
//constraint: O(M + L) where M is the length of message and N is the length of letters

function constructNote(message, letters) {
    //use helper function makeFreqCounter() to create freq counters for message and letters
    let messageChars = makeFreqCounter(message);
    let lettersChars = makeFreqCounter(letters);

    //if the message is empty, return true
    if(message === '') {
        return true;
    }

    //if the count for a char in letters is greater than or equal to the count for the same char in message, return true
    for(let char of message) {
        if(lettersChars[char] >= messageChars[char]) {
            return true;
        }
    }
    //else return false
    return false;
}

//helper function to make a frequency counter from a string
function makeFreqCounter(str) {
    let freqCounter = {};
    for(let char of str) {
        freqCounter[char] = (freqCounter[char] + 1) || 1;
    }
    return freqCounter;
}


