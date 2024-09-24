import { calculator } from './calculator.js';

test('Calculator function exists', () => {
  expect(typeof calculator).toBe('object');
})

test('321 + 200 should be 521', () => {
  expect(calculator.add(321, 200)).toBe(521);
})

test('1000 + 100 should be 1100', () => {
  expect(calculator.add(1000, 100)).toBe(1100);
})

test('213 - 13 should be 200', () => {
  expect(calculator.subtract(213, 13)).toBe(200);
})

test('1 - 91 should be -90', () => {
  expect(calculator.subtract(1, 91)).toBe(-90)
})

test('213 x 2 should be 426', () => {
  expect(calculator.multiply(213, 2)).toBe(426);
})

test('9 x 9 should be 81', () => {
  expect(calculator.multiply(9, 9)).toBe(81);
})

test('1000 / 2 should be 500', () => {
  expect(calculator.divide(1000, 2)).toBe(500);
})

test('9 / 2 should be 4.5', () => {
  expect(calculator.divide(9, 2)).toBe(4.5);
})