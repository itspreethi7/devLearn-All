//1. Print 1 to 10 numbers using for loop
for (i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("Printed 1 to 10 numbers");

// 2. Print 1 to 20 even numbers using for loop
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("Printed 1 to 20 even numbers");

//3. Print sum of 1 to 100 numbers using for loop
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("Sum of 1 to 100 numbers is: " + sum);
console.log("Sum of 1 to 100 numbers printed");

// 4. Print elements in an array using for loop
let fruits = ["apple", "banana", "cherry", "mango"];
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("Printed Elements in an array");

//5. Add "_done" to Each String in an Array
let tasks = ["homework", "laundry", "email"];
for (i = 0; i < tasks.length; i++) {
  console.log(tasks[i] + "_done");
}
console.log("Tasks printed with _done");

// 6. Print numbers in reverse order using for loop
let nums = [1, 2, 3, 4, 5];
for (i = 5; i >= 0; i--) {
  console.log(nums[i]);
}
console.log("Printed Numbers in reverse order");

let string = "Hello";
for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i));
}
console.log("Printed each character of string");

//7. Count How Many Times a Value Appears in an Array
let colors = ["red", "blue", "green", "red", "blue", "red"];
let redCount = 0;
for (i = 0; i < colors.length; i++) {
  if (colors[i] == "red") {
    redCount++;
    console.log(redCount);
  }
}
console.log("Counted how many times a value appears in an array");

//8. Count Vowels in a String
let str = "javascript loops are fun";
let vowels = "aeiou";
let vowelCount = 0;
for (i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    vowelCount++;
  }
}
console.log("Number of vowels in the string: " + vowelCount);

//9. Push Even Numbers into a New Array
let numbers = [3, 6, 9, 12, 15, 18];
let evenNumbers = [];
let oddNumbers = [];
for(i=0; i<numbers.length; i++){
    if(numbers[i]%2 == 0)
        evenNumbers.push(numbers[i])

    else
        oddNumbers.push(numbers[i]);
        console.log(evenNumbers);
        console.log(oddNumbers);
}


//10. Multiply Each Element in an Array by 2
let scores = [10, 20, 30];
for(i=0; i<scores.length; i++){
    console.log(scores[i]*2);

}