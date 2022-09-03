const arr = [1, 2, 3, true, null, undefined, "Sameem"];

arr.push(6); // Adds an element at the end
arr.shift(); // Removes the first element
arr.unshift("JavaScript"); // inserts an element at the start

console.log(arr);

// Array Methods
// map, forEach, filter, reduce, concat, slice, splice

// outputs the indexes of the items in an array
for (const item in arr) {
  console.log("for loop (index)", item);
}

// outputs the items in an array
for (const item of arr) {
  console.log("for loop (items)", item);
}

arr.map((item) => {
  console.log("map method", item);
});

arr.forEach((item) => {
  console.log("forEach method", item);
});

// filter the items from an array
arr.filter((item) => {
  if (item === "JavaScript") {
    console.log("filter items", `${item} found`);
  } else {
    console.log("item not found");
  }
});

// outputs the specified portion of the array
const slicedArr = arr.slice(0, 3);
console.log("array after slicing", slicedArr);

// outputs the removed elements of the array
const splicedArr = arr.splice(4, 2);
console.log("array after splicing", splicedArr);
console.log("original arr after splicing", arr);
