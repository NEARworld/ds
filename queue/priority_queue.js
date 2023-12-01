import { SingleLinkedList } from '../linked_list/single_linked_list.js';

export class PriorityQueueElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

export class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    const item = new PriorityQueueElement(data, priority);

    if (this.isEmpty()) {
      this.items.push(item);
    } else {
      for (let i = 0; i < this.items.length; ++i) {
        if (this.items[i].priority < item.priority) {
          this.items.splice(i, 0, item);
          break;
        }
      }
    }
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    for (const item of this.items) {
      console.log(item);
    }
  }
}

const pq = new PriorityQueue();
pq.enqueue('a', 1);
pq.enqueue('b', 2);
pq.enqueue('c', 4);
pq.enqueue('d', 3);
pq.enqueue('e', 5);

pq.print();
