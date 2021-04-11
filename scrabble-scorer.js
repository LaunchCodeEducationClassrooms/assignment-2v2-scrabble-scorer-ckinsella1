const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

let simpleScore = function(word) {
  word = word.toUpperCase();
  let letterPoints = 0
  for (let i = 0; i < word.length; i++){
    letterPoints++
}   
  return letterPoints;
}

let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let letterPoints= 0;
  let vowels = ['A', 'E', 'I', 'O', 'U']
    for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[i])){
      letterPoints += 3
    } else {
    letterPoints++
    }
}   
  return letterPoints;
}

let scrabbleScore;

const scoringAlgorithms = 
[ Object({ name: 'Simple Score', description: 'Each letter is worth 1 point.', scorerFunction: simpleScore(word) }), Object({ name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScore(word) }), Object({ name: 'Scrabble', description: 'The traditional scoring algorithm.', scorerFunction: oldScrabbleScorer(word) }) ];

function initialPrompt() {
  let word = input.question("Let's play some scrabble! Enter a word: ");
  return word;
};

function scorerPrompt() {
  let scorer = input.question("Which scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ");
return scorer; 
}

function transform() {};

let newPointStructure = transform(oldPointStructure)



function runProgram() {
   initialPrompt();
   scorerPrompt(); 
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

