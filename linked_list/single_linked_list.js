class SingleLinkedList {
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
    if (!list.head) return "list is empty";

    let currentNode = list.head;
    let previousNode = null;

    while (currentNode && currentNode.value !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode) previousNode.next = currentNode.next;
    else list.head = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new SingleLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

let currentNode = list.head;
while (currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
