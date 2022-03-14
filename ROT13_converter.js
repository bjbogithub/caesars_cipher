function rot13() {
  let str = document.getElementById("input").value;
  let lettersA2M = "ABCDEFGHIJKLM";
  let lettersN2Z = "NOPQRSTUVWXYZ";
  let decodedString = "";
  for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[A-M]/)) {
          decodedString += lettersN2Z[lettersA2M.indexOf(str[i])];
      } else if (str[i].match(/[N-Z]/)) {
          decodedString += lettersA2M[lettersN2Z.indexOf(str[i])];
      } else {
          decodedString += str[i];
      }
  }
  let palindrome_answer2= decodedString;
  document.getElementById('output').innerHTML = palindrome_answer2;
}