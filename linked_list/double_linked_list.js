class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data, index) {
    if (index < 0) throw new Error('invalid index');

    const newNode = new Node(data);

    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (index === 0) {
      if (this.head.next === null) this.head = newNode;
      else {
        this.head.next.prev = newNode;
        newNode.next = this.head.next;
        this.head = newNode;
      }
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    let count = 0;
    while (count < index) {
      if (currentNode === null) throw new Error('index overflow');
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    newNode.prev = previousNode;
    previousNode.next = newNode;

    if (currentNode) newNode.next = currentNode.next;
    else this.tail = newNode;
  }

  *traverse() {
    if (this.head === null) return;

    let currentNode = this.head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
