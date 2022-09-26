const LinkedList = require("./linkedlist");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();

console.log("Stack is empty ? ", stack.isEmpty());
console.log("Stack size = ", stack.getSize());
stack.push(10);
stack.push(30);
stack.push(20);
stack.print();
stack.pop();
stack.print();
console.log(stack.peek());
console.log("Stack size = ", stack.getSize());
