//2. Array Methods Practice

// Concatenate two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let concatenatedArray = arr1.concat(arr2); //Combines arr1 and arr2

// Add an element to the end of an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //Adds "Kiwi"

// Add elements to the beginning of an array
let array1 = [1, 2, 3];
array1.unshift(4, 5); //Adds 4 and 5 at the start

// Remove the last element of an array
fruits.pop(); //Removes "Kiwi"

// Remove the first element of an array
let array2 = [1, 2, 3];
array2.shift(); //Removes the first element (1)

// Sort an array alphabetically
fruits.sort(); //Sorts fruits alphabetically

// Create a new array from a portion of another array
let slicedFruits = fruits.slice(1, 3); //Gets elements at index 1 and 2

// Add/remove elements at a specific index
let months = ["January", "February", "March", "April"];
months.splice(2, 1, "New Month"); //Replaces "March" with "New Month"

// Display the results
console.log("Concatenated Array:", concatenatedArray);
console.log("Fruits Array:", fruits);
console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Sliced Fruits:", slicedFruits);
console.log("Months Array:", months);

//https://www.w3schools.com/js/js_array_methods.asp
//https://javascript.info/array-methods