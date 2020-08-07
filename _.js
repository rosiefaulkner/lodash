const _ = {

    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end) {
       if(typeof end == 'undefined'){
            end = start;
            start = 0;
        }
       //console.log(start + '/' + end);
       if(start > end){
            let temp = end;
            end = start;
            start = temp;
        }
        //console.log(start + '/' + end);
        let isInRange = null;
        if(number >= start && number < end){
            isInRange = true;
        } else {
            isInRange = false;
        }
        return isInRange;
    }, 

    words(string) {
        let words = string.split(' ');
        return words;
    },

    pad(string, length) {
        if(length <= string.length){
            return string;
        }
        let space = ' ';
        let startPaddingLength = Math.floor((length - string.length)/2);
        let endPaddingLength = (length - string.length) - startPaddingLength;
        let paddedString = space.repeat(startPaddingLength) + string + space.repeat(endPaddingLength);
        return paddedString;
    },

    has(object, key) {
        if (key in object){
            hasValue = true;
            return hasValue; 
        } 
        else{
            hasValue = false;
            return hasValue; 
        };
    },

    invert(object) {
        let invertedObject = {};
        for (var key in object) {
            if(object.hasOwnProperty(key)){
                invertedObject[object[key]] = key;
            }
          }
        return invertedObject;
    },

    findKey(object, predicate) {
        for(var key in object) {
            let value = object[key];
            let predicateReturnValue = predicate[value];
            if(object.hasOwnProperty(key)){
                if (object[key]){
                    return key;
                }
            }
        }
        return undefined;
    },

    drop(array, n) {
        if(!n) {
            n = 1;
        }
        let droppedArray = array.slice(n);
        return droppedArray;
    },

    dropWhile(array, predicate) {
        const dropNumber = array.findIndex(element => element = true);

    },
};









// Do not write or modify code below this line.
module.exports = _;