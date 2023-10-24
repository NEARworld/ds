class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = {
  head: null,
};

function pushNode(value) {
  const newNode = new Node(value);

  if (!list.head && (list.head = newNode)) return;
  let currentNode = list.head;
  while (currentNode.next) currentNode = currentNode.next;
  currentNode.next = newNode;
}

function removeNode(value) {
  if (!list.head) return "list is empty";

  let currentNode = list.head;
  let previousNode = null;

  while (currentNode && currentNode.value !== value) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  if (previousNode) {
    previousNode.next = currentNode.next;
  } else {
    list.head = null;
  }
}

pushNode(1);
pushNode(2);
pushNode(3);
pushNode(4);
pushNode(5);
console.log(list);

removeNode(5);

let currentNode = list.head;
while (currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
