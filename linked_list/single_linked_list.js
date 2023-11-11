export class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!list.head && (list.head = newNode)) return;
    let currentNode = list.head;
    while (currentNode.next) currentNode = currentNode.next;
    currentNode.next = newNode;
  }

  remove(value) {
    if (!list.head) return 'list is empty';

    let currentNode = list.head;
    let previousNode = null;

    while (currentNode && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode) previousNode.next = currentNode.next;
    else list.head = null;
  }

  *traverse() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }
}

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
