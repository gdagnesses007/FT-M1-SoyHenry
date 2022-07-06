'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let dec = 0;
  for (let i = 0; i < num.length; i++) {
    dec += num[i] * Math.pow(2, num.length - 1 - i);
  }
  return dec;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = '';
  while (num > 0) {
    bin = num % 2 + bin;
    num = Math.floor(num / 2);  
  }
  return bin;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}