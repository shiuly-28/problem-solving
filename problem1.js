// problem-1
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];

    }
    return reversed
}
// console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// console.log(countVowels("programming"));

// Problem 3: Check for Palindrome
function isPalindrome(num) {
    let reversed = num.split("").reverse().join("");
    return num === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome('hello'));

// Problem 4: Find the Maximum Number
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
// console.log(findMax("5, 1, 9 3"));

// Problem 5: Remove Duplicates from an Array

// function removeDuplicates(arr) {
//     let unique = [];
//     for (let num of arr) {
//         if (!unique.includes(num)) {
//             unique.push(num);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicates([1, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array
// function sumArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array
// function findEvenNumber(arr) {
//     let evens = [];
//     for (let num of arr) {
//         if (num % 2 === 0) evens.push(num);
//     }
//     return evens;
// }
// console.log(findEvenNumber([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
// function CapitalizeWords(str) {
//     return str
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join("");
// }
// console.log(CapitalizeWords("hello word"));

// Problem 9: Find the Factorial of a Number
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {

//     }
//     return result;
// }
// console.log(factorial([5]));

// Problem 10: PingPong Challenge
// function PingPong() {
//     for (let i = 1; i <= 20; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("PingPong");
//         } else if (i % 3 === 0) {
//             console.log("Ping");
//         } else if (i % 5 === 0) {
//             console.log("Pong");
//         } else {
//             console.log(i);
//         }
//     }
// }
// PingPong();