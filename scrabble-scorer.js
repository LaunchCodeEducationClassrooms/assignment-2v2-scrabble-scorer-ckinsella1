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
[ simple({ name: 'Simple Score', description: 'Each letter is worth 1 point.', scorerFunction: simpleScore(word) }), bonus({ name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scorerFunction: vowelBonusScore(word) }), scrabble({ name: 'Scrabble', description: 'The traditional scoring algorithm.', scorerFunction: oldScrabbleScorer(word) }) ];

function initialPrompt() {
  let word = input.question("Let's play some scrabble! Enter a word: ");
};

function scorerPrompt() {
  let number = input.question("Which scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ");
  if (number == 0){
    scorer = option0
  } else if (number == 1){
    scorer = option1 
  } else if (number == 2) {
    scorer = option2
  }
return scorer; 
}

function transform() {};

let newPointStructure = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 };



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

