
function translatePigLatin(str) {
  
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  
  if(str[0].match(regex)) {
    pigLatin = str + "way";
  } else {
    var vowelstart = str.indexOf(str.match(regex)[0]);

    pigLatin = str.substr(vowelstart) + str.substr(0, vowelstart) + "ay";
  }


//     console.log(vowelstart);
   return pigLatin;
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("california"));

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");

