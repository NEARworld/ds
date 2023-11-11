import { SingleLinkedList, Node } from '../linked_list/single_linked_list.js';

export class Queue extends SingleLinkedList {
  constructor() {
    super();
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.head === null) return (this.head = newNode);

    let currentNode = this.head;

    while (currentNode.next) currentNode = currentNode.next;
    currentNode.next = newNode;
  }

  dequeue() {
    if (this.head === null) return null;
    const node = this.head;
    this.head = node.next;
    node.next = null;
    return node;
  }
}
