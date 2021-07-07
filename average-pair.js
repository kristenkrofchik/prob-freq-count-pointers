//function accepts a sorted array of integers and a target average
//function will return true if the array includes at least one pair of integers where the average of the pair equals the target average.

function averagePair(sortedArr, targetAvg) {
    //create 2 pointers- one at index 0 and one at the last index of the sprtedArr
    let rightPointer = 0;
    let leftPointer = sortedArr.length -1;

    //create a loop that runs while the pointers are not crossed
    while(rightPointer < leftPointer) {
        //test that the average of the two values equal the targetAvg
        const average = (sortedArr[rightPointer] + sortedArr[leftPointer]) / 2
        //if they do, return true
        if(average === targetAvg) {
            return true;
        //if the average if higher than the target, lower the leftPointer
        } else if (average > targetAvg) {
            leftPointer--
        //if the average is lower than the target, raise the rightPointer
        } else {
            rightPointer++;
        }
    }
    return false;
}

