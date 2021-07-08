//function accepts 2 arrays: one of keys and one of values
//function should return and object created from the keys and values.
//if there are not enough values, the rest of the keys will have a value of null. iI there are not enough keys, the rest of the values will be ignored. 

function twoArrayObject(keys, values) {
    //create a new empty object
    let newObject = {};

    for(let i = 0; i < keys.length; i++) {
        //if the index is less than the length of values, use the value at that index
        if(i < values.length) {
            newObject[keys[i]] = values[i];
        //if the index is greater than the length of values, use null
        } else {
            newObject[keys[i]] = null;
        }
    }

    return newObject;
}
