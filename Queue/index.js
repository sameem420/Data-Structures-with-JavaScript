class Queue {
  constructor() {
    this.items = [];
  }
  // Adds a new element to the Queue
  enqueue(element) {
    this.items.push(element);
  }
  // Removes an element from the start of Queue
  dequeue() {
    if (this.items.length === 0) {
      return "None, Queue is empty!";
    }
    return this.items.shift();
  }
  // Access the first element in Queue
  peek() {
    if (this.items.length === 0) {
      return "Queue is empty!";
    }
    return this.items[0];
  }
  // Size of the Queue
  size() {
    return this.items.length;
  }
  // Checks if Queue is Empty (returns true otherwise false)
  isEmpty() {
    return this.items.length === 0;
  }
  // Clears the Queue
  clear() {
    this.items = [];
  }
  // Outputs all the elements in Queue
  print() {
    return this.items;
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(1);
queue.enqueue(3);
console.log("elements in Queue = ", queue.print());
console.log("element removed from Queue = ", queue.dequeue());
console.log("elements in Queue = ", queue.print());
console.log("Element at start of Queue = ", queue.peek());
console.log("Size of Queue = ", queue.size());
queue.clear();
console.log("element removed from Queue = ", queue.dequeue());