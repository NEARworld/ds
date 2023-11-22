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

function depthFirstTraverse(root) {
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}

depthFirstTraverse(bt.root);
