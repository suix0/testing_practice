import { reverseString } from './reverseString.js';

test('reverseString function should exist', () => {
  expect(typeof reverseString).toBe('function');
})

test('megalodon should return nodolagem', () => {
  expect(reverseString('megalodon')).toBe('nodolagem');
})

test('BooMer should return reMooB', () => {
  expect(reverseString('BooMer')).toBe('reMooB');
})

test('friEND should return DNEirf', () => {
  expect(reverseString('friEND')).toBe('DNEirf');
})