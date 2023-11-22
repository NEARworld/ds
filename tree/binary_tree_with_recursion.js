import { BinaryTree } from './BinaryTree.js';
import { BinaryTreeNode } from './BinaryTreeNode.js';

const bt = new BinaryTree();
bt.root = new BinaryTreeNode('a');
const b = new BinaryTreeNode('b');
const c = new BinaryTreeNode('c');
const d = new BinaryTreeNode('d');
const e = new BinaryTreeNode('e');

bt.root.left = b;
b.left = c;
c.left = d;
c.right = e;

function depthFirstTraverse2(root) {
  if (root === null) return [];

  const leftVals = depthFirstTraverse2(root.left);
  const rightVals = depthFirstTraverse2(root.right);

  return [root.value, ...leftVals, ...rightVals];
}

depthFirstTraverse2(bt.root).forEach((val) => console.log(val));
