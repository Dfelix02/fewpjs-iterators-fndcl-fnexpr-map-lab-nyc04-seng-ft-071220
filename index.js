const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let i = 0;
const titleCased = tutorials.map((tutorial) => tutorial.split(" ").map(word =>{
  if (word[i]==word[0])
    letter = word[0];
    letter = letter.toUpperCase();
  word.replaceAt(0,letter)
  // word[0] = letter
  debbuger;
  return letter;
  
  }));

console.log(titleCased)
