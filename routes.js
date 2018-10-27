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
  let character = characterData[matchingChar[0]]
  if (matchingChar.length > 1) {
    for (let i = 1; i < matchingChar.length; i++) {
      character.name += ' & ' + matchingChar[i]
      console.log('also!!')
    }
  }
  res.render('./result.hbs', character)
})

router.post('/start', (req, res) => {
  console.log('redirecting to results')
  res.redirect('/friends/start')
})

router.get('/start', (req, res) => {
  //let id = req.params.id
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
