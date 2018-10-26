  
  module.exports = scoreCharacters

  const scores = [
    0,
    0,
    0,
    0,
    0,
    0
  ]

  const characters = [
    'Chandler',
    'Joey',
    'Ross',
    'Pheobe',
    'Rachel',
    'Monica'
  ]

  // let scores = {
  //   'Chandler' : 0,
  //   'Joey': 0,
  //   'Ross': 0,
  //   'Pheobe': 0,
  //   'Rachel': 0,
  //   'Monica': 0
  // }

function scoreCharacters (addPoints, character) {
  // loop that goes through scores object to review which key/character has been passed
  
  // let scoresArr = Object.keys(scores)
  // let found = scoresArr.find((person) => {
  //   return person.scores === character
  //   });
  // console.log (found)
  // return found

  console.log(addPoints)
  console.log(character)
  console.log(scores.length)

for (let x = 0; x < scores.length; x++) {
  console.log(x)
  if (character == characters[x]) {
    console.log('found match: ' + character[x])
    scores.splice(x, 1, addPoints)
    return character, scores
    
  }
  console.log(scores)

}
  
  // if statement that will compare the character given vs the key from the loop
    // once the name matches, grab the value of that key, 
      // add the new  score
      // update the object with the score

}

// scoreCharacters(5, 'Joey')
