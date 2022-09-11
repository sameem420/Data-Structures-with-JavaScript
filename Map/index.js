const map = new Map([
  ["Name", "Sameem"],
  ["Age", 101],
]);

// Creating Map from an Object
const userData = {
  name: "John Doe",
  phone: "Samsung",
};
const userDataMap = new Map(Object.entries(userData));
console.log(userDataMap);

// Iterating over a Map
for (const item of map) {
  console.log(item);
}

map.forEach((item) => {
  console.log(item);
});

// Accessing a specific key in the Map
console.log("Name : ", map.get("Name"));

// Adds a new value to the Map
map.set("favoriteLanguage", "JS");
console.log(map);

// Deletes a value from the Map
map.delete("Age");
console.log(map);

// Check if a key exists in the Map (will return true else false)
console.log(map.has("favoriteLanguage"));

// Returns the size or number of items in the Map
console.log(map.size);

// Clears up the Map
map.clear();
