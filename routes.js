const data = require('./questions.json')
const characterData = require('./characters.json')
const express = require('express')
const score = require('./scoreCharacters')

const router = express.Router()
const scoreCharacters = require('./scoreCharacters')

router.get('/', (req, res) => {
  console.log('/friends/ route hit')
  res.redirect('/friends/home')
})

// router.post('/11', (req, res) => {
//   console.log('redirecting to results1')
//   res.redirect('/friends/results')
// })

router.get('/11', (req, res) => {
  console.log('redirecting to results')
  res.redirect('/friends/results')
})

router.get('/home', (req, res) => {
  console.log('home route hit [routes.js]')
  res.render('./index.hbs')
})

router.get('/results', (req, res) => {
  console.log('hit results')
  let matchingChar = score.highestScore()
  let character = {character:[]}
  for (let i in matchingChar) {
    character.character.push(characterData[matchingChar[i]])
  }
  console.log('result' + character)
  res.render('./result.hbs', character)
})

router.post('/start', (req, res) => {
  console.log('redirecting to results')
  res.redirect('/friends/start')
})

router.get('/start', (req, res) => {
  // let id = req.params.id
  let ques = data.Questions[0]
  score.init()
  console.log('reset scores')
  console.log('questions route hit')
  console.log(ques)
  res.render('./questions.hbs', ques)
})

router.post('/submit/:id', (req, res) => {
  console.log('redirecting to results')
  res.redirect('/friends/:id')
})

// router.get('/11', (req, res) => {
//   console.log('redirecting to results3')
//   res.redirect('/friends/results')
// })

module.exports = router
