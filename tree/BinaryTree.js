import { BinaryTreeNode } from './BinaryTreeNode.js';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(startNode, value) {
    if (!value) return;

    const newNode = new BinaryTreeNode(value);
    if (this.root === null) return (this.root = newNode);

    if (!startNode) return;
    let currentNode = startNode;

    if (!currentNode.left) return (currentNode.left = newNode);
    if (!currentNode.right) return (currentNode.right = newNode);

    this.insert(currentNode.left, value);
  }

  isTreeEmpty() {
    if (this.root === null) {
      console.log('This tree is empty');
      return true;
    }
    return false;
  }

  traverseOnlyLeftSubTree(startNode) {
    if (this.isTreeEmpty()) return null;
    if (startNode) {
      console.log(startNode.value);
      this.traverseOnlyLeftSubTree(startNode.left);
    }
  }

  inOrderTraverse(startNode) {
    if (this.isTreeEmpty()) return null;
    if (startNode.left) this.inOrderTraverse(startNode.left);
    console.log(startNode.value);
    if (startNode.right) this.inOrderTraverse(startNode.right);
  }

  preOrderTraverse(startNode) {
    if (this.isTreeEmpty()) return null;
    console.log(startNode.value);
    if (startNode.left) this.preOrderTraverse(startNode.left);
    if (startNode.right) this.preOrderTraverse(startNode.right);
  }

  postOrderTraverse(startNode) {
    if (this.isTreeEmpty() || startNode === null) return null;
    if (startNode.left) this.postOrderTraverse(startNode.left);
    if (startNode.right) this.postOrderTraverse(startNode.right);
    console.log(startNode.value);
  }
}

const bt = new BinaryTree();
const values = [10, 20, 30, 40, 50, 60];

for (const value of values) {
  bt.insert(bt.root, value);
}

console.log('inOrderTraverse starts');
bt.inOrderTraverse(bt.root);
console.log('traverseOnlyLeftTree starts');
bt.traverseOnlyLeftSubTree(bt.root);
