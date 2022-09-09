const set = new Set([1, 2, 3]);

// adds a new value to the set
set.add(4);
console.log(set);

// deletes a value from the set
set.delete(2);
console.log(set);

// check if a value is present in the set (returns true)
console.log(set.has(3));

// size / length of a set
console.log("Size / Length : ", set.size);

// iterating over a set values
set.forEach((item) => {
  console.log(item);
});

// Clear / Empty a set
console.log("-set cleared-", set.clear());
