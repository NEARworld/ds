import { BinaryTree } from './BinaryTree.js';
import { BinaryTreeNode } from './BinaryTreeNode.js';

export class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  insert(startNode, newNode) {
    if (this.root === null) return (this.root = newNode);
    if (!startNode) return newNode;

    if (newNode.value < startNode.value) {
      startNode.left = this.insert(startNode.left, newNode);
    }
    if (newNode.value > startNode.value) {
      startNode.right = this.insert(startNode.right, newNode);
    }
    return startNode;
  }
}
