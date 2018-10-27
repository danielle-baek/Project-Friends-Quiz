module.exports = {
  scoreCharacters,
  init,
  highestScore
}

// let scoreChandler = 0
// let scoreJoey = 0
// let scoreRoss = 0
// let scorePheobe = 0
// let scoreRachel = 0
// let scoreMonica = 0

let scores = {
  'Chandler': 0,
  'Joey': 0,
  'Ross': 0,
  'Phoebe': 0,
  'Rachel': 0,
  'Monica': 0
}

function init () {
  scores = {
    'Chandler': 0,
    'Joey': 0,
    'Ross': 0,
    'Phoebe': 0,
    'Rachel': 0,
    'Monica': 0
  }
  console.log(scores)
}
function scoreCharacters (addPoints, character) {
  scores[character] += addPoints
  console.log(scores)
}

function highestScore () {
  let highest = ['Chandler']
  for (let key in scores) {
    if (key !== 'Chandler') {
      if (scores[key] > scores[highest[0]]) {
        highest = [key]
      } else if (scores[key] === scores[highest[0]]) {
        highest.push(key)
      }
    }
  }
  console.log(highest)
  return highest
}

// loop that goes through scores object to review which key/character has been passed

// let scoresArr = Object.keys(scores)
// let found = scoresArr.find((person) => {
//   return person.scores === character
//   });
// console.log (found)
// return found

//   console.log(addPoints)
//   console.log(character)
//   console.log(scores.length)

// for (let x = 0; x < scores.length; x++) {
//   console.log(x)
//   if (character == characters[x]) {
//     console.log('found match: ' + character[x])
//     scores.splice(x, 1, addPoints)
//     return character, scores

//   }
//   console.log(scores)

// }

// if statement that will compare the character given vs the key from the loop
// once the name matches, grab the value of that key,
// add the new  score
// update the object with the score

// if statement that will compare the character given vs the key from the loop
// once the name matches, grab the value of that key,
// add the new  score
// update the object with the score

// scoreCharacters(5, 'Joey')
