class Stack {
  constructor() {
    this.items = [];
  }
  // Adds a new element at the top of Stack
  push(element) {
    this.items.push(element);
  }
  // Removes an element from the top of Stack
  pop() {
    this.items.pop();
  }
  // Access the top element in Stack
  peek() {
    return this.items[this.items.length - 1];
  }
  // size of the Stack
  size() {
    return this.items.length;
  }
  // Checks if Stack is Empty (returns true otherwise false)
  isEmpty() {
    return this.items.length === 0;
  }
  // clears the stack
  clear() {
    this.items = [];
  }
  // Outputs all the elements in Stack
  print() {
    return this.items;
  }
  // Iterate over each element in Stack
  iterate() {
    for (const el of this.items) {
      console.log(el);
    }
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(5);
stack.push(1);
stack.push(3);
console.log("Elements added = ", stack);
stack.pop();
console.log("Top element removed = ", stack);
console.log("Element at top of Stack = ", stack.peek());
console.log(stack.print());
console.log(stack.size());
stack.iterate();
