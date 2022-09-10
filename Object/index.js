const obj = {
  name: "Thor",
  Age: 1500,
  Strength: "Strongest Avenger",
  fullName: function () {
    return this.name + " OdinSon";
  },
};

// adds a new property as key-value pair to the object (obj)
obj.hobby = "Proving his worthiness";
console.log("New property added to obj : ", obj);

// outputs the keys of the object (obj)
console.log(Object.keys(obj));

// outputs the values of the object (obj)
console.log(Object.values(obj));

// deletes a property from the object (obj)
delete obj.hobby;
console.log("removes a property from obj :", obj);

// accessing a single property in object (using dot notation)
console.log(obj.name);

// accessing a single property in object (using bracket notation)
console.log(obj["Strength"]);

// invoking a function inside an object
console.log(obj.fullName());

// NOTE : When a JavaScript variable is declared with the keyword "new", the variable is created as an object,
// It slows down the execution speed of them

Object.entries(obj).map((item, idx) => {
  console.log(item[1], idx);
});

Object.seal(obj);
obj.Age = 1000;
console.log(obj);

Object.freeze(obj);
obj.Age = 2000;
console.log(obj);
