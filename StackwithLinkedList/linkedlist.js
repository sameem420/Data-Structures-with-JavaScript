class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // Inserts value at the end of the List
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  // removes value from the front of the list
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.tail = this.tail.next;
    this.size--;
    return value;
  }
  // removes value from the end of the list
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = this.head;
      while (previous.next !== this.tail) {
        previous = previous.next;
      }
      previous.next = null;
      this.tail = previous;
    }
    this.size--;
    return value;
  }
  // Prints all the nodes in list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty!");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

module.exports = LinkedList;