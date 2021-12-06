// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const trueAlphabet = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      //creates reference for real alphabet

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    let repeats = 0;
    for (let i = 0; i < alphabet.length; i++) {
      let counter = 0;
      if (alphabet[counter] === alphabet[i]) {
        counter ++;
        repeats++;
      };
    };
    if (repeats > 1) return false; 
     //checks validity of alphabet
    
    let messageArray = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        messageArray.push(input[i]);
          //protects spaces 
      } else {
        if (encode === true) {
          //for encoding messages
          let value = input[i];
          let position;
            for (let j = 0; j < trueAlphabet.length; j++) {
              if (value == trueAlphabet[j]) position = j;
            }
            messageArray.push(alphabet[position]);
        } else {
          if (encode === false) {
            //for decoding messages
            let value = input[i];
            let position;
            for (let j = 0; j < alphabet.length; j++) {
              if (value == alphabet[j]) position = j;
            };
            messageArray.push(trueAlphabet[position]);
          };
        };
      };
    };
    const result = messageArray.join("");
    return result;
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
