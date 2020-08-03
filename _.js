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
};



const word = string => {
    let wordString = string.split('');
    let isPalindrome = true;
    
    for (let i = 0; i < wordString.length; i++){
        if (wordString[i] !== wordString[wordString.length - i]){
            isPalindrome = false;
        }
    }

    return isPalindrome;
}





// Do not write or modify code below this line.
module.exports = _;