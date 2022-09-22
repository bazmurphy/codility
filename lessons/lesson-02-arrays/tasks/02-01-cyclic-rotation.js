// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

// CyclicRotation

// Rotate an array to the right by a given number of steps.

// An array A consisting of N integers is given.
// Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place.
// For example, the rotation of array A = [3, 8, 9, 7, 6] is[6, 3, 8, 9, 7](elements are shifted right by one index and 6 is moved to the first place).

// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

// Write a function:

//   function solution(A, K);

// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

// For example, given
// A = [3, 8, 9, 7, 6]
// K = 3

// the function should return [9, 7, 6, 3, 8].Three rotations were made:
// [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
// [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
// [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]

// For another example, given
// A = [0, 0, 0]
// K = 1

// the function should return [0, 0, 0]

// Given
// A = [1, 2, 3, 4]
// K = 4

// the function should return [1, 2, 3, 4]

// Assume that:

//   N and K are integers within the range[0..100];
//   each element of array A is an integer within the range[−1, 000..1, 000].

// In your solution, focus on correctness.The performance of your solution will not be the focus of the assessment.


function solution(a, k) {

  // handle empty arrays because:
  // N and K are integers within the range [0..100];
  if (!a.length) {
    return a;
  } else {
    // remove the last element from the array and store it temporarily
    // add the last element to the start of the array
    // do this "k" number of times
    // return the array
    for (let i = 0; i < k; i++) {
      let lastElement = a.pop();
      a.unshift(lastElement);
    }
    return a;
  }
}

console.log(solution([3, 8, 9, 7, 6], 3));
// [9, 7, 6, 3, 8]

console.log(solution([0, 0, 0], 1));
// [0, 0, 0]

console.log(solution([1, 2, 3, 4], 4));
// [1, 2, 3, 4]