import { SingleLinkedList, Node } from '../linked_list/single_linked_list.js';

export class Queue extends SingleLinkedList {
  constructor() {
    super();
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.tail === null) return (this.head = this.tail = newNode);
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }

  dequeue() {
    if (this.head === null) return null;
    const node = this.head;
    this.head = node.next;
    node.next = null;
    return node;
  }

  peek() {
    return this.head;
  }
}
