import { capitalize } from './capitalize.js';

test('Capitalize function should exist', () => {
  expect(typeof capitalize).toBe('function');
})

test('foo should return Foo', () => {
  expect(capitalize('foo')).toBe('Foo');
})

test('kraken should return Kraken', () => {
  expect(capitalize('kraken')).toBe('Kraken');
})

test('Grabe should still be the same', () => {
  expect(capitalize('Grabe')).toBe('Grabe');
})

test('expect takemikazuchi no kami to have capital K', () => {
  expect(capitalize('takemikazuchi no kami')).toBe('Takemikazuchi no kami')
})