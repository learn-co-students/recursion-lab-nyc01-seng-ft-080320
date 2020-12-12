function printString(string) {
    let subString;

    console.log(string[0])

    if (string.length > 1) {
        subString = string.substring(1, string.length)
        printString(subString)
    } else {
        return true
    }
}

function reverseString(str) {

    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

  function isPalindrome(string) {

    if (string.length < 2) {
        // one letter left/middle letter means it is true (edge case)
        return true
    }
    else if (string[string.length - 1] === string[0]) {
        // compares first letter to last letter in string
        // matches and chops off the matches
        return isPalindrome(string.substring(1, string.length -1))
    } else {
        // does not match
        return false
    }
  }

function addUpTo(array, index) {
    let i = 0;
    sum = 0;

    while (i <= index - 1) {
        sum += array[i]
        i++
    }

    return sum
}


function addUpTo(array, index) {
    
    if (index) {
        return array[index] + addUpTo(array , --index)
    } else {
        // when index = 0
        return array[0]
    }
}

function maxOf(array) {

    if (array[array.length - 1] > array[array.length - 2]) {
        return maxOf(array.slice(0, array.length - 2) + array.slice(array.length -1, array.length))
    } else if (array[array.length - 1] < array[array.length - 2]) {
        return maxOf(array.slice(0, array.length - 1))
    } else {
        return array[0]
    }
}

function iterate(array, num) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return true
        }
    }

    return false
    
}

function includesNumber(array, num) {
    if (array[0] === num) {
        return true
    } else if (!array[0]) {
        return false
    }
    else {
        array.shift()
        return includesNumber(array, num)
    }
}