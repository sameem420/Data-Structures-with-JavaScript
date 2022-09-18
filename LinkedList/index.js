class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  // Inserts value at the start of the List
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
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
    } else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = node;
    }
    this.size++;
  }

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

const list = new LinkedList();

console.log("List is empty ? ", list.isEmpty());
console.log("List size = ", list.getSize());
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
list.append(10);
list.append(20);
list.append(30);
list.print();
console.log("List size = ", list.getSize());
