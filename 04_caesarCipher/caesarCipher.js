function caesarCipher(string, key) {
  if (key > 26) {
    key = simplifyKey(key); 
  }

  // Shift the alphabets 
  const alphabetsLowerCase = 'abcdefghijklmnopqrstubwxyz'.split('');
  const alphabetsUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const cipherTextLowerCase = [...alphabetsLowerCase];
  const cipherTextUpperCase = [...alphabetsUpperCase];
  for (let i = 0; i < key; i++) {
    const currentCharLowerCase = cipherTextLowerCase.shift();
    const currentCharUpperCase = cipherTextUpperCase.shift();
    cipherTextLowerCase.push(currentCharLowerCase);
    cipherTextUpperCase.push(currentCharUpperCase); 
  }

  // Get the cipher equivalent of the original string
  string = string.split('')
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    if (isLowerCase(currentChar) === true) {
      const indexOfChar = alphabetsLowerCase.findIndex((char) => {
        return char === currentChar;
      })
      string[i] = cipherTextLowerCase[indexOfChar];
    } else if (isUpperCase(currentChar) === true) {
      const indexOfChar = alphabetsUpperCase.findIndex((char) => {
        return char === currentChar;
      })
      string[i] = cipherTextUpperCase[indexOfChar];
    }
  }
  return string.join('');
}

function simplifyKey(key) {
  return key % 26;
}

function isLowerCase(char) {
  return char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
}

function isUpperCase(char) {
  return char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
}

export { caesarCipher };