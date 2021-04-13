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

function simpleScore(word) {
  word = word.toUpperCase();
  let letterPoints = 0
  for (let i = 0; i < word.length; i++){
    letterPoints++
}   
  return letterPoints;
}

function vowelBonusScore(word) {
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

function transform(oldPointStructure) {
  let newObject = {}
  for (item in oldPointStructure) {
    let letterList = oldPointStructure[item]
    for (let i = 0; i < letterList.length; i++) {
      let letter = oldPointStructure[item][i].toLowerCase(); 
      newObject[letter] = parseInt(item)
        }
  }
  return newObject;
};

let newPointStructure = transform(oldPointStructure)

function scrabbleScore(word) { 	
  word = word.toLowerCase();
	let letterPoints = 0;
	for (let i = 0; i < word.length; i++) {
    let letter = word[i] 
    let score = newPointStructure[letter] 
    letterPoints += parseInt(score)
	}
	return letterPoints;
 };

const scoringAlgorithms = 
[ Object({name: 'simple', description: 'Simple Score', scorerFunction: simpleScore}), Object({name: 'vowel', description: 'Bonus-vowels', scorerFunction: vowelBonusScore}), Object({name: 'scrabble', description: 'Scrabble', scorerFunction: scrabbleScore})];



function initialPrompt() {
  let word = input.question("Let's play some scrabble! Enter a word: ");
  return word;
};

function scorerPrompt() {
  let scorer = input.question("Which scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2: ");
return scorer; 
}






function runProgram() {
   let word =  initialPrompt();
   let scoreMethod = scorerPrompt(); 
   let score =  scoringAlgorithms[scoreMethod].scorerFunction(word)
   console.log(`Score for ${word}:`, score)
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

