import { BinaryTreeNode } from './BinaryTreeNode.js';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(startNode, value) {
    const newNode = new BinaryTreeNode(value);
    // 루트가 없는 경우 루트에 삽입
    if (this.root === null) return (this.root = newNode);
    // 왼쪽 오른쪽 자식 모두 없거나 왼쪽 자식만 없는 경우
    if (!startNode.left) return (startNode.left = newNode);
    // 오른쪽 자식만 없는 경우
    if (!startNode.right) return (startNode.right = newNode);
    // 양쪽 모두 있는 경우
    // 왼쪽 노드에 삽입
    this.insert(startNode.left, value);
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
}

const bt = new BinaryTree();

bt.insert(bt.root, 10);
bt.insert(bt.root, 20);
bt.insert(bt.root, 30);
bt.insert(bt.root, 40);
bt.insert(bt.root, 50);
bt.insert(bt.root, 60);

console.log('inOrderTraverse starts');
bt.inOrderTraverse(bt.root);
console.log('traverseOnlyLeftTree starts');
bt.traverseOnlyLeftSubTree(bt.root);
