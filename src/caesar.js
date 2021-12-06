// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k",
  "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || 25 < shift || shift < -25) return false;
      //checks validity of shift variables
    const messageArray = [];
    for (let i = 0; i < input.length; i++) {
      let value = alphabet.indexOf(input[i].toLowerCase());
      if (value < 0) {
        //protects spaces and punctuation
        messageArray.push(input[i]);
      } else {
        if (encode === true) {
          //encoding message
          let newPosition = value + shift;
          if (newPosition > 25) newPosition = newPosition - 26;
          if (newPosition < 0) newPosition = newPosition + 26;
          messageArray.push(alphabet[newPosition]);
        } else {
          //decoding message
          let newPosition = value - shift;
          if (newPosition > 25) newPosition = newPosition - 26;
          if (newPosition < 0) newPosition = newPosition + 26;
          messageArray.push(alphabet[newPosition]);
        };
      };
    };
    const result = messageArray.join("");
    return result;
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
