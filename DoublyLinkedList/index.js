class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
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
      this.head.previous = node;
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
      node.previous = this.tail;
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
    this.size--;
    return value;
  }
  // removes value from the end of the list
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let nodeToRemove = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.size--;
    return nodeToRemove;
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
}

const list = new DoublyLinkedList();

console.log("List is empty ? ", list.isEmpty());
console.log("List size = ", list.getSize());
list.append(10);
list.append(30);
list.prepend(0);
list.print();
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();
console.log("List size = ", list.getSize());
list.reverse();
list.print();
