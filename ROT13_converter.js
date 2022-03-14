function rot13() {
    var letters = {
        'N':'A',
        'O':'B',
        'P':'C',
        'Q':'D',
        'R':'E',
        'S':'F',
        'T':'G',
        'U':'H',
        'V':'I',
        'W':'J',
        'X':'K',
        'Y':'L',
        'Z':'M',
        'A':'N',
        'B':'O',
        'C':'P',
        'D':'Q',
        'E':'R',
        'F':'S',
        'G':'T',
        'H':'U',
        'I':'V',
        'J':'W',
        'K':'X',
        'L':'Y',
        'M':'Z',
        '?':'?',
        '!':'!',
        '.':'.',
        ' ':' '
    };
    var strOut = '';
    var newStr;
    var str = document.getElementById("input").value;
    for(var i =0; i < str.length; i++){
      newStr = letters[str[i]];
      strOut += newStr;
    }
    document.getElementById('output').innerHTML = strOut;
}


