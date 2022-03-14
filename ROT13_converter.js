var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
var oppAlph = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function rot13() {
  var str = document.getElementById("input").value;
  var newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (newStr[i] === alphabet[j]) {
        newStr[i] = oppAlph[j];
      } else if (newStr[i] === oppAlph[j]) {
        newStr[i] = alphabet[j];
      }
    }
  }
  document.getElementById("output").innerHTML = "ROT13 convertion: " + newStr.join("");

}

