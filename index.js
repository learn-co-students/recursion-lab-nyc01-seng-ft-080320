// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
  
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }


  function reverseString(myString) {
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }

  function isPalindrome(string){

        
           if (string.length < 2) {
             return true;
         } else if(string[0] === string[string.length-1]){
             let subString=string.substring(1, string.length-1)
             console.log(subString)
             return isPalindrome(subString)
         } else {
             return false
         }
     }


     function addUpTo(array, index){
        if(index === 0){
          return array[0]
        }
      
      return addUpTo(array, index-1) + array[index]
        
      }


  
        function maxOf(myArray) {
            if (myArray.length === 1) {
                return myArray[0];
               } else {
              return Math.max(myArray.pop(), maxOf(myArray));
            }
          }

  
          function arrInclude(array, n){
            if(array.length>0){
              if(array[0]===n){
                return true
              } else{
                array.shift()
                return arrInclude(array,n);
              }
            } 
            
            return false
          }
          
            function includesNumber(array, n){
                if(array.length>0){
                  if(array[0]===n){
                    return true
                  } else{
                    array.shift()
                    return includesNumber(array,n);
                  }
                } 
                
                return false
              
              
              }
          