//function accepts 2 arrays: one of keys and one of values
//function should return and object created from the keys and values.
//if there are not enough values, the rest of the keys will have a value of null. iI there are not enough keys, the rest of the values will be ignored. 

function twoArrayObject(keys, values) {
    let newObject = {};

    for(let i = 0; i < keys.length; i++) {
        if(i < values.length) {
            newObject[keys[i]] = values[i];
        } else {
            newObject[keys[i]] = null;
        }
    }

    return newObject;
}
