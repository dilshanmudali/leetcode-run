// //-----------------REVERSE INTEGER 

// var reverse = function(x) {
//   //check for negatives and store it in a variable 
//    let negative = x < 0;
//    //set reversed to 0, our starting point if x is not negative
//    let reversed = 0;

//   //turn negative intigers positive by multiplying by -1
//    if(negative){
//      x *= -1
//    }

//   //if our integers are positive then: 
//   while(x > 0){
//     //set reversed = the reversed number * 10 + remaining number
//     reversed = (reversed*10) + (x % 10)
//     //chop off last digit of x
//     x = Math.floor(x/10)
//   }

//   //taking crare of 32 bit
//   if(reversed > (2**31 -1)) {
//     return 0
//   }

//   return negative ? (reversed * -1) : reversed; 

// };

// reverse(-123)

// //given 32 bit integer
// //ask what if the integer is negative?
// //what if last digit is zero? igore zero most cases 
// //can i use built in reverse method?


// //123 -> 321
// //-123 -> -321
// //120 -> 21
// //0 -> 0
// //+-2147483648 => 0

// //time complexity - O(n)
// //space complexity - O(1)


// ------------------------Palindrome Number

// restriction - canno't convert to string

// var isPalindrome = function(x) {
//     let reversed = 0
//     let starter = x
//     if(x < 0){
//         return false
//     }
    
//     while(x>0){
//         reversed = (reversed*10)+(x%10)
//         x = Math.floor(x/10)
//     }

//     return reversed === starter ? true : false
    
// };

// isPalindrome(121)


// -----------------------Roman to Integer

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var romanToInt = function(s) {
    let romanMap = {
      
    }
};


romanToInt("LVIII")