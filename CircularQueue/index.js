class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.size = size;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  // Checks if Queue is Empty (returns true otherwise false)
  isEmpty() {
    return this.currentLength === 0;
  }
  // Checks if Queue is Full (returns true otherwise false)
  isFull() {
    return this.currentLength === this.size;
  }
  // Adds a new element to the Queue
  enqueue(element) {
    if (this.currentLength !== this.size) {
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  // Removes an element from the start of Queue
  dequeue() {
    if (this.currentLength === 0) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.size;
    this.currentLength -= 1;
    if (this.currentLength === 0) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  // Access the first element in Queue
  peek() {
    if (this.currentLength !== 0) {
      return this.items[this.front];
    }
    return null;
  }
  // Size of the Queue
  size() {
    return this.currentLength;
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

const queue = new CircularQueue(5);

console.log("Queue is Empty = ", queue.isEmpty());
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(2);

console.log("elements in Queue = ", queue.print());
console.log("Queue is Full = ", queue.isFull());
console.log("element removed from Queue = ", queue.dequeue());
console.log("elements in Queue = ", queue.print());
console.log("Element at start of Queue = ", queue.peek());
console.log("Size of Queue = ", queue.size());
queue.clear();
console.log("element removed from Queue = ", queue.dequeue());
