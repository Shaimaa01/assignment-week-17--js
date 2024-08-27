// assignment 1
// Needed Output
// Set(3) {10, 20, 2}
// 2

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log([...setOfNumbers][2]);

// assignment 2
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

console.log(new Set(myFriends.sort()));

// assignment 3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let myInfoArray = Object.entries(myInfo);

let myInfoMap = new Map(myInfoArray);

console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));

// assignment 4
let theNumber = 100020003000;

// Needed Output
123;

console.log(
  parseInt(
    [...new Set(theNumber.toString())]
      .sort()
      .filter(function (el) {
        return el !== [...new Set(theNumber.toString())].sort().shift();
      })
      .join("")
  )
);

// assignemnt 5
let theName = "Elzero";

// Needed Output
["E", "l", "z", "e", "r", "o"];

// method to turn string to an array

//first way
console.log([...theName]);

//second way
console.log(theName.split(""));

//third way
console.log(Array.from(theName));

//fourth way
console.log(Object.values(theName));

// fifth way
theArrayName = [];
for (i = 0; i < theName.length; i++) {
  theArrayName.push(theName[i]);
}
console.log(theArrayName);

// assignment 6

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
//  let target = ["A", "B", "C", "A", "B", "C", "D", "E"];

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
//  let target = ["A", "B", "C", "D", "A", "B", "C", "D", "E"];

let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
let target = ["Z", "Y", "Z", "Y", "A", "D", "E"];

// Step 1: Extract numbers and letters
let charsNumber = [];
let charsLetter = [];

chars.forEach(function (el) {
  if (typeof el === "number") {
    charsNumber.push(el);
  } else {
    charsLetter.push(el);
  }
});

// Step 2: Create the final array with numbers replaced by letters
let finalArray = [...charsNumber, ...charsLetter];
let startIndex = charsNumber.length;
let endIndex = startIndex * 2;

// Step 3: Replace the numbers with the first few letters
finalArray.copyWithin(0, startIndex, endIndex);

console.log(chars);
console.log(charsLetter);
console.log(charsNumber);

console.log(finalArray);
console.log(target);

// assignment 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6];

// First way
console.log([...numsOne, ...numsTwo]);
// Second way
console.log(numsOne.concat(numsTwo));
// Thired way
let allArrays = numsTwo.reduce(
  (acc, current) => {
    acc.push(current);
    return acc;
  },
  [...numsOne]
); // Initial value of acc is a copy of numsTwo
console.log(allArrays);

// assignment 8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
//210

console.log([...n1, ...n2].length * Math.max(...n2));
