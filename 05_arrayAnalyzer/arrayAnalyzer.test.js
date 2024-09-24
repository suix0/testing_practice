import { arrayAnalyzer } from './arrayAnalyzer.js';

test('arrayAnalyzer function should exist', () => {
  expect(typeof arrayAnalyzer).toBe('function');
})

test('arrayAnalyzer function should exist', () => {
  expect(arrayAnalyzer([2, 4, 6, 8, 10])).toEqual({
    average: 6,
    min: 2,
    max: 10,
    length: 5 
  });
})

test('arrayAnalyzer function should exist', () => {
  expect(arrayAnalyzer([20, 30, 40, 50, 100])).toEqual({
    average: 48,
    min: 20,
    max: 100,
    length: 5 
  });
})





