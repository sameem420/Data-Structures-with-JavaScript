class Node {
  constructor(value) {
    this.value = value;
    // pointer that points to next node
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // head that points to the first node
    this.head = null;
    this.size = 0;
  }
  // Checks if List is empty
  isEmpty() {
    return this.size === 0;
  }
  // Gets the size of the list
  getSize() {
    return this.size;
  }
  // Inserts value at the start of the List
  prepend(value) {
    // Creating instance
    const node = new Node(value);
    if (this.isEmpty()) {
      // head now holds the value of node
      this.head = node;
    } else {
      // next node points to head / first node
      node.next = this.head;
      // head now hold the new node value
      this.head = node;
    }
    this.size++;
  }
  // Inserts value at the given index in list
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
      this.size++;
    }
  }
  // removes value from the given index in list
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removeNode = previous.next;
      previous.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }
  // removes given value from the list
  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty!");
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      console.log(value, " has been deleted!");
    } else {
      let previous = this.head;
      while (previous.next && previous.next.value !== value) {
        previous = previous.next;
      }
      if (previous.next) {
        let removeNode = previous.next;
        previous.next = removeNode.next;
        this.size--;
        console.log(value, " has been deleted!");
      }
      return null;
    }
  }
  // Searches a value (from each node) in the list
  search(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return -1;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }
  // Reverse the list
  reverse() {
    let previous = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
  // Prints all the node values in list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      // Gets the start in a variable
      let current = this.head;
      let listValues = "";
      // Will run until it reaches null
      while (current) {
        listValues += `${current.value} `;
        // each iteration we assign next node to current
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

console.log("List is empty ? ", list.isEmpty());
console.log("List size = ", list.getSize());

list.insert(30, 0);
list.insert(10, 1);
list.insert(20, 2);
list.insert(50, 3);
list.print();
console.log("Element found at position : ", list.search(20));
list.reverse();
list.print();
console.log("List size = ", list.getSize());

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.append(10);
// list.append(20);
// list.append(30);

// // Inserts value at the start of the List
//   prepend(value) {
//     // Creating instance
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       // head now holds the value of node
//       this.head = node;
//     } else {
//       // next node points to head / first node
//       node.next = this.head;
//       // head now hold the new node value
//       this.head = node;
//     }
//     this.size++;
//   }
//   // Inserts value at the end of the List
//   append(value) {
//     // Creating instance
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       // head now holds the value of node
//       this.head = node;
//     } else {
//       // gets the head / first node in a variable
//       let previous = this.head;
//       // Will run until it points to null
//       while (previous.next) {
//         // keep storing the node value in previous
//         previous = previous.next;
//       }
//       // previous which is at last node points to last value
//       previous.next = node;
//     }
//     this.size++;
//   }
