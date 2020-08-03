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
        }else {
            isInRange = false;
        }
        return isInRange;
    }, 

    words() {

    },
};


// Do not write or modify code below this line.
module.exports = _;