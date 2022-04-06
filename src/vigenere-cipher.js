const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    const n = 26;
    let keyword = '';
    let arrayOfStringToCode = [];
    let arrayOfKeyword = [];
    let arrayOfEnctipt = [];
    let arrayOfNotAlphabet = [];
    let result = [];
    const regexp = /[^a-z]/i;

    for (let i = 0; i < string.length; i++) {
      if (regexp.test(string[i])) {
        arrayOfNotAlphabet.push([i, string[i]]);
      }
    }
    string = string.replace(/[^a-z]/gi, '')
    while (keyword.length < string.length) {
      keyword += key;
    }
    keyword = keyword.substring(0, string.length);

    for (let char of string.toUpperCase()) {
      arrayOfStringToCode.push(Math.abs(char.charCodeAt(0) - 65));
    }

    for (let char of keyword.toUpperCase()) {
      arrayOfKeyword.push(Math.abs(char.charCodeAt(0) - 65));
    }

    for (let i = 0; i < string.length; i++) {
      arrayOfEnctipt[i] = (arrayOfStringToCode[i] + arrayOfKeyword[i]) % n;
    }

    arrayOfEnctipt.forEach(element => {
      result.push(String.fromCharCode(element + 65));
    });
    arrayOfNotAlphabet.forEach(element => {
      result.splice(element[0], 0, element[1]);
    });
    if (this.type === false) {
      return result.reverse().join('');
    } else {
      return result.join('')
    }

  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    if (string === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    const regexp = /[^a-z]/i;
    const n = 26;
    let keyword = '';
    let arrayOfStringToDecrypt = [];
    let arrayOfKeyword = [];
    let arrayOfDectipt = [];
    let arrayOfNotAlphabet = [];
    let result = [];

    for (let i = 0; i < string.length; i++) {
      if (regexp.test(string[i])) {
        arrayOfNotAlphabet.push([i, string[i]]);
      }
    }
    string = string.replace(/[^a-z]/gi, '')

    while (keyword.length < string.length) {
      keyword += key;
    }
    keyword = keyword.substring(0, string.length);

    for (let char of string.toUpperCase()) {
      arrayOfStringToDecrypt.push(Math.abs(char.charCodeAt(0) - 65));
    }

    for (let char of keyword.toUpperCase()) {
      arrayOfKeyword.push(Math.abs(char.charCodeAt(0) - 65));
    }

    for (let i = 0; i < string.length; i++) {
      arrayOfStringToDecrypt[i] >= arrayOfKeyword[i]
        ? arrayOfDectipt[i] = Math.abs((arrayOfStringToDecrypt[i] - arrayOfKeyword[i])) % n
        : arrayOfDectipt[i] = n - Math.abs(arrayOfStringToDecrypt[i] - arrayOfKeyword[i])
    }

    arrayOfDectipt.forEach(element => {
      result.push(String.fromCharCode(element + 65));
    });
    arrayOfNotAlphabet.forEach(element => {
      result.splice(element[0], 0, element[1]);
    });
    if (this.type === false) {
      return result.reverse().join('');
    } else {
      return result.join('')
    }

  }
}

module.exports = {
  VigenereCipheringMachine
};
