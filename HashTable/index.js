class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  // Checks if table is empty
  isEmpty() {
    return this.size === 0;
  }
  // Gets the size of the table
  getSize() {
    return this.size;
  }
  // Hash function that converts string to numeric index
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  // Adds a key-value pair to the table
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  // retrieves a value from the table given the key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  // removes key-value pair from the table
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
  // Prints all the values in table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Sameem");
table.set("age", 101);
table.display();
console.log(table.get("name"));
table.remove("name");
table.display();
console.log("HashTable is empty ? ", table.isEmpty());
console.log("HashTable size = ", table.getSize());
