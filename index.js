import { Queue } from './queue/queue.js';

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

for (const data of queue.traverse()) {
  console.log(data);
}

console.log(queue.dequeue());
