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
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

const dl = new DoubleLinkedList();
dl.insert(100, 0);
dl.insert(200, 1);
dl.insert(300, 2);
dl.insert(400, 3);
dl.insert(500, 1);
console.log(dl.head);
console.log(dl.head.next);
console.log(dl.head.next.next);
