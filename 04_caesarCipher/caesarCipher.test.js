import { caesarCipher } from './caesarCipher.js';

test('caesarCipher function should exist', () => {
  expect(typeof caesarCipher).toBe('function');
})

test('xyz should return abc when shift is 3', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('abc should return def when shift is 3', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
})

test('HeLLo should return KhOOr when shift is 3', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('Hello, world! should return Khoor, Zruog! when key is 3', () => {
  expect(caesarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
})

test('Hello, World! should return Khoor, Zruog! when key is 3', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('Empty string should return an empty string', () => {
  expect(caesarCipher('', 5)).toBe('');
});

test('12345 should return 12345 when shift is 3', () => {
  expect(caesarCipher('12345', 3)).toBe('12345');
});

test('Hello, World! 2024 should return Khoor, Zruog! 2024 when key is 3', () => {
  expect(caesarCipher('Hello, World! 2024', 3)).toBe('Khoor, Zruog! 2024');
});

test('ABCDEFGHIJKLMNOPQRSTUVWXYZ should return DEFGHIJKLMNOPQRSTUVWXYZABC when shift is 3', () => {
  expect(caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3)).toBe('DEFGHIJKLMNOPQRSTUVWXYZABC');
});

test('z should return c when shift is 3', () => {
  expect(caesarCipher('z', 3)).toBe('c');
});

test('Z should return C when shift is 3', () => {
  expect(caesarCipher('Z', 3)).toBe('C');
});
