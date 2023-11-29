import { Stack } from './stack.js';

function baseConverter(decimal, base) {
  const stack = new Stack();
  while (decimal > 0) {
    const remainder = Math.floor(decimal % base);
    stack.push(remainder);
    decimal = Math.floor(decimal / base);
  }

  const digits = '0123456789ABCDEF';

  let baseStr = '';
  while (!stack.isEmpty()) baseStr += String(digits[stack.pop()]);

  return baseStr + '(' + base + ')';
}
const result = baseConverter(255, 16);
console.log(result);
