import { BinaryTree } from './BinaryTree.js';
import { BinarySearchTree } from './BinarySearchTree.js';
import { BinaryTreeNode } from './BinaryTreeNode.js';

const values = [10, 20, 30, 40, 50, 60];

const bt = new BinaryTree();

for (const value of values) {
  bt.insert(bt.root, value);
}

console.log('Binary Tree Operations');
console.log('inOrderTraverse starts');
bt.inOrderTraverse(bt.root);
console.log('traverseOnlyLeftTree starts');
bt.traverseOnlyLeftSubTree(bt.root);

const bstValues = [50, 30, 10, 40, 20, 60, 70];
const bst = new BinarySearchTree();

for (const value of bstValues) {
  bst.insert(bst.root, new BinaryTreeNode(value));
}

console.log('Binary Search Tree Operations');
console.log('preOrderTraverse starts');
bst.preOrderTraverse(bst.root);
