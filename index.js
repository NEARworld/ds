import { Queue } from './queue/queue.js';

const queue = new Queue();

const values = [10, 20, 30, 40, 50];
values.forEach((value) => queue.enqueue(value));

for (const data of queue.traverse()) {
  console.log(data);
}

console.log('dequeued node:', queue.dequeue());
queue.peek();
