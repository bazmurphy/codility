// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

// BinaryGap

// Find longest sequence of zeros in binary representation of an integer.

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
// The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. 
// The number 20 has binary representation 10100 and contains one binary gap of length 1.
// The number 15 has binary representation 1111 and has no binary gaps.
// The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap.
// The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
// Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range[1..2,147,483,647].

function solution(n) {

  // convert the number into a string with "radix" 2
  // split the string on "1"
  // map the string to return each element length
  // apply Math.max() on the "spread operator'ed" array


  // n = n.toString(2);
  // n = n.split("1");
  // n.splice(n.length -1, 1); // < i ned to achieve this inline
  // n = n.map(element => element.length);
  // n = Math.max(...n);

  // return n;

  // return n.toString(2).split("1").map(element => element.length);
  // return n.toString(2).split("1").filter((element, index, array) => index !== array.length - 1).map(element => element.length);

  // return Math.max(...n.toString(2).split("1").splice(this.length -1, 1).map((element) => element.length));
  
  return Math.max(...n.toString(2).split("1").filter((element, index, array) => index !== array.length - 1).map(element => element.length));

}

// INITIAL IDEA:
// function solution(n) {

//   if (!number.includes("0")) {
//     return 0;
  
//   } else {

//     // iterate through the array, 
//     // store the index of the first 0 after a 1
//     // continue to loop through checking for subsequent zeros, incrementing a count each time
//     // store the index of the final 0 before a 1
    
//     let currentStartIndex;
//     let currentEndIndex;
//     let currentMaxZeros;

//     for (let i = 0; i < number.length; i++) {

//     }
//   }

// }

console.log(solution(9));
// 1001
// 2
console.log(solution(529));
// 1000010001
// 4
console.log(solution(20));
// 10100
// 1
console.log(solution(15));
// 1111
// 0
console.log(solution(32));
// 100000
// 0
console.log(solution(1041));
// 10000010001
// 5
console.log(solution(2,147,483,647));
// 10
// 0