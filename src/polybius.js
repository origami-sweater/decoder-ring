// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = [
    {letter: "a", number: 11},
    {letter: "b", number: 21},
    {letter: "c", number: 31},
    {letter: "d", number: 41},
    {letter: "e", number: 51}, 
    {letter: "f", number: 12},
    {letter: "g", number: 22},
    {letter: "h", number: 32},
    {letter: "i/j", number: 42},
    {letter: "k", number: 52},
    {letter: "l", number: 13},
    {letter: "m", number: 23},
    {letter: "n", number: 33},
    {letter: "o", number: 43},
    {letter: "p", number: 53},
    {letter: "q", number: 14},
    {letter: "r", number: 24},
    {letter: "s", number: 34},
    {letter: "t", number: 44},
    {letter: "u", number: 54},
    {letter: "v", number: 15},
    {letter: "w", number: 25},
    {letter: "x", number: 35},
    {letter: "y", number: 45},
    {letter: "z", number: 55}
  ]; 

  function polybius(input, encode = true) {
    let result;  
    if (encode === true) {
      //if encoding:
      let encodeArray = [];
      for (let j = 0; j < input.length; j++) {
        encodeArray.push(input[j].toLowerCase());
      };
      for (let i = 0; i < encodeArray.length; i++) {
        if (encodeArray[i] !== " ") {
          //protects spaces
          for (let k = 0; k < alphabet.length; k++) {
            if (encodeArray[i] == "i" || encodeArray[i] == "j") {
              //handles the i/j comparison
              encodeArray[i] = 42;
            } else if (encodeArray[i] == alphabet[k].letter) {
              encodeArray[i] = alphabet[k].number;
            };
          }; 
        }; 
      };
      result = encodeArray.join("");
    } else {
      //if decoding:
      let testLength = [];
      for (let j = 0; j < input.length; j++) {
        if (input[j] !== " ") testLength.push(input[j]);
      };
      if (Number.isInteger(testLength.length/2) === false) return false;
        //tests for even number input
      let decoded = [];
      let decodeArray = input.split(" ");
        //preserves spaces
      decodeArray.forEach((word) => {
        let numberToLetter = [];
        for (let i = 0; i < word.length; i = i + 2) {
          let v = word[i] + word[i+1];
          for (let k = 0; k < alphabet.length; k++) {
            if (v == alphabet[k].number) numberToLetter.push(alphabet[k].letter);
          };
        };
        decoded.push(numberToLetter.join(""));
          //deconstructs array within array
      });
      result = decoded.join(" ");
    };
   return result;  
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
