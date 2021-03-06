const binaryInsert = (array, insertValue, comparator) => {
    /*
    * These two conditional statements are not required, but will avoid the
    * while loop below, potentially speeding up the insert by a decent amount.
    * */
    if (array.length === 0 || comparator(array[0], insertValue) >= 0) {
        array.splice(0, 0, insertValue);
        return array;
    }
    else if (array.length > 0 && comparator(array[array.length - 1], insertValue) <= 0) {
        array.splice(array.length, 0, insertValue);
        return array;
    }
    var left = 0, right = array.length;
    var leftLast = 0, rightLast = right;
    while (left < right) {
        var inPos = Math.floor((right + left) / 2);
        var compared = comparator(array[inPos], insertValue);
        if (compared < 0) {
            left = inPos;
        }
        else if (compared > 0) {
            right = inPos;
        }
        else {
            right = inPos;
            left = inPos;
        }
        // nothing has changed, must have found limits. insert between.
        if (leftLast === left && rightLast === right) {
            break;
        }
        leftLast = left;
        rightLast = right;
    }
    // use right, because Math.floor is used
    array.splice(right, 0, insertValue);
    return array;
}

export default binaryInsert;