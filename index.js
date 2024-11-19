// Exercise conditions in JS. //
// Part 1: Easy //

// #1 Basic greeting
function greet() {
  console.log("Hello World!");
}
greet();

// #2 Favorite number
function favoriteNumber() {
  console.log("21");
}
favoriteNumber();

// #3 Magic 8 Ball
function magicEightBall() {
  const responses = ["Yes", "No", "Maybe", "Ask again later"];
  const randomIndex = Math.floor(Math.random() * responses.length);
  console.log(responses[randomIndex]);
}
magicEightBall();

// #4 Current Year
function getCurrentYear() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
}
getCurrentYear();

// #5 Random Joke
function tellJoke() {
  const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "When Hobbits run... Do they get short of breath?",
    "What do you call fake spaghetti? An impasta!",
    "What does a storm cloud wear under his raincoat? Thunderwear",
  ];
  const randomIndex = Math.floor(Math.random() * jokes.length);
  console.log(jokes[randomIndex]);
}
tellJoke();

// #6 Personalized Greeting
function personalGreeting(name) {
  console.log(`Hello, ${name}!`);
}
personalGreeting("Nicholas");

// #7 Sum of Two Numbers
function add(num1, num2) {
  console.log(num1 + num2);
}
add(5, 4);

// #8 Age in Months
function ageInMonths(ageInYears) {
  console.log(ageInYears * 12);
}
ageInMonths(30);

// #9 Temperature Converter
function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
}
celsiusToFahrenheit(30);

// #10 Full Name
function getFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
getFullName("Nicholas", "Sjöstrand");

// #11 Area of a Rectangle
function calculateArea(length, width) {
  const area = length * width;
  console.log("The area of the rectangle is: " + area);
}
calculateArea(10, 4);

// #12 Find Maximum
function findMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
findMax(100, 105);

// #13 Count Vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  console.log(count);
}
countVowels("Hello, World!");

// #14 Discount Price
function calculateDiscount(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;
  console.log("Price after discount: " + finalPrice);
}
calculateDiscount(100, 50);

// #15 Reverse String
function reverseString(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed);
}
reverseString("Hello, World!");

// Part 2: Intermediate //

// #1 Palindrome Checker
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str == reversed;
}
console.log(isPalindrome("madam")); // is palindrome
console.log(isPalindrome("hello")); // not palindrome

// #2 FizzBuzz
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));

// #3 Factorial Calculator
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));

// #4 Longest Word
const findLongestWord = (sentence) => {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(findLongestWord("I love music"));

// #5 Array Average
const calculateAverage = (input) => {
  const sum = input.reduce(total + current, 0);
  const average = sum / input.length;
  return average;
};

// #6 Remove Duplicates
const removeDuplicates = (array) => {
  return [...new Set(array)];
};

// #7 Capitalize First Letter
const capitalizeFirstLetter = (input) => {
  if (!input) return "no input / null";
  else {
    return input[0].toUpperCase() + input.slice(1);
  }
};

// #8 Count Occurences
const countOccurences = (string, char) => {
  let count = 0;
  for (const letter of string) {
    if (letter === char) {
      count++;
    }
  }
};

// #9 Merge Arrays
const mergeArrays = (array1, array2) => {
  let combine = [...new Set([array1, ...array2])];
  return combine;
};

// #10 Random Password Generator
const passwordGenerator = (length, includeSpecialChars) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = lowercase + uppercase + numbers;
  if (includeSpecialChars.toLowerCase() === "yes") {
    characters += specialChars;
  }
};

// #11 Character Frequency
const charFrequency = (string) => {
  const frequency = {};
  for (let char of string) {
    if (frequency[char]) {
      frequency[char]++;
    } else frequency[char] = 1;
  }
  return frequency;
};

// #12 Intersection of Arrays
const arrayIntersection = (array1, array2) => {
  return array1.filter((element) => array2.includes(element));
};

// #13 String Reversal
const reverseWords = (str) => {
  console.log(str.split(" ").reverse().join(" "));
};

// #14 Find Minimum
const findMin = (value1, value2) => {
  if (value1 < value2) {
    console.log(`${value1} is the smaller number.`);
  } else if (value1 === value2) {
    console.log(`${value1} and ${value2} are the same value.`);
  } else {
    console.log(`${value2} is the smaller number.`);
  }
};
