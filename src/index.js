const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let letters = [];
  let morseCode = '';
  let ln = expr.length;

  for(let i = 0; i <= ln; i++){
    let sub = expr.substring(0, 10);

    if(sub !== '**********') {
      for(let j = 0; j <= 5; j++){
        sub.substring(0, 2) === '10' ?
          morseCode += '.' : sub.substring(0, 2) === '11' ?
            morseCode += '-' : morseCode += '';
        sub = sub.slice(2);
      }
      letters.push(MORSE_TABLE[morseCode]);
      morseCode = '';
    }else letters.push(' ');
    expr = expr.slice(10);
  }
  return letters.join('');
}

module.exports = {
    decode
}