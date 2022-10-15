class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}

// create nodes with values
const abe = new TreeNode("Abe");
const john = new TreeNode("John");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");

// associate root with is descendants
abe.descendants.push(john);
john.descendants.push(bart, lisa, maggie);
//         Abe
//         /
//        John
//     /   |   \
//   Bart Lisa Maggie
console.log(abe);
console.log(john);
