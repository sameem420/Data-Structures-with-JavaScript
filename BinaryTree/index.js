class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Traverse preOrder
  traversePreOrder(root) {
    if (root === null) return;

    // print the node data
    console.log(root.value);
    // goto left
    this.traversePreOrder(root.left);
    // goto right
    this.traversePreOrder(root.right);
  }
  // Traverse inOrder
  traverseInOrder(root) {
    if (root === null) return;

    // goto left
    this.traverseInOrder(root.left);
    // print the node data
    console.log(root.value);
    // goto right
    this.traverseInOrder(root.right);
  }
  // Traverse postOrder
  traversePostOrder(root) {
    if (root === null) return;

    // goto left
    this.traversePostOrder(root.left);
    // goto right
    this.traversePostOrder(root.right);
    // print the node data
    console.log(root.value);
  }
}

const root = new BinaryTreeNode(1);

root.left = new BinaryTreeNode(50);
root.right = new BinaryTreeNode(100);

root.left.left = new BinaryTreeNode(40);
root.left.right = new BinaryTreeNode(20);

root.right.left = new BinaryTreeNode(80);
root.right.right = new BinaryTreeNode(60);

console.log(root);
console.log("Pre order Traversal: \n");
root.traversePreOrder(root);
console.log("\nIn order Traversal: ");
root.traverseInOrder(root);
console.log("\nPost order Traversal: ");
root.traversePostOrder(root);
